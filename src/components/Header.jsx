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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleLangDropdown = () => setDropdownOpen(!dropdownOpen);

  // Language path logic
  const isJapanesePage = location.pathname.endsWith("JP") || location.pathname === "/JP";
  const enPath = isJapanesePage
    ? location.pathname.replace("JP", "").replace(/\/$/, "") || "/"
    : location.pathname;
  const jpPath = isJapanesePage
    ? location.pathname
    : location.pathname === "/"
    ? "/JP"
    : `${location.pathname}JP`;

  return (
    <header className={scrolled ? "header fixed blue-bg" : "header fixed"}>
      <div className="container">
        <div className="navbar">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/assets/images/logo.png" alt="Logo" />
          </Link>

             {/* Language Dropdown */}
            <li className="dropdown lang-dropdown" onClick={toggleLangDropdown}>
              <button className="lang-btn">
                <img
                  src={isJapanesePage ? "assets/images/japan.png" : "assets/images/uk.webp"}
                  width="20"
                  height="20"
                  alt={isJapanesePage ? "Japan" : "UK"}
                  style={{ marginRight: "5px" }}
                />
                {isJapanesePage ? "JP" : "EN"} 
              </button>
              {dropdownOpen && (
                <ul className="lang-switcher-menu">
                  <li>
                    <Link to={enPath} onClick={closeMenu}>
                      <img src="assets/images/uk.webp" width="20" height="20" alt="UK" /> EN
                    </Link>
                  </li>
                  <li>
                    <Link to={jpPath} onClick={closeMenu}>
                      <img src="assets/images/japan.png" width="20" height="20" alt="Japan" /> JP
                    </Link>
                  </li>
                </ul>
              )}
            </li>

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
                GTM Solutions <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/technographics" onClick={closeMenu}>Technographics</Link></li>
                <li><Link to="/next-tech-purchase" onClick={closeMenu}>Next Tech Purchase®</Link></li>
                <li><Link to="/renewal-n-subscription" onClick={closeMenu}>Renewal Intelligence</Link></li>
                <li><Link to="/intent-data" onClick={closeMenu}>Intent Data</Link></li>
                <li><Link to="/contact-data" onClick={closeMenu}>Contact Data</Link></li>
                <li><Link to="/marketing-qualified-leads" onClick={closeMenu}>MQL & Voice Verified Leads</Link></li>
                <li><Link to="/buyer-persona-insights" onClick={closeMenu}>Buyer Persona Insights</Link></li>
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
              <Link className="dtbtn" to="/contactus" onClick={closeMenu}>Get Started</Link>
            </li>

         

            {/* Social Icons */}
            <li className="social-icons" style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
              <a href="mailto:info@proplusdata.co" target="_blank" rel="noopener noreferrer" style={{ color: "#2f337a", marginRight: "10px" }}>
                <FontAwesomeIcon icon={faSquareEnvelope} size="lg" />
              </a>
              <a href="https://www.linkedin.com/company/proplus-data/" target="_blank" rel="noopener noreferrer" style={{ color: "#2f337a", marginRight: "10px" }}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://wa.me/919112110691" target="_blank" rel="noopener noreferrer" style={{ color: "#2f337a" }}>
                <FontAwesomeIcon icon={faSquareWhatsapp} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
