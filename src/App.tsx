
// import { useState, useEffect } from "react";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { Commitment } from "./components/Commitment";
// import { ProductsShowcase } from "./components/ProductsShowcase";
// import { Products } from "./components/Products";
// import { Downloads } from "./components/Downloads";
// import { RnD } from "./components/RnD";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
// import { ProductDetail } from "./components/ProductDetail";
// import { CoastalMap } from "./components/CoastalMap";
// import { Toaster } from "./components/ui/sonner";
// import { JoinOurNetwork } from "./components/JoinOurNetwork";
// import { Career } from "./components/Career";

// import newLogo from "./assets/Aquaphilic.jpg";
// import splashVideo from "./assets/bubble.mp4";

// /* ------------------------------------------------------------------ */
// /* Global Bubble Cursor – Custom glowing cursor                        */
// /* ------------------------------------------------------------------ */
// // const BubbleCursor = () => {
// //   useEffect(() => {
// //     const style = document.createElement("style");
// //     style.innerHTML = `* { cursor: none !important; }`;
// //     document.head.appendChild(style);

// //     const handleMove = (e: MouseEvent) => {
// //       const main = document.querySelector(".cursor-main-bubble") as HTMLElement;
// //       if (main) {
// //         main.style.left = `${e.pageX}px`;
// //         main.style.top = `${e.pageY}px`;
// //       }

// //       const trail = document.createElement("div");
// //       trail.className = "cursor-bubble-trail";
// //       trail.style.left = `${e.pageX}px`;
// //       trail.style.top = `${e.pageY}px`;
// //       document.body.appendChild(trail);
// //       setTimeout(() => trail.remove(), 900);
// //     };

// //     document.addEventListener("mousemove", handleMove);
// //     return () => {
// //       document.removeEventListener("mousemove", handleMove);
// //       style.remove();
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <div id="bubble-cursor-layer">
// //         <div className="cursor-main-bubble" />
// //       </div>

// //       <style>{`
// //         #bubble-cursor-layer {
// //           position: fixed;
// //           inset: 0;
// //           pointer-events: none;
// //           z-index: 999999;
// //         }
// //         .cursor-main-bubble {
// //           position: fixed;
// //           width: 32px;
// //           height: 32px;
// //           border-radius: 50%;
// //           background: radial-gradient(circle at 30% 30%, #66c2ff, #0077cc);
// //           box-shadow: 0 0 20px rgba(0,150,255,0.6);
// //           pointer-events: none;
// //           transform: translate(-50%, -50%);
// //           transition: transform 0.08s ease-out;
// //         }
// //         .cursor-bubble-trail {
// //           position: fixed;
// //           width: 10px;
// //           height: 10px;
// //           border-radius: 50%;
// //           background: rgba(100, 180, 255, 0.16);
// //           pointer-events: none;
// //           transform: translate(-50%, -50%);
// //           animation: bubbleTrail 0.9s ease-out forwards;
// //           z-index: 999998;
// //           filter: blur(0.3px);
// //         }
// //         @keyframes bubbleTrail {
// //           0%   { opacity: .9; transform: translate(-50%,-50%) scale(1); }
// //           50%  { opacity: .6; transform: translate(-50%,-60%) scale(1.2); }
// //           100% { opacity: 0;  transform: translate(-50%,-100%) scale(0.5); }
// //         }
// //       `}</style>
// //     </>
// //   );
// // };


// /* BLUE GLASS BUBBLE CURSOR – PREMIUM & MATCHING SPLASH BUBBLES       */
// /* ------------------------------------------------------------------ */

// /* ------------------------------------------------------------------ */
// /* #4A5A3C GLASS BUBBLE CURSOR – SAME STYLE AS SPLASH BUBBLES          */
// /* ------------------------------------------------------------------ */
// const BubbleCursor = () => {
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `* { cursor: none !important; }`;
//     document.head.appendChild(style);

//     const handleMove = (e: MouseEvent) => {
//       const main = document.querySelector(".cursor-main-bubble") as HTMLElement;
//       if (main) {
//         main.style.left = `${e.pageX}px`;
//         main.style.top  = `${e.pageY}px`;
//       }

