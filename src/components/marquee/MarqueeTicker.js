import React from "react";
import "./MarqueeTicker.scss";

// Infinite horizontal ticker of tech logos. The list is rendered twice so the
// CSS animation can loop seamlessly (translateX -50%).
const TECHS = [
  {icon: "fab fa-react", label: "React", color: "#61dafb"},
  {icon: "fab fa-js", label: "JavaScript", color: "#f7df1e"},
  {icon: "fab fa-node", label: "Node.js", color: "#68a063"},
  {icon: "fab fa-python", label: "Python", color: "#4b8bbe"},
  {icon: "fab fa-html5", label: "HTML5", color: "#e34f26"},
  {icon: "fab fa-css3-alt", label: "CSS3", color: "#2965f1"},
  {icon: "fab fa-git-alt", label: "Git", color: "#f1502f"},
  {icon: "fab fa-github", label: "GitHub", color: "#e2e8f0"},
  {icon: "fab fa-aws", label: "AWS", color: "#ff9900"},
  {icon: "fab fa-figma", label: "Figma", color: "#a259ff"},
  {icon: "fas fa-database", label: "SQL", color: "#38bdf8"}
];

export default function MarqueeTicker() {
  const items = [...TECHS, ...TECHS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={i}>
            <i className={t.icon} style={{color: t.color}} />
            <span className="marquee-label">{t.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
