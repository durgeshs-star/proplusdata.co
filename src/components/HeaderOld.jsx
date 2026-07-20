import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "header fixed blue-bg" : "header fixed"}>
      <div className="container">
        <div className="navbar">
          {/* Logo */}
          <a href="index.html" className="logo">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>

          {/* Navigation Menu */}
          <ul className="menu">
            <li><a href="/">Home</a></li>

            {/* Company Dropdown */}
            <li className="dropdown">
              <a href="#">
                Company <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contactus">Contact Us</a></li>
                <li><a href="/privacypolicy">Privacy Policy</a></li>
                <li><a href="/pressreleases">Press Releases</a></li>
              </ul>
            </li>

            {/* Use Cases (No Dropdown, Just a Link) */}
            <li><a href="/usecases">Use Cases</a></li>

            {/* Solutions Dropdown */}
            <li className="dropdown">
              <a href="#">
                GTM Solutions <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/technographics">Technographics</a></li>
                <li><a href="/nexttechpurchase">Next Tech Purchase®</a></li>
                <li><a href="/renewalnsubscription">Renewal & Subscription</a></li>
                <li><a href="/intentdata">Intent Data</a></li>
                <li><a href="/contactdata">Contact Data</a></li>
                <li><a href="/marketingqualifiedleads">MQL & Voice Verified Leads</a></li>
                <li><a href="/buyerpersonainsights">Buyer Persona Insights</a></li>
                <li><a href="/eventaudienceacquisition">Event Audience Acquisition</a></li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="dropdown">
              <a href="#">
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/conferences">Conferences</a></li>
              </ul>
            </li>

            {/* Get Started Button */}
            <li className="donate-btn-header">
              <a className="dtbtn" href="/contactus">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
