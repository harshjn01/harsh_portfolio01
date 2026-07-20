import React, {useState, useEffect} from "react";
import "./HireModal.scss";

export default function HireModal({isOpen, onClose, isDark}) {
  const [formData, setFormData] = useState({
    name: "",
    projectType: "Web App Development",
    budget: "₹10k - ₹50k",
    message: ""
  });

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`New Project Inquiry: ${formData.projectType}`);
    const body = encodeURIComponent(
      `Hi Harsh,\n\nMy name is ${formData.name}.\n\nI am reaching out regarding a new project: ${formData.projectType}.\nEstimated Budget: ${formData.budget}\n\nProject Details:\n${formData.message}\n\nLooking forward to hearing from you!\n\nBest regards,\n${formData.name}`
    );
    
    const mailtoLink = `mailto:harshjain101011@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    onClose();
  };

  return (
    <div 
      className={`hire-modal-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div 
        className={`hire-modal-content ${isDark ? "dark-mode" : ""}`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
      >
        <div className="hire-modal-bg-glow" />
        
        <button className="hire-modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times" />
        </button>

        <div className="hire-modal-header">
          <h2>Let's build together</h2>
          <p>Fill out the form below to send me a proposal.</p>
        </div>

        <form className="hire-form" onSubmit={handleSubmit}>
          <div className="hire-form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="hire-form-group">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="Web App Development">Web App Development</option>
              <option value="AI Chatbot / Integration">AI Chatbot / Integration</option>
              <option value="Frontend / UI Design">Frontend / UI Design</option>
              <option value="Consulting / Other">Consulting / Other</option>
            </select>
          </div>

          <div className="hire-form-group">
            <label htmlFor="budget">Estimated Budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="Less than ₹10k">Less than ₹10k</option>
              <option value="₹10k - ₹50k">₹10k - ₹50k</option>
              <option value="₹50k - ₹1L">₹50k - ₹1L</option>
              <option value="₹1L+">₹1L+</option>
            </select>
          </div>

          <div className="hire-form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a bit about what you want to build..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="hire-submit-btn">
            Send Proposal <i className="fas fa-paper-plane" />
          </button>
        </form>
      </div>
    </div>
  );
}
