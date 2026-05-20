import React, { useMemo } from "react";

function FloatingHearts({ count = 12, className = "" }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${12 + Math.random() * 10}s`,
        size: `${0.6 + Math.random() * 0.8}rem`,
      })),
    [count]
  );

  return (
    <div className={`floating-hearts ${className}`} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-particle"
          style={{
            left: h.left,
            animationDelay: h.delay,
            animationDuration: h.duration,
            fontSize: h.size,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
