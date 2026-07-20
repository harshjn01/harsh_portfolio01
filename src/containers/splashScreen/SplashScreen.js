import React, {useContext} from "react";
import "./SplashScreen.css";
import "./SplashScreen.scss";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "splash-container dark-mode" : "splash-container"}>
      <div className="splash-title-container">
        <span style={{color: "#868e96"}}> &lt;</span>
        <span className="splash-title" style={{color: isDark ? "white" : "black"}}>{greeting.username}</span>
        <span style={{color: "#868e96"}}>/&gt;</span>
      </div>
    </div>
  );
}
