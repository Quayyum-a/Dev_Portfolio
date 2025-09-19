import React, { useRef, useCallback } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);
  const animationFrameRef = useRef(null);

  const handleMouseMove = useCallback((index) => (e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Set CSS custom properties for the glow position
      card.style.setProperty("--glow-x", `${mouseX}px`);
      card.style.setProperty("--glow-y", `${mouseY}px`);
    });
  }, []);

  const handleMouseLeave = useCallback((index) => () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const card = cardRefs.current[index];
    if (!card) return;

    // Reset glow position when mouse leaves
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
  }, []);

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onMouseLeave={handleMouseLeave(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
