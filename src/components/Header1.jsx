import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

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
    <>
    <header className={`header fixed proplus-header proplus-header--reference${scrolled ? " blue-bg" : ""}`}>
      <div className="container proplus-navbar-shell">
        {/* NAVBAR */}
        <div className="navbar">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/assets/images/logo.png" alt="Logo" />
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>

          {/* Menu */}
          <ul className={`menu ${menuOpen ? "open" : ""}`}>

            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>
                GTM Solutions <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/technographics">Technographics</Link></li>
                <li><Link to="/renewal-intelligence">Renewal Intelligence</Link></li>
                <li><Link to="/intent-data">Intent</Link></li>
                <li><Link to="/contact-data" onClick={closeMenu}>Contact Data</Link></li>
                <li><Link to="/demand-gen" onClick={closeMenu}>Demand Gen</Link></li>
                <li><Link to="/event-audience-acquisition" onClick={closeMenu}>Event Audience Acquisition</Link></li>
                <li><Link to="/buying-group">Buying Groups</Link></li>
                <li><Link to="/next-tech-purchase">Next Tech Purchase<sup>®</sup></Link></li>
              </ul>
            </li>

            <li>
              <Link to="/use-cases" onClick={closeMenu} style={{ whiteSpace: "nowrap" }}>
                Use Cases
              </Link>
            </li>

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
            <li className="get-started--mobile">
              <a
                className="dtbtn"
                href="https://nexora.proplusdata.co/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Trial
              </a>
            </li>
          </ul>
          <a
            className="dtbtn proplus-header__trial"
            href="https://nexora.proplusdata.co/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Trial
          </a>
        </div>
      </div>
    </header>
    <div className="proplus-header-spacer" aria-hidden="true" />
    </>
  );
}
