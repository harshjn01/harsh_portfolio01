import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import "./CommandPalette.scss";
import {greeting, socialMediaLinks} from "../../portfolio";

// ⌘K / Ctrl+K command palette: quick navigation + actions with keyboard control.
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: "smooth"});
  }, []);

  const commands = useMemo(() => {
    const nav = [
      {id: "home", label: "Home", hint: "Go to top", icon: "fas fa-home"},
      {id: "about", label: "About", hint: "Skills & education", icon: "fas fa-user"},
      {id: "experience", label: "Experience", hint: "Work history", icon: "fas fa-briefcase"},
      {id: "projects", label: "Projects", hint: "Things I've built", icon: "fas fa-project-diagram"},
      {id: "achievements", label: "Achievements", hint: "Certifications", icon: "fas fa-trophy"},
      {id: "contact", label: "Contact", hint: "Get in touch", icon: "fas fa-envelope"}
    ].map((n) => ({
      key: `nav-${n.id}`,
      label: n.label,
      hint: n.hint,
      icon: n.icon,
      group: "Navigate",
      run: () => scrollTo(n.id)
    }));

    const actions = [];
    if (greeting.resumeLink) {
      actions.push({
        key: "resume",
        label: "Download Résumé",
        hint: "Open in a new tab",
        icon: "fas fa-file-download",
        group: "Actions",
        run: () => window.open(greeting.resumeLink, "_blank", "noopener")
      });
    }
    if (socialMediaLinks.gmail) {
      actions.push({
        key: "email",
        label: "Email Me",
        hint: socialMediaLinks.gmail,
        icon: "fas fa-at",
        group: "Actions",
        run: () => {
          window.location.href = `mailto:${socialMediaLinks.gmail}`;
        }
      });
    }
    if (socialMediaLinks.github) {
      actions.push({
        key: "github",
        label: "GitHub",
        hint: "View my code",
        icon: "fab fa-github",
        group: "Actions",
        run: () => window.open(socialMediaLinks.github, "_blank", "noopener")
      });
    }
    if (socialMediaLinks.linkedin) {
      actions.push({
        key: "linkedin",
        label: "LinkedIn",
        hint: "Connect with me",
        icon: "fab fa-linkedin-in",
        group: "Actions",
        run: () => window.open(socialMediaLinks.linkedin, "_blank", "noopener")
      });
    }
    return [...nav, ...actions];
  }, [scrollTo]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [query, commands]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const runCommand = useCallback(
    (cmd) => {
      if (!cmd) return;
      close();
      // Let the overlay unmount before scrolling/navigating.
      setTimeout(() => cmd.run(), 0);
    },
    [close]
  );

  // Global hotkey: ⌘K / Ctrl+K toggles; Esc closes.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const onListKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runCommand(filtered[active]);
    }
  };

  if (!open) return null;

  let lastGroup = null;

  return (
    <div className="cmdk-overlay" onMouseDown={close}>
      <div
        className="cmdk-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="cmdk-input-row">
          <i className="fas fa-search cmdk-search-icon" />
          <input
            ref={inputRef}
            className="cmdk-input"
            placeholder="Jump to a section or run an action…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onListKey}
          />
          <span className="cmdk-esc">esc</span>
        </div>

        <div className="cmdk-list" ref={listRef}>
          {filtered.length === 0 && (
            <div className="cmdk-empty">No matches</div>
          )}
          {filtered.map((cmd, i) => {
            const showGroup = cmd.group !== lastGroup;
            lastGroup = cmd.group;
            return (
              <React.Fragment key={cmd.key}>
                {showGroup && (
                  <div className="cmdk-group">{cmd.group}</div>
                )}
                <button
                  type="button"
                  className={`cmdk-item ${i === active ? "active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => runCommand(cmd)}
                >
                  <i className={`${cmd.icon} cmdk-item-icon`} />
                  <span className="cmdk-item-label">{cmd.label}</span>
                  <span className="cmdk-item-hint">{cmd.hint}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        <div className="cmdk-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
