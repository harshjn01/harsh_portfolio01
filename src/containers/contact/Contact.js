import React, {useRef, useState, useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({x: -1000, y: -1000});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = e => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // The spotlight gradient needs to be visible only when hovered, and use a dark background.
  // In dark mode, it dims more aggressively.
  const overlayBackground = isHovered
    ? `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, ${isDark ? "rgba(10, 10, 20, 0.95)" : "rgba(0, 0, 0, 0.75)"} 100%)`
    : (isDark ? "rgba(10, 10, 20, 0)" : "rgba(0, 0, 0, 0)");

  return (
    <section 
      className="contact-section spotlight-container" 
      id="contact"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="spotlight-overlay" 
        style={{
          background: overlayBackground,
          opacity: isHovered ? 1 : 0
        }} 
      />
      <div className="contact-inner" style={{position: "relative", zIndex: 1}}>
        <Fade left duration={1000}>
          <div className="contact-header">
            <span className="section-label">{"// get in touch"}</span>
            <h2 className="contact-title">{contactInfo.title}</h2>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>

            <div className="contact-text-div">
              {contactInfo.location && (
                <span className="contact-detail">
                  📍 {contactInfo.location}
                </span>
              )}
              {contactInfo.number && (
                <a className="contact-detail" href={"tel:" + contactInfo.number}>
                  📞 {contactInfo.number}
                </a>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                ✉️ {contactInfo.email_address}
              </a>
            </div>
            <SocialMedia />
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="contact-image-div">
            {contactInfo.contactImagePath && (
              <div className="contact-photo-wrap">
                <img
                  alt="Harsh Jain"
                  className="contact-profile-image"
                  src={contactInfo.contactImagePath}
                />
              </div>
            )}
          </div>
        </Fade>
      </div>
    </section>
  );
}
