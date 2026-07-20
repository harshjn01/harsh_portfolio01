import React from "react";
import "./EducationCard.scss";

export default function EducationCard({school}) {
  return (
    <div className="edu-card">
      <div className="edu-logo-wrap">
        <img className="edu-logo" src={school.logo} alt={school.schoolName} />
      </div>
      <div className="edu-content">
        <h3 className="edu-school">{school.schoolName}</h3>
        <p className="edu-subheader">{school.subHeader}</p>
        <span className="edu-duration">
          <i className="fas fa-calendar-alt" /> {school.duration}
        </span>
        {school.descBullets && (
          <ul className="edu-bullets">
            {school.descBullets.map((b, i) => (
              <li className="edu-bullet" key={i}>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
