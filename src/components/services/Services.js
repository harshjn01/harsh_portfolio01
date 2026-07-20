import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Services.scss";
import StyleContext from "../../contexts/StyleContext";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    desc: "Responsive, high-performance web apps built with React.js, modern CSS and Bootstrap — clean UIs that work on every screen."
  },
  {
    icon: "fas fa-robot",
    title: "AI Integration",
    desc: "AI-powered features and AI-assisted development using Claude AI and OpenAI to make products smarter and faster."
  },
  {
    icon: "fas fa-database",
    title: "Data & Dashboards",
    desc: "Turning raw data into insights with SQL, Python and Power BI — reports and dashboards that drive decisions."
  },
  {
    icon: "fas fa-bug",
    title: "Quality Assurance",
    desc: "Functional and regression testing across ERP, POS and management software to ship reliable, bug-free products."
  }
];

export default function Services() {
  const {isDark} = useContext(StyleContext);
  return (
    <section className="services-section">
      <div className="services-inner">
        <Fade bottom duration={800}>
          <div className="section-header">
            <span className="section-tag">Services</span>
            <h2 className="section-title">What I Can Do For You</h2>
            <p className="section-subtitle">
              From idea to deployment — here&apos;s how I can help bring your product to life.
            </p>
          </div>
        </Fade>

        <div className="services-grid">
          {services.map((s, i) => (
            <Fade bottom delay={i * 100} duration={800} key={i}>
              <div className={isDark ? "service-card service-card-dark" : "service-card"}>
                <div className="service-icon">
                  <i className={s.icon} />
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
