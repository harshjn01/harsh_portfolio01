import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./StatsBar.scss";

/* One continuous readout line — not four repeated big-number/label cards. */
const stats = [
  {value: "1+", label: "yr experience"},
  {value: "10+", label: "projects shipped"},
  {value: "3+", label: "certifications"},
  {value: "4+", label: "tech stacks"}
];

export default function StatsBar() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={800} distance="20px">
      <div className={isDark ? "stats-bar dark-mode-stats" : "stats-bar"}>
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="stat-sep" aria-hidden="true" />}
            <span className="stat-item font-mono">
              <span className="stat-value">{s.value}</span> {s.label}
            </span>
          </React.Fragment>
        ))}
      </div>
    </Fade>
  );
}
