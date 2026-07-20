import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";
import "./ResumeViewer.css";

export default function ResumeViewer({onClose}) {
  const {isDark} = useContext(StyleContext);
  
  // Convert drive.google.com/file/.../view to /preview
  let embedUrl = greeting.resumeLink;
  if (embedUrl && embedUrl.includes("drive.google.com") && embedUrl.includes("/view")) {
    embedUrl = embedUrl.replace("/view?usp=drive_link", "/preview").replace("/view", "/preview");
  }

  return (
    <div className={`resume-viewer-container ${isDark ? "dark-mode" : ""}`}>
      <div className="resume-viewer-header">
        <button className="go-back-btn" onClick={onClose}>
          <i className="fas fa-arrow-left"></i> Go Back
        </button>
        <h2>{greeting.username}'s Resume</h2>
        <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer" className="download-btn">
          <i className="fas fa-external-link-alt"></i> Open in Drive
        </a>
      </div>
      <div className="resume-iframe-container">
        {embedUrl ? (
          <iframe 
            src={embedUrl} 
            title="Resume"
            className="resume-iframe"
          />
        ) : (
          <div className="no-resume">Resume link not found.</div>
        )}
      </div>
    </div>
  );
}