//       const trail = document.createElement("div");
//       trail.className = "cursor-bubble-trail";
//       trail.style.left = `${e.pageX}px`;
//       trail.style.top  = `${e.pageY}px`;
//       document.body.appendChild(trail);
//       setTimeout(() => trail.remove(), 800);
//     };

//     document.addEventListener("mousemove", handleMove);
//     return () => {
//       document.removeEventListener("mousemove", handleMove);
//       style.remove();
//     };
//   }, []);

//   return (
//     <>
//       <div id="bubble-cursor-layer">
//         <div className="cursor-main-bubble" />
//       </div>

//       <style>{`
//         #bubble-cursor-layer {
//           position: fixed;
//           inset: 0;
//           pointer-events: none;
//           z-index: 999999;
//         }

//         /* ---------- MAIN #4A5A3C GLASS CURSOR ---------- */
//         .cursor-main-bubble {
//           position: fixed;
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           background: radial-gradient(
//             circle at 30% 30%,
//             rgba(74, 90, 60, 0.95),   /* #4A5A3C highlight */
//             rgba(60, 75, 50, 0.65) 45%,
//             rgba(40, 55, 35, 0.35) 75%,
//             transparent
//           );
//           border: 1.3px solid rgba(74, 90, 60, 0.9);
//           box-shadow:
//             0 0 12px rgba(74, 90, 60, 0.7),
//             inset 0 0 8px rgba(255, 255, 255, 0.6),
//             0 0 20px rgba(74, 90, 60, 0.3);
//           pointer-events: none;
//           transform: translate(-50%, -50%);
//           transition: transform 0.07s ease-out;
//           filter: blur(0.4px);
//           opacity: 0.9;
//         }

//         /* ---------- TRAIL: TINY #4A5A3C BUBBLES ---------- */
//         .cursor-bubble-trail {
//           position: fixed;
//           width: ${4 + Math.random() * 8}px;
//           height: ${4 + Math.random() * 8}px;
//           border-radius: 50%;
//           background: radial-gradient(
//             circle at 30% 30%,
//             rgba(74, 90, 60, 0.85),
//             rgba(60, 75, 50, 0.45),
//             transparent
//           );
//           border: 1px solid rgba(74, 90, 60, 0.7);
//           box-shadow:
//             0 0 6px rgba(74, 90, 60, 0.45),
//             inset 0 0 3px rgba(255, 255, 255, 0.5);
//           pointer-events: none;
//           transform: translate(-50%, -50%);
//           animation: cursorTrail 0.8s ease-out forwards;
//           filter: blur(0.3px);
//           opacity: 0.65;
//         }

//         @keyframes cursorTrail {
//           0%   { opacity: 0.7; transform: translate(-50%,-50%) scale(1); }
//           50%  { opacity: 0.5; transform: translate(-50%,-55%) scale(1.2); }
//           100% { opacity: 0;   transform: translate(-50%,-110%) scale(0.4); }
//         }

//         @media (max-width: 768px) {
//           .cursor-main-bubble { width: 16px; height: 16px; }
//           .cursor-bubble-trail { opacity: 0.5; }
//         }
//       `}</style>
//     </>
//   );
// };





// /* ------------------------------------------------------------------ */
// /* Global Background Bubbles – SMALLER SIZE                            */
// /* ------------------------------------------------------------------ */
// const GlobalBubbles = () => (
//   <div className="global-bubbles">
//     {Array.from({ length: 35 }).map((_, i) => (
//       <div key={i} className="bubble" />
//     ))}

//     <style>{`
//       .global-bubbles {
//         position: fixed;
//         top:0; left:0;
//         width:100%; height:100%;
//         z-index:-1;
//         overflow:hidden;
//         background: linear-gradient(180deg,#F5F6F4 0%,#E9EEE7 60%,#DDE3DA 100%);
//       }
//       .bubble {
//         position: absolute;
//         bottom:-60px;
//         background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(200,230,255,0.4));
//         border: 1.2px solid rgba(255,255,255,0.8);
//         border-radius:50%;
//         box-shadow: 0 0 10px rgba(255,255,255,0.6), inset 0 0 6px rgba(255,255,255,0.5);
//         animation: rise 10s infinite ease-in-out;
//         filter: blur(0.4px);
//         opacity: 0.3;
//       }
//       ${Array.from({ length: 35 })
//         .map(
//           (_, i) => `
//           .bubble:nth-child(${i + 1}) {
//             left:${5 + Math.random() * 90}%;
//             width:${8 + Math.random() * 12}px;   /* SMALLER */
//             height:${8 + Math.random() * 12}px;  /* SMALLER */
//             animation-delay:${Math.random() * 6}s;
//             animation-duration:${8 + Math.random() * 6}s;
//             opacity:${0.15 + Math.random() * 0.25};
//           }`
//         )
//         .join("")}
//       @keyframes rise {
//         0%   { transform: translateY(0) scale(0.7); opacity: 0.2; }
//         50%  { transform: translateY(-60vh) scale(1.0); opacity: 0.4; }
//         100% { transform: translateY(-130vh) scale(0.5); opacity: 0; }
//       }
//     `}</style>
//   </div>
// );

// /* ------------------------------------------------------------------ */
// type View =
//   | "home"
//   | "products"
//   | "product-detail"
//   | "downloads"
//   | "join-network"
//   | "career";

// /* ------------------------------------------------------------------ */
// export default function App() {
//   const [currentView, setCurrentView] = useState<View>("home");
//   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
//   const [showSplash, setShowSplash] = useState(true);
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
//     const removeTimer = setTimeout(() => setShowSplash(false), 3200);
//     return () => {
//       clearTimeout(fadeTimer);
//       clearTimeout(removeTimer);
//     };
//   }, []);

//   const handleNavigate = (section: string) => {
//     const validViews: View[] = ["home", "products", "downloads", "join-network", "career"];
//     if (validViews.includes(section as View)) {
//       setCurrentView(section as View);
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const el = document.getElementById(section);
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleProductClick = (productId: string) => {
//     setSelectedProduct(productId);
//     setCurrentView("product-detail");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBackToProducts = () => setCurrentView("products");
//   const handleBackToHome = () => setCurrentView("home");

//   /* ------------------------------------------------------------------ */
//   /* SPLASH SCREEN – SMALLER BUBBLES + VIDEO                             */
//   /* ------------------------------------------------------------------ */
//   if (showSplash) {
//     return (
//       <div
//         className={`splash-container ${fadeOut ? "fade-out" : ""}`}
//         style={{
//           transition: "opacity 1.2s ease-in-out",
//           opacity: fadeOut ? 0 : 1,
//         }}
//       >
//         <video
//           className="splash-video"
//           src={splashVideo}
//           autoPlay
//           muted
//           loop
//           playsInline
//           poster={newLogo}
//         />

//         <div className="bubbles">
//           {Array.from({ length: 25 }).map((_, i) => (
//             <div key={i} className="bubble" />
//           ))}
//         </div>

//         <style>{`
//           .splash-container {
//             position: fixed;
//             inset: 0;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             background: #f5f6f4;
//             overflow: hidden;
//             z-index: 9999;
//           }
//           .fade-out { opacity: 0; transform: scale(1.05); }

//           .splash-video {
//             position: absolute;
//             top: 50%; left: 50%;
//             min-width: 100%; min-height: 100%;
//             width: auto; height: auto;
//             transform: translate(-50%, -50%);
//             object-fit: cover;
//           }

//           .bubbles {
//             position: absolute;
//             inset: 0;
//             overflow: hidden;
//             z-index: 1;
//           }

//           .bubble {
//             position: absolute;
//             bottom: -60px;
//             background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(200,230,255,0.4));
//             border: 1.2px solid rgba(255, 255, 255, 0.8);
//             border-radius: 50%;
//             box-shadow: 
//               0 0 10px rgba(255, 255, 255, 0.6),
//               inset 0 0 6px rgba(255, 255, 255, 0.5);
//             animation: rise 7s infinite ease-in-out;
//             opacity: 0.3;
//             filter: blur(0.4px);
//           }

//           ${Array.from({ length: 25 })
//             .map(
//               (_, i) => `
//               .bubble:nth-child(${i + 1}) {
//                 left: ${5 + Math.random() * 90}%;
//                 width: ${4 + Math.random() * 12}px;   /* SMALLER */
//                 height: ${4 + Math.random() * 12}px;  /* SMALLER */
//                 animation-delay: ${Math.random() * 4}s;
//                 animation-duration: ${6 + Math.random() * 4}s;
//                 opacity: ${0.15 + Math.random() * 0.25};
//               }`
//             )
//             .join("")}

//           @keyframes rise {
//             0% {
//               transform: translateY(0) scale(0.7) translateX(0);
//               opacity: 0.2;
//             }
//             50% {
//               transform: translateY(-60vh) scale(1.0) translateX(${Math.random() > 0.5 ? "" : "-"}8px);
//               opacity: 0.4;
//             }
//             100% {
//               transform: translateY(-130vh) scale(0.5);
//               opacity: 0;
//             }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   /* ------------------------------------------------------------------ */
//   /* MAIN APP                                                           */
//   /* ------------------------------------------------------------------ */
//   return (
//     <div style={{ minHeight: "100vh", position: "relative", overflow: "visible" }}>
//       <GlobalBubbles />
//       <BubbleCursor />

//       <Header onNavigate={handleNavigate} />

//       {currentView === "home" && (
//         <>
//           <Hero onNavigate={handleNavigate} />
//           <About />
//           <Commitment />
//           <ProductsShowcase />
//           <CoastalMap />
//           <RnD />
//           <Contact />
//         </>
//       )}

//       {currentView === "products" && (
//         <Products onProductClick={handleProductClick} onBack={handleBackToHome} />
//       )}
//       {currentView === "downloads" && <Downloads onBack={handleBackToHome} />}
//       {currentView === "career" && <Career onBack={handleBackToHome} />}
//       {currentView === "product-detail" && selectedProduct && (
//         <ProductDetail productId={selectedProduct} onBack={handleBackToProducts} />
//       )}
//       {currentView === "join-network" && <JoinOurNetwork />}

//       <Footer onNavigate={handleNavigate} />
//       <Toaster />
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Commitment } from "./components/Commitment";
import { ProductsShowcase } from "./components/ProductsShowcase";
import { Products } from "./components/Products";
import { Downloads } from "./components/Downloads";
import { RnD } from "./components/RnD";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./components/ProductDetail";
import { CoastalMap } from "./components/CoastalMap";
import { Toaster } from "./components/ui/sonner";
import { JoinOurNetwork } from "./components/JoinOurNetwork";
import { Career } from "./components/Career";
import newLogo from "./assets/Aquaphilic.jpg";
import splashVideo from "./assets/bubble.mp4";

/* ------------------------------------------------------------------ */
/* #4A5A3C GLASS BUBBLE CURSOR – SAME STYLE AS SPLASH & HERO           */
/* ------------------------------------------------------------------ */
const BubbleCursor = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMove = (e: MouseEvent) => {
      const main = document.querySelector(".cursor-main-bubble") as HTMLElement;
      if (main) {
        main.style.left = `${e.pageX}px`;
        main.style.top = `${e.pageY}px`;
      }

      const trail = document.createElement("div");
      trail.className = "cursor-bubble-trail";
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 800);
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      style.remove();
    };
  }, []);

  return (
    <>
      <div id="bubble-cursor-layer">
        <div className="cursor-main-bubble" />
      </div>

      <style>{`
        #bubble-cursor-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999999;
        }

        /* MAIN #4A5A3C GLASS CURSOR */
        .cursor-main-bubble {
          position: fixed;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(74, 90, 60, 0.95),
            rgba(60, 75, 50, 0.65) 45%,
            rgba(40, 55, 35, 0.35) 75%,
            transparent
          );
          border: 1.3px solid rgba(74, 90, 60, 0.9);
          box-shadow:
            0 0 12px rgba(74, 90, 60, 0.7),
            inset 0 0 8px rgba(255, 255, 255, 0.6),
            0 0 20px rgba(74, 90, 60, 0.3);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: transform 0.07s ease-out;
          filter: blur(0.4px);
          opacity: 0.9;
        }

        /* TRAIL: TINY #4A5A3C BUBBLES */
        .cursor-bubble-trail {
          position: fixed;
          width: ${4 + Math.random() * 8}px;
          height: ${4 + Math.random() * 8}px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(74, 90, 60, 0.85),
            rgba(60, 75, 50, 0.45),
            transparent
          );
          border: 1px solid rgba(74, 90, 60, 0.7);
          box-shadow:
            0 0 6px rgba(74, 90, 60, 0.45),
            inset 0 0 3px rgba(255, 255, 255, 0.5);
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: cursorTrail 0.8s ease-out forwards;
          filter: blur(0.3px);
          opacity: 0.65;
        }

        @keyframes cursorTrail {
          0%   { opacity: 0.7; transform: translate(-50%,-50%) scale(1); }
          50%  { opacity: 0.5; transform: translate(-50%,-55%) scale(1.2); }
          100% { opacity: 0;   transform: translate(-50%,-110%) scale(0.4); }
        }

        @media (max-width: 768px) {
          .cursor-main-bubble { width: 16px; height: 16px; }
          .cursor-bubble-trail { opacity: 0.5; }
        }
      `}</style>
    </>
  );
};

