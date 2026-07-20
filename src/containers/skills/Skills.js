import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner">
        <Fade bottom duration={800}>
          <div className="section-header">
            <span className="section-tag">What I Do</span>
            <h2 className="section-title">{skillsSection.title}</h2>
            <p className="section-subtitle">{skillsSection.subTitle}</p>
          </div>
        </Fade>

        <div className="skills-grid">
          <Fade left duration={1000}>
            <div className="skills-lottie">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img alt="coding" src={require("../../assets/images/developerActivity.svg")} />
              )}
            </div>
          </Fade>

          <Fade right duration={1000}>
            <div className="skills-content">
              <SoftwareSkill />
              <div className="skills-bullets">
                {skillsSection.skills.map((s, i) => (
                  <div className="skill-bullet" key={i}>{s}</div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
