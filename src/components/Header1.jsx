import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faTimes,
  faSquareEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function Header1() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".language-dropdown")) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "header fixed blue-bg" : "header fixed"}>
      <div className="container">
<div
  className="top-bar"
  style={{
    position: "absolute",
    top: "10px",
    right: "150px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    zIndex: 1000,
    padding:"8px",
  }}
>
  {/* Social Icons FIRST */}
  <a href="mailto:info@proplusdata.co" style={{ color: "#2f337a" }}>
    <FontAwesomeIcon icon={faSquareEnvelope} />
  </a>

  <a href="https://www.linkedin.com/company/proplus-data/" style={{ color: "#2f337a" }}>
    <FontAwesomeIcon icon={faLinkedin} />
  </a>

  <a href="https://wa.me/919112110691" style={{ color: "#2f337a" }}>
    <FontAwesomeIcon icon={faSquareWhatsapp} />
  </a>

  {/* Language LAST */}
  {/* <div className="language-dropdown" style={{ position: "relative" }}>
    <button
      className="lang-btn"
      onClick={() => setLanguageOpen(!languageOpen)}
      style={{
        background: "none",
        border: "none",
        fontWeight: "bold",
        fontSize: "14px",
        cursor: "pointer",
        color: "#2f337a",
      }}
    >
      English ▾
    </button>

    {languageOpen && (
      <ul
        className="lang-menu"
        style={{
          position: "absolute",
          top: "25px",
          right: 0,
          background: "white",
          border: "1px solid #ccc",
          padding: "5px 0",
          listStyle: "none",
          minWidth: "140px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <li style={{ padding: "8px 15px" }}>
          <a href={`https://app.proplusdata.co${currentPath}`}>English</a>
        </li>
        <li style={{ padding: "8px 15px" }}>
          <a href={`https://proplusdata.jp${currentPath}`}>日本語</a>
        </li>
      </ul>
    )}
  </div> */}
</div>

        {/* NAVBAR */}
        <div className="navbar">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/assets/images/logo.png" alt="Logo" />
          </Link>

          {/* Hamburger */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>

          {/* Menu */}
          <ul className={`menu ${menuOpen ? "open" : ""}`}>

            <li><Link to="/" onClick={closeMenu}>Home</Link></li>

            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Company <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
                <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
                <li><Link to="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
                <li><Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link></li>
                <li><Link to="/press-releases" onClick={closeMenu}>Press Releases</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/use-cases" onClick={closeMenu} style={{ whiteSpace: "nowrap" }}>
                Use Cases
              </Link>
            </li>

            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Solutions <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/technographics">Technographic Data</Link></li>
                <li><Link to="/next-tech-purchase">Next Tech Purchase®</Link></li>
                <li><Link to="/renewal-intelligence">Renewal Intelligence</Link></li>
                <li><Link to="/intent-data">Intent Data</Link></li>
                <li><Link to="/contact-data">Contact Data</Link></li>
                <li><Link to="/demand-gen">Demand Gen</Link></li>
                <li><Link to="/buying-group">Buying Group</Link></li>
                <li><Link to="/event-audience-acquisition">Event Audience Acquisition</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                {/* <li><Link to="/playbook">Playbook</Link></li> */}
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/conferences">Conferences</Link></li>
                <li><Link to="/see-your-gtm-truth-in-60-sec">GTM Assessment Tool</Link></li>
              </ul>
            </li>
             {/* Nexora Button */}
               {/* <li>
              <Link to="https://nexora.proplusdata.co/" className="dtbtn nexora-btn">
                <span className="sparkle-container">
                <span className="spark s1"></span>
                <span className="spark s2"></span>
                <span className="spark s3"></span>

                
                <span className="spark s4"></span>
                <span className="spark s5"></span>
                </span>
                <img src="/assets/images/Nexora Logo_White.png" alt="Nexora" />
              </Link>
            </li>    */}


             <li className="dropdown">
                <Link to="https://nexora.proplusdata.co/">RevenueGTM</Link>
            </li> 
           

           

            {/* Get Started */}
            <li className="donate-btn-header get-started">
              <Link className="dtbtn" to="/contact-us">
                Get Started
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
}