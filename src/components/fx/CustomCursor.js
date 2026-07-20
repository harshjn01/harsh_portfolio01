import React, {useEffect, useRef} from "react";
import "./CustomCursor.scss";

// Glowing dot + trailing ring that scales up over interactive elements.
// The elements always render; behavior only activates on fine-pointer devices
// (they're hidden via CSS on touch/coarse pointers).
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine =
      window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mouse = {x: window.innerWidth / 2, y: window.innerHeight / 2};
    const ringPos = {...mouse};
    let ringScale = 1;
    let hovering = false;
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
    };

    // Ring lags behind the dot for a smooth trailing feel. Scale is folded
    // into the same transform (rather than animating width/height/margin)
    // so the ring only ever touches the compositor-only `transform` property.
    const loop = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) scale(${ringScale})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const addHover = () => {
      hovering = true;
      ringScale = 1.65;
      ring.classList.add("cursor-ring--hover");
    };
    const removeHover = () => {
      hovering = false;
      ringScale = 1;
      ring.classList.remove("cursor-ring--hover");
    };
    const interactive =
      "a, button, .btn, [role='button'], input, textarea, .cursor-target";

    const onOver = (e) => {
      if (e.target.closest && e.target.closest(interactive)) addHover();
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(interactive)) removeHover();
    };
    const onDown = () => {
      ringScale = 0.7;
      ring.classList.add("cursor-ring--down");
    };
    const onUp = () => {
      ringScale = hovering ? 1.65 : 1;
      ring.classList.remove("cursor-ring--down");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.body.classList.add("custom-cursor-active");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
