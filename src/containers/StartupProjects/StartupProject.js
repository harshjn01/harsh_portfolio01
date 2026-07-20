import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import DetailModal from "../../components/detailModal/DetailModal";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [active, setActive] = useState(null);
  if (!bigProjects.display) return null;

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <Fade bottom duration={800}>
          <div className="section-header">
            <span className="section-label">// project index</span>
            <h2 className="section-title">{bigProjects.title}</h2>
            <p className="section-subtitle">{bigProjects.subtitle}</p>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="20px">
          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "project-card project-card-dark cursor-target"
                    : "project-card project-card-light cursor-target"
                }
                onClick={() => setActive(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setActive(project);
                }}
              >
                {project.image && (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    />
                  </div>
                )}
                <div className="project-detail">
                  <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
                    {project.projectName}
                  </h3>
                  <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                    {project.projectDesc}
                  </p>
                  <span className="project-expand-hint">
                    View case study <i className="fas fa-arrow-right" />
                  </span>
                  {project.footerLink && (
                    <div
                      className="project-card-footer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.footerLink.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-tag"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        eyebrow="Case Study"
        title={active?.projectName}
        image={active?.image}
        tags={active?.tech}
        sections={[
          {label: "Problem", text: active?.problem},
          {label: "Approach", text: active?.approach},
          {label: "Impact", text: active?.impact},
          !active?.problem && {label: "Overview", text: active?.projectDesc}
        ]}
        links={active?.footerLink}
      />
    </section>
  );
}