/* ------------------------------------------------------------------ */
/* GLOBAL BACKGROUND BUBBLES – #4A5A3C TINY GLASS                       */
/* ------------------------------------------------------------------ */
const GlobalBubbles = () => (
  <div className="global-bubbles">
    {Array.from({ length: 35 }).map((_, i) => (
      <div key={i} className="bubble" />
    ))}

    <style>{`
      .global-bubbles {
        position: fixed;
        top:0; left:0;
        width:100%; height:100%;
        z-index:-1;
        overflow:hidden;
        background: linear-gradient(180deg,#F5F6F4 0%,#E9EEE7 60%,#DDE3DA 100%);
      }
      .bubble {
        position: absolute;
        bottom:-60px;
        background: radial-gradient(circle at 30% 30%, 
          rgba(74,90,60,0.9), 
          rgba(60,75,50,0.4)
        );
        border: 1.2px solid rgba(74,90,60,0.8);
        border-radius:50%;
        box-shadow: 0 0 10px rgba(74,90,60,0.6), inset 0 0 6px rgba(255,255,255,0.5);
        animation: rise 10s infinite ease-in-out;
        filter: blur(0.4px);
        opacity: 0.3;
      }
      ${Array.from({ length: 35 })
        .map(
          (_, i) => `
          .bubble:nth-child(${i + 1}) {
            left:${5 + Math.random() * 90}%;
            width:${8 + Math.random() * 12}px;
            height:${8 + Math.random() * 12}px;
            animation-delay:${Math.random() * 6}s;
            animation-duration:${8 + Math.random() * 6}s;
            opacity:${0.15 + Math.random() * 0.25};
          }`
        )
        .join("")}
      @keyframes rise {
        0%   { transform: translateY(0) scale(0.7); opacity: 0.2; }
        50%  { transform: translateY(-60vh) scale(1.0); opacity: 0.4; }
        100% { transform: translateY(-130vh) scale(0.5); opacity: 0; }
      }
    `}</style>
  </div>
);

