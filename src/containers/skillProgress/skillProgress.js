import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <section className="proficiency-section">
      <Fade bottom duration={800} distance="20px">
        <div className="proficiency-inner">
          <div className="proficiency-bars">
            <div className="section-header" style={{textAlign: "left", marginBottom: "2rem"}}>
              <span className="section-label">{"// proficiency"}</span>
              <h2 className="section-title">Tech Stack Level</h2>
            </div>
            {techStack.experience.map((exp, i) => (
              <div className="skill" key={i}>
                <div className="skill-label-row">
                  <span>{exp.Stack}</span>
                  <span className="skill-pct">{exp.progressPercentage}</span>
                </div>
                <div className="meter">
                  <div
                    className="meter-fill"
                    style={{"--pct": parseFloat(exp.progressPercentage) / 100}}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="proficiency-lottie">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img alt="Skills" src={require("../../assets/images/skill.svg")} />
            )}
          </div>
        </div>
      </Fade>
    </section>
  );
}
