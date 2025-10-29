// import { useEffect, useState } from "react";
// import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

// export function SplashScreen() {
//   const [fadeOut, setFadeOut] = useState(false);
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     // Start fade-out after 2.5 seconds
//     const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
//     // Fully hide after 3 seconds
//     const hideTimer = setTimeout(() => setHidden(true), 3000);
//     return () => {
//       clearTimeout(fadeTimer);
//       clearTimeout(hideTimer);
//     };
//   }, []);

//   if (hidden) return null;

//   return (
//     <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
//       <div className="splash-content">
//         <div className="ripple-background">
//           <div className="circle small"></div>
//           <div className="circle medium"></div>
//           <div className="circle large"></div>
//           <div className="circle xlarge"></div>
//         </div>
//         <img src={logoImage} alt="WaterLinks Logo" className="splash-logo" />
//         <h2 className="splash-text">WaterLinks</h2>
//       </div>

//       {/* ✅ Use plain <style> (not jsx) */}
//       <style>{`
//         .splash-container {
//           position: fixed;
//           inset: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: radial-gradient(circle at center, #e0f7fa 0%, #b2ebf2 100%);
//           z-index: 9999;
//           overflow: hidden;
//           transition: opacity 1s ease, transform 1s ease;
//         }

//         .fade-out {
//           opacity: 0;
//           transform: scale(1.1);
//         }

//         .splash-content {
//           text-align: center;
//           position: relative;
//         }

//         .splash-logo {
//           height: 120px;
//           width: auto;
//           animation: float 3s ease-in-out infinite;
//           z-index: 10;
//           position: relative;
//         }

//         .splash-text {
//           font-family: "Poppins", sans-serif;
//           font-size: 24px;
//           color: #006064;
//           margin-top: 16px;
//           font-weight: 600;
//           letter-spacing: 1px;
//           opacity: 0;
//           animation: fadeInText 2s ease forwards 1.5s;
//         }

//         @keyframes float {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0); }
//         }

//         @keyframes fadeInText {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .ripple-background {
//           position: absolute;
//           width: 300px;
//           height: 300px;
//           left: 50%;
//           top: 50%;
//           transform: translate(-50%, -50%);
//           z-index: 1;
//         }

//         .circle {
//           position: absolute;
//           border: 2px solid rgba(0, 96, 100, 0.4);
//           border-radius: 50%;
//           animation: ripple 6s infinite;
//         }

//         .small {
//           width: 100px;
//           height: 100px;
//           left: 100px;
//           top: 100px;
//           animation-delay: 0s;
//         }

//         .medium {
//           width: 200px;
//           height: 200px;
//           left: 50px;
//           top: 50px;
//           animation-delay: 2s;
//         }

//         .large {
//           width: 300px;
//           height: 300px;
//           left: 0;
//           top: 0;
//           animation-delay: 4s;
//         }

//         .xlarge {
//           width: 400px;
//           height: 400px;
//           left: -50px;
//           top: -50px;
//           animation-delay: 6s;
//         }

//         @keyframes ripple {
//           0% { transform: scale(0.8); opacity: 0.7; }
//           100% { transform: scale(1.5); opacity: 0; }
//         }

//         @media (max-width: 600px) {
//           .splash-logo { height: 80px; }
//           .splash-text { font-size: 20px; }
//         }
//       `}</style>
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import newLogo from "../assets/Aquaphilic.jpg"; // 💧 Replace with your actual logo image

export function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start fade-out after 2.5 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    // Fully hide after 3 seconds
    const hideTimer = setTimeout(() => setHidden(true), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        <div className="bubbles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="bubble" />
          ))}
        </div>
        <img src={newLogo} alt="WaterLinks Logo" className="splash-logo" />
        
      </div>

      <style>{`
        .splash-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #b2ebf2 0%, #e0f7fa 40%, #ffffff 100%);
          overflow: hidden;
          z-index: 9999;
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-out {
          opacity: 0;
          transform: scale(1.05);
        }

        .splash-content {
          text-align: center;
          position: relative;
          z-index: 5;
        }

        .splash-logo {
          height: 120px;
          width: auto;
          animation: float 3s ease-in-out infinite;
        }

        .splash-text {
          font-family: "Poppins", sans-serif;
          font-size: 26px;
          color: #006064;
          margin-top: 18px;
          font-weight: 600;
          letter-spacing: 1.2px;
          opacity: 0;
          animation: fadeInText 2s ease forwards 1.5s;
        }

        /* Floating Logo Animation */
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        /* Text Fade-in Animation */
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 🫧 Bubble Styles */
        .bubbles {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          overflow: hidden;
          z-index: 1;
        }

        .bubble {
          position: absolute;
          bottom: -50px;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: rise 6s infinite ease-in;
        }

        /* Random bubble positions & sizes */
        .bubble:nth-child(1) { left: 10%; width: 12px; height: 12px; animation-delay: 0s; }
        .bubble:nth-child(2) { left: 25%; width: 18px; height: 18px; animation-delay: 1s; }
        .bubble:nth-child(3) { left: 40%; width: 14px; height: 14px; animation-delay: 2s; }
        .bubble:nth-child(4) { left: 55%; width: 22px; height: 22px; animation-delay: 3s; }
        .bubble:nth-child(5) { left: 70%; width: 16px; height: 16px; animation-delay: 1.5s; }
        .bubble:nth-child(6) { left: 85%; width: 10px; height: 10px; animation-delay: 2.5s; }
        .bubble:nth-child(7) { left: 15%; width: 14px; height: 14px; animation-delay: 4s; }
        .bubble:nth-child(8) { left: 30%; width: 20px; height: 20px; animation-delay: 5s; }
        .bubble:nth-child(9) { left: 50%; width: 12px; height: 12px; animation-delay: 3.5s; }
        .bubble:nth-child(10) { left: 65%; width: 18px; height: 18px; animation-delay: 4.5s; }
        .bubble:nth-child(11) { left: 80%; width: 22px; height: 22px; animation-delay: 2.8s; }
        .bubble:nth-child(12) { left: 90%; width: 10px; height: 10px; animation-delay: 1.2s; }
        .bubble:nth-child(13) { left: 5%; width: 16px; height: 16px; animation-delay: 3.8s; }
        .bubble:nth-child(14) { left: 35%; width: 20px; height: 20px; animation-delay: 4.2s; }
        .bubble:nth-child(15) { left: 60%; width: 14px; height: 14px; animation-delay: 5.5s; }

        /* Bubble Animation */
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-120vh) scale(1.4);
            opacity: 0;
          }
        }

        @media (max-width: 600px) {
          .splash-logo { height: 80px; }
          .splash-text { font-size: 20px; }
        }
      `}</style>
    </div>
  );
}
