import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

import Greeting from "./greeting/Greeting";
import StatsBar from "../components/statsBar/StatsBar";
import Services from "../components/services/Services";
import AboutIntro from "../components/aboutIntro/AboutIntro";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Education from "./education/Education";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";
import CTASection from "../components/ctaSection/CTASection";

import CustomCursor from "../components/fx/CustomCursor";
import ScrollProgress from "../components/fx/ScrollProgress";
import GrainOverlay from "../components/fx/GrainOverlay";
import InteractiveFX from "../components/fx/InteractiveFX";
import MarqueeTicker from "../components/marquee/MarqueeTicker";
import CommandPalette from "../components/commandPalette/CommandPalette";
import AskHarsh from "../components/askHarsh/AskHarsh";

import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplash, setIsShowingSplash] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const t = setTimeout(() => setIsShowingSplash(false), splashScreen.duration);
      return () => clearTimeout(t);
    }
  }, []);

  const changeTheme = () => setIsDark(!isDark);

  return (
    <StyleProvider value={{isDark, changeTheme}}>
      <div className={isDark ? "dark-mode" : ""}>
        {isShowingSplash && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <ScrollProgress />
            <GrainOverlay />
            <CustomCursor />
            <Header />
            <main className="page-wrapper">
              <div id="home" className="section-anchor">
                <Greeting />
                <StatsBar />
                <Services />
              </div>

              <MarqueeTicker />

              <div id="about" className="section-anchor">
                <AboutIntro />
                <Skills />
                <StackProgress />
                <Education />
              </div>

              {/* WorkExperience renders <section id="experience"> */}
              <WorkExperience />

              {/* StartupProject renders <section id="projects"> */}
              <StartupProject />

              {/* Achievement renders <section id="achievements"> */}
              <Achievement />

              <CTASection />

              {/* Contact renders <section id="contact"> */}
              <Contact />
            </main>
            <Footer />
            <ScrollToTopButton />
            <InteractiveFX />
            <CommandPalette />
            <AskHarsh />
          </>
        )}
      </div>
    </StyleProvider>
  );
};

export default Main;
