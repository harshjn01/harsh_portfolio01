import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark, onExpand}) {
  function openUrlInNewTab(e, url, name) {
    e.stopPropagation();
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={
        isDark
          ? "dark-mode certificate-card cursor-target"
          : "certificate-card cursor-target"
      }
      onClick={() => onExpand && onExpand(cardInfo)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onExpand) onExpand(cardInfo);
      }}
    >
      <div className="certificate-image-div">
        {cardInfo.image ? (
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="card-image"
          />
        ) : (
          <span className="cert-image-fallback">
            <i className="fas fa-certificate" />
          </span>
        )}
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      {cardInfo.footer && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => (
            <span
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={(e) => openUrlInNewTab(e, v.url, v.name)}
            >
              {v.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
