import React from "react";
import "./SplashScreen.scss";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {splashScreen} from "../../portfolio";

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <DisplayLottie animationData={splashScreen.animation} />
    </div>
  );
}
