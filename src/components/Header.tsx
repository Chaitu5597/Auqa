


// import { useState } from "react";
// import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

// interface HeaderProps {
//   onNavigate: (section: string) => void;
// }

// export function Header({ onNavigate }: HeaderProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleNavigate = (section: string) => {
//     onNavigate(section);
//     setIsMenuOpen(false);
//   };

//   const navItems = [
//     { label: "Home", id: "home" },
//     { label: "About Us", id: "about" },
//     { label: "Products", id: "products" },
//     { label: "R&D", id: "rnd" },
//     { label: "Career", id: "career" },
//     { label: "Join our Network", id: "join-network" },
//     { label: "Downloads", id: "downloads" },
//     { label: "Contact", id: "contact" },
//   ];

//   return (
//     <>
//       <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 header">
//         <div className="header-container">
//           {/* Logo */}
//           <div className="logo" onClick={() => handleNavigate("home")}>
//             <img src={logoImage} alt="WaterLinks Logo" />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="desktop-nav">
//             {navItems.map((item) => (
//               <button key={item.id} onClick={() => handleNavigate(item.id)}>
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           {/* Hamburger */}
//           <div
//             className="hamburger"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//           </div>
//         </div>

//         {/* Mobile nav overlay */}
//         <div className={`mobile-nav-overlay ${isMenuOpen ? "show" : ""}`}>
//           {navItems.map((item) => (
//             <button  key={item.id} onClick={() => handleNavigate(item.id)}>
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </header>

//       {/* CSS Styling */}
//       <style>{`
//         .header {
//           position: sticky;
//           top: 0;
//           z-index: 50;
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(10px);
//           border-bottom: 1px solid #ddd;
//         }

//         /* Container with left padding for normal screens */
//         .header-container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 40px; /* increased left/right padding for normal screens */
//           height: 80px;
//         }

//         /* Logo */
//         .logo img {
//           height: 48px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         /* Desktop Navigation */
//         .desktop-nav {
//           display: flex;
//           gap: 24px;
//         }

//         .desktop-nav button {
//           font-size: 16px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-weight: 500;
//           color: #111;
//         }

//         .desktop-nav button:hover {
//           color: #0070f3;
//         }

//         /* Hamburger */
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//         }

//         .hamburger .bar {
//           width: 25px;
//           height: 3px;
//           background-color: #111;
//           transition: all 0.3s ease;
//         }

//         /* Mobile nav overlay */
//         .mobile-nav-overlay {
//           position: absolute;
//           top: 80px;
//           left: 0;
//           right: 0;
//           background: rgba(255, 255, 255, 0.97);
//           display: none;
//           flex-direction: column;
//           gap: 12px;
//           padding: 16px;
//           border-top: 1px solid #ddd;
//           z-index: 40;
//         }

//         .mobile-nav-overlay.show {
//           display: flex;
//         }

//         .mobile-nav-overlay button {
//           font-size: 18px;
//           background: none;
//           border: none;
//           text-align: left;
//           padding: 8px 0;
//           cursor: pointer;
//           font-weight: 500;
//           color: #111;
//         }

//         .mobile-nav-overlay button:hover {
//           color: #0070f3;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .header-container {
//             padding: 0 16px; /* smaller padding on mobile */
//           }

//           .desktop-nav {
//             display: none;
//           }

//           .hamburger {
//             display: flex;
//           }

//           .logo img {
//             height: 40px; /* smaller logo on mobile */
//           }
//         }
//       `}</style>
//     </>
//   );
// }





// import { useState } from "react";
// import logoImage from "../assets/Aquaphilic.jpg"

// interface HeaderProps {
//   onNavigate: (section: string) => void;
// }

// export function Header({ onNavigate }: HeaderProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const handleNavigate = (section: string) => {
//     onNavigate(section);
//     setActiveSection(section);
//     setIsMenuOpen(false);
//   };

//   const navItems = [
//     { label: "Home", id: "home" },
//     { label: "About Us", id: "about" },
//     { label: "Products", id: "products" },
//     { label: "R&D", id: "rnd" },
//     { label: "Career", id: "career" },
//     { label: "Join our Network", id: "join-network" },
//     { label: "Downloads", id: "downloads" },
//     { label: "Contact", id: "contact" },
//   ];

//   return (
//     <>
//       <header className="header">
//         <div className="header-container">
//           {/* Logo */}
//           <div className="logo" onClick={() => handleNavigate("home")}>
//             <img src={logoImage} alt="AquaPhilic Logo" />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="desktop-nav">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 className={activeSection === item.id ? "active" : ""}
//                 onClick={() => handleNavigate(item.id)}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           {/* Hamburger */}
//           <div
//             className="hamburger"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`mobile-nav-overlay ${isMenuOpen ? "show" : ""}`}>
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               className={activeSection === item.id ? "active" : ""}
//               onClick={() => handleNavigate(item.id)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </header>

