import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./CTASection.scss";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function CTASection() {
  const {isDark} = useContext(StyleContext);
  return (
    <section className={isDark ? "cta-band dark-cta" : "cta-band"}>
      <Fade bottom duration={900} distance="30px">
        <div className="cta-inner">
          <span className="cta-spark">✦</span>
          <h2 className="cta-title">
            Have a project in mind? <br />
            Let&apos;s build something <span className="cta-grad">impactful</span>.
          </h2>
          <p className="cta-sub">
            I&apos;m open to internships, freelance work, and collaborations.
            Let&apos;s turn your idea into a real product.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="cta-btn-primary">
              Get in Touch <i className="fas fa-arrow-right" />
            </a>
            {greeting.resumeLink && (
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-ghost"
              >
                <i className="fas fa-download" /> Download Resume
              </a>
            )}
          </div>
        </div>
      </Fade>
    </section>
  );
}
