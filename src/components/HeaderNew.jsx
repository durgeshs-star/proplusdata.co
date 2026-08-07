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
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Language switch logic based on current path
 const [languageOpen, setLanguageOpen] = useState(false);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (!event.target.closest(".language-dropdown")) {
      setLanguageOpen(false);
    }
  };
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);


  return (
    <header className={scrolled ? "header fixed blue-bg" : "header fixed"}>
      <div className="container">
        
        {/* Language Dropdown */}
        <div
  className="language-dropdown"
  style={{ position: "absolute", top: "10px", right: "20px", zIndex: 1000 }}
>
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
        <a
          href={`https://app.proplusdata.co${currentPath}`}
          style={{ color: "#2f337a", textDecoration: "none" }}
        >
          English
        </a>
      </li>
      <li style={{ padding: "8px 15px" }}>
        <a
          href={`https://proplusdata.jp${currentPath}`}
          style={{ color: "#2f337a", textDecoration: "none" }}
        >
          日本語
        </a>
      </li>
    </ul>
  )}
</div>


        {/* Simple hover logic for dropdown using inline script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() {
              const langBtn = document.querySelector(".lang-btn");
              const langMenu = document.querySelector(".lang-menu");
              if (langBtn && langMenu) {
                langBtn.addEventListener("mouseover", () => {
                  langMenu.style.display = "block";
                });
                langBtn.addEventListener("mouseleave", () => {
                  setTimeout(() => { langMenu.style.display = "none"; }, 200);
                });
                langMenu.addEventListener("mouseleave", () => {
                  langMenu.style.display = "none";
                });
              }
            });
          `
        }} />

        <div className="navbar">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/assets/images/logo.png" alt="Logo" />
          </Link>

          {/* Hamburger icon */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>

          {/* Navigation Menu */}
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>

            {/* Company Dropdown */}
            <li className="dropdown">
              <a href="/about-us" onClick={(e) => e.preventDefault()}>
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

            <li><Link to="/use-cases" onClick={closeMenu}>Use Cases</Link></li>

            {/* GTM Solutions Dropdown */}
            <li className="dropdown">
              <a href="/technographics" onClick={(e) => e.preventDefault()}>
                 Solutions <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/technographics" onClick={closeMenu}>Technographic Data</Link></li>
                <li><Link to="/next-tech-purchase" onClick={closeMenu}>Next Tech Purchase®</Link></li>
                <li><Link to="/renewal-intelligence" onClick={closeMenu}>Renewal Intelligence</Link></li>
                <li><Link to="/intent-data" onClick={closeMenu}>Intent Data</Link></li>
                <li><Link to="/contact-data" onClick={closeMenu}>Contact Data</Link></li>
                <li><Link to="/marketing-qualified-leads" onClick={closeMenu}>MQL & Voice Verified Leads</Link></li>
                <li><Link to="/account-intelligence-insights" onClick={closeMenu}>Account Intelligence & Insights</Link></li>
                <li><Link to="/event-audience-acquisition" onClick={closeMenu}>Event Audience Acquisition</Link></li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="dropdown">
              <a href="/blogs" onClick={(e) => e.preventDefault()}>
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                {/* <li><Link to="/playbook" onClick={closeMenu}>Playbook</Link></li> */} 
                <li><Link to="/blogs" onClick={closeMenu}>Blogs</Link></li>
                <li><Link to="/conferences" onClick={closeMenu}>Conferences</Link></li>
              </ul>
            </li>

            {/* Get Started */}
            <li className="donate-btn-header">
              <Link className="dtbtn" to="/contact-us" onClick={closeMenu}>Get Started</Link>
            </li>

            {/* Social Icons */}
            <li className="social-icons" style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
              <a href="mailto:info@proplusdata.co" target="_blank" title="Send us an email" rel="noopener noreferrer" style={{ color: "#2f337a", marginRight: "10px" }}>
                <FontAwesomeIcon icon={faSquareEnvelope} size="lg" />
              </a>
              <a href="https://www.linkedin.com/company/proplus-data/" aria-label="Visit our LinkedIn page" target="_blank" rel="noopener noreferrer" style={{ color: "#2f337a", marginRight: "10px" }}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://wa.me/919112110691" aria-label="Chat with us on WhatsApp" target="_blank" rel="noopener noreferrer" style={{ color: "#2f337a" }}>
                <FontAwesomeIcon icon={faSquareWhatsapp} size="lg" />
              </a>
            </li>
             {/* Get Started */}
            <li className="donate-btn-header">
              <Link className="dtbtn" to="/contact-us" onClick={closeMenu}>Get Started</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
