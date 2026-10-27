import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

export default function Header1() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header fixed proplus-header proplus-header--reference${scrolled ? " blue-bg" : ""}`}>
      <div className="container proplus-navbar-shell">
        {/* NAVBAR */}
        <div className="navbar">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/assets/images/white-logo.png" alt="ProPlus Data" />
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
                <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
                <li><Link to="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
                <li><Link to="/press-releases" onClick={closeMenu}>Press Releases</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
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

             <li className="dropdown">
                <Link to="https://nexora.proplusdata.co/">RevenueGTM</Link>
            </li>

             <li className="donate-btn-header get-started get-started--mobile">
               <Link className="dtbtn" to="/contact-us" onClick={closeMenu}>
                 Get Started
               </Link>
             </li>

          </ul>

          <Link className="dtbtn get-started--desktop" to="/contact-us">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}