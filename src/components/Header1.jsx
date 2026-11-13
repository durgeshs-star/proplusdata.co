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
  const [openDropdown, setOpenDropdown] = useState(null);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
    setOpenDropdown(null);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  const toggleDropdown = (dropdown) => {
    setOpenDropdown((current) => current === dropdown ? null : dropdown);
  };

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

            <li className={`dropdown${openDropdown === "gtm" ? " is-open" : ""}`}>
              <button type="button" className="nav-dropdown-trigger" onClick={() => toggleDropdown("gtm")} aria-expanded={openDropdown === "gtm"}>
                GTM Solutions <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <ul className="dropdown-menu" hidden={openDropdown !== "gtm"}>
                <li><Link to="/technographics" onClick={closeMenu}>Technographics</Link></li>
                <li><Link to="/renewal-intelligence" onClick={closeMenu}>Renewal Intelligence</Link></li>
                <li><Link to="/intent-data" onClick={closeMenu}>Intent</Link></li>
                <li><Link to="/buying-group" onClick={closeMenu}>Buying Groups</Link></li>
                <li><Link to="/next-tech-purchase" onClick={closeMenu}>Next Tech Purchase<sup>&reg;</sup></Link></li>
                <li><Link to="/contact-data" onClick={closeMenu}>Contact Data</Link></li>
                <li><Link to="/demand-gen" onClick={closeMenu}>Demand Gen</Link></li>
                <li><Link to="/event-audience-acquisition" onClick={closeMenu}>Event Audience Acquisition</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/use-cases" onClick={closeMenu} style={{ whiteSpace: "nowrap" }}>
                Use Cases
              </Link>
            </li>

            <li className={`dropdown${openDropdown === "company" ? " is-open" : ""}`}>
              <button type="button" className="nav-dropdown-trigger" onClick={() => toggleDropdown("company")} aria-expanded={openDropdown === "company"}>
                Company <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <ul className="dropdown-menu" hidden={openDropdown !== "company"}>
                <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
                <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
                <li><Link to="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
                <li><Link to="/press-releases" onClick={closeMenu}>Press Releases</Link></li>
              </ul>
            </li>

            <li className={`dropdown${openDropdown === "resources" ? " is-open" : ""}`}>
              <button type="button" className="nav-dropdown-trigger" onClick={() => toggleDropdown("resources")} aria-expanded={openDropdown === "resources"}>
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <ul className="dropdown-menu" hidden={openDropdown !== "resources"}>
                {/* <li><Link to="/playbook">Playbook</Link></li> */}
                <li><Link to="/blogs" onClick={closeMenu}>Blogs</Link></li>
                <li><Link to="/conferences" onClick={closeMenu}>Conferences</Link></li>
                <li><Link to="/see-your-gtm-truth-in-60-sec" onClick={closeMenu}>GTM Assessment Tool</Link></li>
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
                Get Free Access
              </a>
            </li>
          </ul>
          <a
            className="dtbtn proplus-header__trial"
            href="https://nexora.proplusdata.co/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Free Access
          </a>
        </div>
      </div>
    </header>
    <div className="proplus-header-spacer" aria-hidden="true" />
    </>
  );
}
