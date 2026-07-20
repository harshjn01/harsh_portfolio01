import React, {useContext, useState, useEffect} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";
import HireModal from "../hireModal/HireModal";

const navItems = [
  {label: "Home", id: "home", icon: "fas fa-home"},
  {label: "About", id: "about", icon: "fas fa-user"},
  {label: "Experience", id: "experience", icon: "fas fa-briefcase"},
  {label: "Projects", id: "projects", icon: "fas fa-code"},
  {label: "Achievements", id: "achievements", icon: "fas fa-trophy"},
  {label: "Contact", id: "contact", icon: "fas fa-envelope"},
  {label: "Resume", id: "resume", icon: "fas fa-file-alt", isExternal: true, url: greeting.resumeLink}
];

function Header({onShowResume}) {
  const {isDark} = useContext(StyleContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [hireModalOpen, setHireModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight nav item for the section currently in view
  useEffect(() => {
    const sections = navItems
      .map(n => document.getElementById(n.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {rootMargin: "-45% 0px -50% 0px", threshold: 0}
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: "smooth", block: "start"});
  };

  return (
    <div className={`header-wrap ${scrolled ? "scrolled" : ""}`}>
      <header className={isDark ? "glass-header dark-glass" : "glass-header"}>
        {/* Logo */}
        <a href="#home" className="brand" onClick={e => handleNav(e, "home")}>
          <span className="brand-mark">HJ</span>
          <span className="brand-name font-mono">{greeting.username}</span>
        </a>

        {/* Center pill nav */}
        <nav className="pill-nav">
          <ul>
            {navItems.map(item => {
              if (item.isExternal && !item.url) return null; // Don't render if resume link is empty
              return (
                <li key={item.id}>
                  {item.isExternal ? (
                    <a
                      href={item.url}
                      target={item.id === "resume" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="pill-link"
                      onClick={(e) => {
                        if (item.id === "resume" && onShowResume) {
                          e.preventDefault();
                          onShowResume();
                        }
                      }}
                    >
                      <i className={item.icon} />
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      className={active === item.id ? "pill-link active" : "pill-link"}
                      onClick={e => handleNav(e, item.id)}
                    >
                      <i className={item.icon} />
                      <span>{item.label}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="header-actions">
          <div className="toggle-holder">
            <ToggleSwitch />
          </div>
          <button className="hire-btn" onClick={() => setHireModalOpen(true)}>
            Hire Me
          </button>
          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <nav className={`mobile-nav ${menuOpen ? "show" : ""} ${isDark ? "dark-glass" : ""}`}>
        <ul>
          {navItems.map(item => {
            if (item.isExternal && !item.url) return null;
            return (
              <li key={item.id}>
                {item.isExternal ? (
                  <a
                    href={item.url}
                    target={item.id === "resume" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="mobile-link"
                    onClick={(e) => {
                      if (item.id === "resume" && onShowResume) {
                        e.preventDefault();
                        setMenuOpen(false);
                        onShowResume();
                      }
                    }}
                  >
                    <i className={item.icon} />
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={`#${item.id}`}
                    className={active === item.id ? "mobile-link active" : "mobile-link"}
                    onClick={e => handleNav(e, item.id)}
                  >
                    <i className={item.icon} />
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      
      <HireModal 
        isOpen={hireModalOpen} 
        onClose={() => setHireModalOpen(false)} 
        isDark={isDark} 
      />
    </div>
  );
}

export default Header;
