import React, {useContext} from "react";
import "./ToggleSwitch.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ToggleSwitch() {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeTheme}
        aria-label="Toggle dark mode"
      />
      <span className="toggle-slider">
        <span className="toggle-icon">{isDark ? "🌙" : "☀️"}</span>
      </span>
    </label>
  );
}
