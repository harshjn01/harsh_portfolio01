import React, {useContext, useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import DetailModal from "../../components/detailModal/DetailModal";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [active, setActive] = useState(null);
  if (!achievementSection.display) return null;

  return (
    <section className="achievement-section" id="achievements">
      <div className="achievement-inner">
        <Fade bottom duration={800}>
          <div className="section-header">
            <span className="section-label">{"// credentials.log"}</span>
            <h2 className="section-title">{achievementSection.title}</h2>
            <p className="section-subtitle">{achievementSection.subtitle}</p>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="20px">
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                isDark={isDark}
                onExpand={setActive}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}
          </div>
        </Fade>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        eyebrow="// certification"
        title={active?.title}
        image={active?.image}
        sections={[{label: "About", text: active?.description}]}
        links={active?.footer}
      />
    </section>
  );
}
