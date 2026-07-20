import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function HeaderFile() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "header fixed blue-bg" : "header fixed"}>
      <div className="container">
        <div className="navbar">

          {/* Logo */}
          <a href="/" className="logo">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>

          {/* Hamburger icon */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>

          {/* Navigation Menu */}
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li><a href="/" onClick={closeMenu}>Home</a></li>

            {/* Company Dropdown */}
            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Company <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/aboutus" onClick={closeMenu}>About Us</a></li>
                <li><a href="/careers" onClick={closeMenu}>Careers</a></li>
                <li><a href="/contactus" onClick={closeMenu}>Contact Us</a></li>
                <li><a href="/privacypolicy" onClick={closeMenu}>Privacy Policy</a></li>
                <li><a href="/pressreleases" onClick={closeMenu}>Press Releases</a></li>
              </ul>
            </li>

            <li><a href="/usecases" onClick={closeMenu}>Use Cases</a></li>

            {/* Solutions Dropdown */}
            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>
                GTM Solutions <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/technographics" onClick={closeMenu}>Technographics</a></li>
                <li><a href="/nexttechpurchase" onClick={closeMenu}>Next Tech Purchase®</a></li>
                <li><a href="/renewalnsubscription" onClick={closeMenu}>Renewal & Subscription</a></li>
                <li><a href="/intentdata" onClick={closeMenu}>Intent Data</a></li>
                <li><a href="/contactdata" onClick={closeMenu}>Contact Data</a></li>
                <li><a href="/marketingqualifiedleads" onClick={closeMenu}>MQL & Voice Verified Leads</a></li>
                <li><a href="/buyerpersonainsights" onClick={closeMenu}>Buyer Persona Insights</a></li>
                <li><a href="/eventaudienceacquisition" onClick={closeMenu}>Event Audience Acquisition</a></li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/blogs" onClick={closeMenu}>Blogs</a></li>
                <li><a href="/conferences" onClick={closeMenu}>Conferences</a></li>
              </ul>
            </li>

            {/* Get Started Button */}
            <li className="donate-btn-header">
              <a className="dtbtn" href="/contactus" onClick={closeMenu}>Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