/* ------------------------------------------------------------------ */
type View =
  | "home"
  | "products"
  | "product-detail"
  | "downloads"
  | "join-network"
  | "career";

/* ------------------------------------------------------------------ */
export default function App() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const removeTimer = setTimeout(() => setShowSplash(false), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const handleNavigate = (section: string) => {
    const validViews: View[] = ["home", "products", "downloads", "join-network", "career"];
    if (validViews.includes(section as View)) {
      setCurrentView(section as View);
      setSelectedProduct(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentView("product-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToProducts = () => setCurrentView("products");
  const handleBackToHome = () => setCurrentView("home");

  /* ------------------------------------------------------------------ */
  /* SPLASH SCREEN – VISIBLE WATER WAVES + #4A5A3C BUBBLES                */
  /* ------------------------------------------------------------------ */
  if (showSplash) {
    return (
      <div
        className={`splash-container ${fadeOut ? "fade-out" : ""}`}
        style={{
          transition: "opacity 1.2s ease-in-out",
          opacity: fadeOut ? 0 : 1,
        }}
      >
        {/* VIDEO BACKGROUND */}
        <video
          className="splash-video"
          src={splashVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={newLogo}
        />

        {/* VISIBLE WAVE LAYERS */}
        <div className="wave-layer wave-1" />
        <div className="wave-layer wave-2" />

        {/* TINY #4A5A3C GLASS BUBBLES */}
        <div className="bubbles">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="bubble" />
          ))}
        </div>

        <style >{`
          .splash-container {
            position: fixed;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f5f6f4;
            overflow: hidden;
            z-index: 9999;
          }
          .fade-out { opacity: 0; transform: scale(1.05); }

          .splash-video {
            position: absolute;
            top: 50%; left: 50%;
            min-width: 100%; min-height: 100%;
            width: auto; height: auto;
            transform: translate(-50%, -50%);
            object-fit: cover;
          }

          /* VISIBLE WAVE LAYERS */
          .wave-layer {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              90deg,
              rgba(255,255,255,0.15),
              rgba(180,220,255,0.35) 50%,
              rgba(255,255,255,0.15)
            );
            background-size: 300% 100%;
            pointer-events: none;
            mix-blend-mode: screen;
            opacity: 0.85;
            filter: blur(1px);
          }
          .wave-1 { animation: waveFlow1 12s ease-in-out infinite; }
          .wave-2 {
            animation: waveFlow2 18s ease-in-out infinite reverse;
            opacity: 0.6;
          }
          @keyframes waveFlow1 {
            0%,100% { background-position: 0% 50%; }
            50%     { background-position: 100% 50%; }
          }
          @keyframes waveFlow2 {
            0%,100% { background-position: 100% 50%; }
            50%     { background-position: 0% 50%; }
          }

          /* BUBBLES */
          .bubbles { position: absolute; inset: 0; overflow: hidden; z-index: 1; }

          .bubble {
            position: absolute;
            bottom: -60px;
            background: radial-gradient(
              circle at 30% 30%,
              rgba(74,90,60,0.95),
              rgba(60,75,50,0.65) 45%,
              rgba(40,55,35,0.35) 75%,
              transparent
            );
            border: 1.2px solid rgba(74,90,60,0.9);
            border-radius: 50%;
            box-shadow:
              0 0 10px rgba(74,90,60,0.6),
              inset 0 0 6px rgba(255,255,255,0.5);
            animation: rise var(--duration) ease-in infinite;
            animation-delay: var(--delay);
            filter: blur(0.4px);
            opacity: 0.7;
          }

          ${Array.from({ length: 25 })
            .map(
              (_, i) => `
              .bubble:nth-child(${i + 1}) {
                left: ${5 + Math.random() * 90}%;
                width: ${4 + Math.random() * 12}px;
                height: ${4 + Math.random() * 12}px;
                --delay: ${Math.random() * 4}s;
                --duration: ${6 + Math.random() * 4}s;
                opacity: ${0.15 + Math.random() * 0.25};
              }`
            )
            .join("")}

          @keyframes rise {
            0%   { transform: translateY(0) scale(0.7); opacity: 0.2; }
            50%  { transform: translateY(-60vh) scale(1.0); opacity: 0.4; }
            100% { transform: translateY(-130vh) scale(0.5); opacity: 0; }
          }

          @media (max-width: 768px) {
            .wave-layer { opacity: 0.65; }
            .bubble { opacity: 0.6; }
          }
        `}</style>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* MAIN APP                                                           */
  /* ------------------------------------------------------------------ */
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "visible" }}>
      <GlobalBubbles />
      <BubbleCursor />

      <Header onNavigate={handleNavigate} />

      {currentView === "home" && (
        <>
          <Hero onNavigate={handleNavigate} />
          <About />
          <Commitment />
          <ProductsShowcase />
          <CoastalMap />
          <RnD />
          <Contact />
        </>
      )}

      {currentView === "products" && (
        <Products onProductClick={handleProductClick} onBack={handleBackToHome} />
      )}
      {currentView === "downloads" && <Downloads onBack={handleBackToHome} />}
      {currentView === "career" && <Career onBack={handleBackToHome} />}
      {currentView === "product-detail" && selectedProduct && (
        <ProductDetail productId={selectedProduct} onBack={handleBackToProducts} />
      )}
      {currentView === "join-network" && <JoinOurNetwork />}

      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}