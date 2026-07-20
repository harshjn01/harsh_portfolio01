import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <ul className="dev-icons">
      {skillsSection.softwareSkills.map((skill, i) => (
        <li key={i} className="software-skill-inline">
          <i className={skill.fontAwesomeClassname}></i>
          <p>{skill.skillName}</p>
        </li>
      ))}
    </ul>
  );
}
