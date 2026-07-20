import React, {useContext, useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import DetailModal from "../../components/detailModal/DetailModal";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [active, setActive] = useState(null);
  if (!workExperiences.display) return null;

  return (
    <section className="experience-section" id="experience">
      <div className="experience-inner">
        <Fade bottom duration={800}>
          <div className="section-header">
            <span className="section-label">// career.log</span>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              Roles and responsibilities I've taken on during my journey as a developer.
            </p>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-cards-div">
            {workExperiences.experience.map((card, i) => (
              <ExperienceCard
                key={i}
                isDark={isDark}
                onExpand={setActive}
                cardInfo={{
                  company: card.company,
                  desc: card.desc,
                  date: card.date,
                  companylogo: card.companylogo,
                  role: card.role,
                  descBullets: card.descBullets,
                  skills: card.skills
                }}
              />
            ))}
          </div>
        </Fade>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        eyebrow="Experience"
        title={active?.role}
        meta={active ? `${active.company} · ${active.date}` : ""}
        tags={active?.skills}
        sections={[
          {label: "Overview", text: active?.desc},
          {label: "Responsibilities", items: active?.descBullets}
        ]}
      />
    </section>
  );
}