//       {/* CSS Styling */}
//       <style>{`
//         .header {
//           position: sticky;
//           top: 0;
//           z-index: 50;
//           background: linear-gradient(135deg, #F5F6F4 0%, #E9EEE7 100%);
//           backdrop-filter: blur(10px);
//           border-bottom: 1px solid #DCE1D8;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//           transition: background 0.4s ease;
//         }

//         .header-container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 40px;
//           height: 80px;
//         }

//         .logo img {
//           height: 48px;
//           cursor: pointer;
//           transition: transform 0.3s ease;
//         }

//         .logo img:hover {
//           transform: scale(1.05);
//         }

//         /* Desktop Navigation */
//         .desktop-nav {
//           display: flex;
//           gap: 24px;
//         }

//         .desktop-nav button {
//           position: relative;
//           font-size: 16px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-weight: 500;
//           color: #4A5A3C;
//           padding: 4px 0;
//           transition: color 0.3s ease;
//         }

//         .desktop-nav button::after {
//           content: "";
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background-color: #6E8B64;
//           transition: width 0.3s ease;
//         }

//         .desktop-nav button:hover::after,
//         .desktop-nav button.active::after {
//           width: 100%;
//         }

//         .desktop-nav button:hover {
//           color: #6E8B64;
//         }

//         .desktop-nav button.active {
//           color: #6E8B64;
//         }

//         /* Hamburger Menu */
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//         }

//         .hamburger .bar {
//           width: 25px;
//           height: 3px;
//           background-color: #4A5A3C;
//           transition: all 0.3s ease;
//         }

//         /* Mobile Overlay */
//         .mobile-nav-overlay {
//           position: absolute;
//           top: 80px;
//           left: 0;
//           right: 0;
//           background: linear-gradient(135deg, #F5F6F4 0%, #E9EEE7 100%);
//           display: none;
//           flex-direction: column;
//           gap: 12px;
//           padding: 16px;
//           border-top: 1px solid #DCE1D8;
//           z-index: 40;
//         }

//         .mobile-nav-overlay.show {
//           display: flex;
//         }

//         .mobile-nav-overlay button {
//           font-size: 18px;
//           background: none;
//           border: none;
//           text-align: left;
//           padding: 8px 0;
//           cursor: pointer;
//           font-weight: 500;
//           color: #4A5A3C;
//         }

//         .mobile-nav-overlay button.active,
//         .mobile-nav-overlay button:hover {
//           color: #6E8B64;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .header-container {
//             padding: 0 16px;
//           }

//           .desktop-nav {
//             display: none;
//           }

//           .hamburger {
//             display: flex;
//           }

//           .logo img {
//             height: 40px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }



import { useState } from "react";
import logoImage from "../assets/Aquaphilic.jpg";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    { label: "R&D", id: "rnd" },
    { label: "Career", id: "career" },
    { label: "Join our Network", id: "join-network" },
    { label: "Downloads", id: "downloads" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo" onClick={() => handleNavigate("home")}>
            <img src={logoImage} alt="AquaPhilic Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? "show" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* CSS Styling */}
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: linear-gradient(135deg, #F5F6F4 0%, #E9EEE7 100%);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #DCE1D8;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: background 0.4s ease;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 100px; /* increased height for larger logo */
        }

        .logo img {
          height: 72px; /* increased from 48px */
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo img:hover {
          transform: scale(1.05);
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          gap: 24px;
        }

        .desktop-nav button {
          position: relative;
          font-size: 16px;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          color: #4A5A3C;
          padding: 4px 0;
          transition: color 0.3s ease;
        }

        .desktop-nav button::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #6E8B64;
          transition: width 0.3s ease;
        }

        .desktop-nav button:hover::after,
        .desktop-nav button.active::after {
          width: 100%;
        }

        .desktop-nav button:hover {
          color: #6E8B64;
        }

        .desktop-nav button.active {
          color: #6E8B64;
        }

        /* Hamburger Menu */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger .bar {
          width: 25px;
          height: 3px;
          background-color: #4A5A3C;
          transition: all 0.3s ease;
        }

        /* Mobile Overlay */
        .mobile-nav-overlay {
          position: absolute;
          top: 100px; /* adjusted for new header height */
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #F5F6F4 0%, #E9EEE7 100%);
          display: none;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          border-top: 1px solid #DCE1D8;
          z-index: 40;
        }

        .mobile-nav-overlay.show {
          display: flex;
        }

        .mobile-nav-overlay button {
          font-size: 18px;
          background: none;
          border: none;
          text-align: left;
          padding: 8px 0;
          cursor: pointer;
          font-weight: 500;
          color: #4A5A3C;
        }

        .mobile-nav-overlay button.active,
        .mobile-nav-overlay button:hover {
          color: #6E8B64;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-container {
            padding: 0 16px;
            height: 80px;
          }

          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .logo img {
            height: 56px; /* larger logo on mobile too */
          }

          .mobile-nav-overlay {
            top: 80px; /* adjust for mobile height */
          }
        }
      `}</style>
    </>
  );
}
