import React, {useState} from "react";
import "./ExperienceCard.scss";

function getInitials(name) {
  const words = name.split(" ").filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default function ExperienceCard({cardInfo, isDark, onExpand}) {
  const [imgFailed, setImgFailed] = useState(false);

  const GetDescBullets = ({descBullets}) =>
    descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="exp-bullet">
            {item}
          </li>
        ))
      : null;

  const initials = getInitials(cardInfo.company);
  const showLogo = cardInfo.companylogo && !imgFailed;

  return (
    <div
      className={
        isDark
          ? "exp-card exp-card-dark cursor-target"
          : "exp-card cursor-target"
      }
      onClick={() => onExpand && onExpand(cardInfo)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onExpand) onExpand(cardInfo);
      }}
    >
      <div className="exp-banner">
        <div className="exp-logo-ring">
          {showLogo ? (
            <img
              className="exp-logo"
              src={cardInfo.companylogo}
              alt={cardInfo.company}
              onError={() => setImgFailed(true)}
            />
          ) : (
            <span className="exp-logo-fallback">{initials}</span>
          )}
        </div>
      </div>

      <div className="exp-body">
        <h3 className="exp-role">{cardInfo.role}</h3>
        <span className="exp-company">{cardInfo.company}</span>
        <span className="exp-date">
          <i className="fas fa-calendar-alt" /> {cardInfo.date}
        </span>
        <p className="exp-desc">{cardInfo.desc}</p>
        <ul className="exp-bullets">
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
        <span className="exp-expand-hint">
          View details <i className="fas fa-arrow-right" />
        </span>
      </div>
    </div>
  );
}
