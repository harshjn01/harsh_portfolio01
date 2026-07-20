import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  if (!educationInfo.display) return null;

  return (
    <section className="education-section" id="education">
      <Fade bottom duration={800}>
        <div className="section-header">
          <span className="section-label">{"// background"}</span>
          <h2 className="section-title">Education</h2>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="20px">
        <div className="education-card-container">
          {educationInfo.schools.map((school, i) => (
            <EducationCard key={i} school={school} isDark={isDark} />
          ))}
        </div>
      </Fade>
    </section>
  );
}
