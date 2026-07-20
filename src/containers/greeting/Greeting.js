import React, {useContext, useEffect, useRef} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting, contactInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const orbitOuter = [
  {icon: "fab fa-react", color: "#61dafb", pos: {left: "96%", top: "50%"}},
  {icon: "fab fa-js", color: "#f7df1e", pos: {left: "73%", top: "90%"}},
  {icon: "fab fa-python", color: "#4b8bbe", pos: {left: "27%", top: "90%"}},
  {icon: "fab fa-html5", color: "#e34f26", pos: {left: "4%", top: "50%"}},
  {icon: "fab fa-css3-alt", color: "#2965f1", pos: {left: "27%", top: "10%"}},
  {icon: "fab fa-github", color: "#e2e8f0", pos: {left: "73%", top: "10%"}}
];

const orbitInner = [
  {icon: "fas fa-robot", color: "#d97757", pos: {left: "85%", top: "50%"}},
  {icon: "fas fa-chart-bar", color: "#f2c811", pos: {left: "50%", top: "85%"}},
  {icon: "fas fa-database", color: "#a78bfa", pos: {left: "15%", top: "50%"}},
  {icon: "fas fa-brain", color: "#10a37f", pos: {left: "50%", top: "15%"}}
];

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const heroRef = useRef(null);

  useEffect(() => {
    // Respect accessibility and battery constraints
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouchDevice) return;

    const hero = heroRef.current;
    if (!hero) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId;

    const handleMouseMove = e => {
      // Calculate mouse position normalized from -1 to 1
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      // LERP (Linear Interpolation) for buttery smooth spring-like easing
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      hero.style.setProperty("--mouse-x", currentX.toFixed(4));
      hero.style.setProperty("--mouse-y", currentY.toFixed(4));

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!greeting.displayGreeting) return null;

  return (
    <section className={isDark ? "hero dark-hero parallax-hero" : "hero parallax-hero"} id="greeting" ref={heroRef}>
      {/* animated background */}
      <div className="hero-bg">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <div className="grid-overlay" />
      </div>

      <div className="hero-inner">
        <Fade left duration={1100} distance="50px">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot" />
              Available for Work
            </div>

            <h1 className="hero-title">
              {greeting.title}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            <h2 className="hero-role">
              I build{" "}
              <span className="gradient-text typing">AI-Powered</span>
              <br />
              Full Stack Web Apps
            </h2>

            <p className="hero-sub">{greeting.subTitle}</p>

            <div className="hero-social">
              <SocialMedia />
            </div>

            <div className="hero-cta">
              <a href="#contact" className="btn-primary">
                Let's Talk <i className="fas fa-arrow-right" />
              </a>
              {greeting.resumeLink && (
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <i className="fas fa-download" /> Resume
                </a>
              )}
            </div>
          </div>
        </Fade>

        <Fade right duration={1100} distance="50px">
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="orbit-stage">
              {/* dashed guide rings */}
              <span className="orbit-guide orbit-guide-outer" />
              <span className="orbit-guide orbit-guide-inner" />

              {/* photo */}
              <div className="photo-frame">
                <img
                  className="photo-img"
                  src={contactInfo.profileImagePath}
                  alt={greeting.username}
                />
              </div>

              {/* outer orbit */}
              <div className="orbit orbit-outer">
                {orbitOuter.map((t, i) => (
                  <span className="orbit-icon" key={i} style={t.pos}>
                    <span className="orbit-icon-inner">
                      <i className={t.icon} style={{color: t.color}} />
                    </span>
                  </span>
                ))}
              </div>

              {/* inner orbit */}
              <div className="orbit orbit-inner">
                {orbitInner.map((t, i) => (
                  <span className="orbit-icon orbit-icon-sm" key={i} style={t.pos}>
                    <span className="orbit-icon-inner orbit-icon-inner-rev">
                      <i className={t.icon} style={{color: t.color}} />
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="scroll-hint">
        <span className="mouse">
          <span className="wheel" />
        </span>
      </div>
    </section>
  );
}
