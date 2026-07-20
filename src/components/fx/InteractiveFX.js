import {useEffect} from "react";

// Adds 3D tilt-on-hover to cards and a magnetic pull to primary buttons.
// Purely behavioral (no DOM of its own); disabled on touch / reduced-motion.
const TILT_SELECTOR = ".project-card, .exp-card, .certificate-card";
const MAGNET_SELECTOR = ".hire-btn, .btn-primary, .cta-btn-primary";
const MAX_TILT = 9; // degrees
const MAGNET_STRENGTH = 0.35;

export default function InteractiveFX() {
  useEffect(() => {
    const fine =
      window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const cleanups = [];

    // ── Tilt ───────────────────────────────────────────────────────
    document.querySelectorAll(TILT_SELECTOR).forEach((el) => {
      const onEnter = () => {
        el.style.transition = "transform 0.12s ease-out";
      };
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width; // 0..1
        const py = (e.clientY - r.top) / r.height; // 0..1
        const rotX = (0.5 - py) * MAX_TILT * 2;
        const rotY = (px - 0.5) * MAX_TILT * 2;
        el.style.transform =
          `perspective(900px) rotateX(${rotX.toFixed(2)}deg) ` +
          `rotateY(${rotY.toFixed(2)}deg) translateY(-6px) scale(1.02)`;
      };
      const onLeave = () => {
        el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "";
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
        el.style.transform = "";
        el.style.transition = "";
      });
    });

    // ── Magnetic buttons ───────────────────────────────────────────
    document.querySelectorAll(MAGNET_SELECTOR).forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * MAGNET_STRENGTH;
        const dy = (e.clientY - (r.top + r.height / 2)) * MAGNET_STRENGTH;
        btn.style.transition = "transform 0.15s ease-out";
        btn.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      };
      const onLeave = () => {
        btn.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
        btn.style.transform = "";
      };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
        btn.style.transform = "";
        btn.style.transition = "";
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
