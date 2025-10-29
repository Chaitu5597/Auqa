// src/components/BubbleCursor.tsx
import { useEffect } from "react";

export function BubbleCursor() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const bubble = document.createElement("div");
      bubble.className = "cursor-bubble";
      bubble.style.left = `${e.pageX}px`;
      bubble.style.top = `${e.pageY}px`;

      document.body.appendChild(bubble);

      // Remove bubble after animation
      setTimeout(() => bubble.remove(), 1200);
    };

    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <style>{`
      .cursor-bubble {
        position: fixed;
        width: 1px;
        height: 1px;
        background: radial-gradient(circle at 30% 30%, #66ccff, #0077cc);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.9;
        transform: translate(-50%, -50%) scale(1);
        animation: bubble-pop 1.2s ease-out forwards;
        filter: blur(0.5px);
        z-index: 9999;
      }

      @keyframes bubble-pop {
        0% {
          transform: translate(-50%, -50%) scale(0.9);
          opacity: 0.9;
        }
        50% {
          transform: translate(-50%, -80%) scale(1.2);
          opacity: 0.7;
        }
        100% {
          transform: translate(-50%, -120%) scale(0.6);
          opacity: 0;
        }
      }
    `}</style>
  );
}
