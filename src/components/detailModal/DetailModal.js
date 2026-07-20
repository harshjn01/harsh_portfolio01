import React, {useEffect} from "react";
import "./DetailModal.scss";

// Generic click-to-expand detail panel shared by project / experience /
// achievement cards. `sections` is an array of {label, text} or
// {label, items: string[]} rendered as prose or a bullet list.
export default function DetailModal({
  open,
  onClose,
  eyebrow,
  title,
  meta,
  image,
  sections = [],
  tags = [],
  links = []
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="detail-overlay" onMouseDown={onClose}>
      <div
        className="detail-panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="detail-close" onClick={onClose} aria-label="Close">
          <i className="fas fa-times" />
        </button>

        {image && (
          <div className="detail-image-wrap">
            <img src={image} alt={title} className="detail-image" />
          </div>
        )}

        <div className="detail-body">
          {eyebrow && <span className="detail-eyebrow">{eyebrow}</span>}
          <h3 className="detail-title">{title}</h3>
          {meta && <p className="detail-meta">{meta}</p>}

          {tags.length > 0 && (
            <div className="detail-tags">
              {tags.map((t, i) => (
                <span className="detail-tag" key={i}>
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="detail-sections">
            {sections
              .filter((s) => s && (s.text || (s.items && s.items.length)))
              .map((s, i) => (
                <div className="detail-section" key={i}>
                  <h4 className="detail-section-label">{s.label}</h4>
                  {s.text && <p className="detail-section-text">{s.text}</p>}
                  {s.items && (
                    <ul className="detail-section-list">
                      {s.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>

          {links.length > 0 && (
            <div className="detail-links">
              {links.map((l, i) => (
                <a
                  key={i}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-link-btn"
                >
                  {l.name} <i className="fas fa-external-link-alt" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
