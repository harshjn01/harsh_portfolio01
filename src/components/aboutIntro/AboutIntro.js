import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./AboutIntro.scss";
import {contactInfo, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const facts = [
  {icon: "fas fa-graduation-cap", label: "B.Tech CSE", sub: "JECRC · CGPA 8.0"},
  {icon: "fas fa-briefcase", label: "2 Internships", sub: "Dev · QA · Data"},
  {icon: "fas fa-map-marker-alt", label: "Jaipur, India", sub: "Open to relocate"},
  {icon: "fas fa-code", label: "Full Stack", sub: "React · AI · Data"}
];

export default function AboutIntro() {
  const {isDark} = useContext(StyleContext);
  return (
    <section className="about-intro-section">
      <div className="about-intro-inner">
        <Fade left duration={1000}>
          <div className="about-photo-wrap">
            <div className="about-photo-glow" />
            <img
              className="about-photo"
              src={contactInfo.aboutImagePath}
              alt={greeting.username}
            />
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="about-text">
            <span className="section-tag">About Me</span>
            <h2 className="about-heading">
              Turning ideas into <span className="gradient-text">real software</span>
            </h2>
            <p className="about-para">
              I&apos;m Harsh Jain, a Computer Science graduate and Full Stack Developer
              based in Jaipur. I enjoy solving real-world problems and building practical
              software — from responsive React interfaces to AI-powered features and
              data-driven dashboards.
            </p>
            <p className="about-para">
              I&apos;ve worked across development, quality assurance and data analytics
              during my internships, and I love learning new technologies and shipping
              products that people actually use.
            </p>

            <div className="about-facts">
              {facts.map((f, i) => (
                <div
                  className={isDark ? "fact-chip fact-chip-dark" : "fact-chip"}
                  key={i}
                >
                  <i className={f.icon} />
                  <div className="fact-text">
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-sub">{f.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
