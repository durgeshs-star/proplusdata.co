import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="ppd-footer">
    <div className="container ppd-footer__content">
      <div className="ppd-footer-grid">
        <div className="ppd-footer-brand">
          <Link to="/" className="ppd-footer-logo" aria-label="ProPlus Data home">
            <img src="/assets/images/white-logo.png" alt="ProPlus Data" />
          </Link>
          <p className="ppd-footer-description">
            Prospect intelligence that moves at the speed of your market.
          </p>
          <div className="ppd-footer-social">
            <a
              className="ppd-footer-social-link"
              href="https://www.linkedin.com/company/proplus-data/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ProPlus Data on LinkedIn"
            >
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="ppd-footer-column" aria-label="Solutions">
          <h2 className="ppd-footer-heading">Key Solutions</h2>
          <ul className="ppd-footer-links">
            <li><Link className="ppd-footer-link" to="/technographics">Technographics</Link></li>
            <li><Link className="ppd-footer-link" to="/renewal-intelligence">Renewal Intelligence</Link></li>
            <li><Link className="ppd-footer-link" to="/intent-data">Intent</Link></li>
            <li><Link className="ppd-footer-link" to="/buying-group">Buying Groups</Link></li>
            <li><Link className="ppd-footer-link" to="/next-tech-purchase">Next Tech Purchase<sup>®</sup></Link></li>
          </ul>
        </nav>

        <nav className="ppd-footer-column" aria-label="Company">
          <h2 className="ppd-footer-heading">Company</h2>
          <ul className="ppd-footer-links">
            <li><Link className="ppd-footer-link" to="/about-us">About Us</Link></li>
            <li><Link className="ppd-footer-link" to="/careers">Careers</Link></li>
            <li><Link className="ppd-footer-link" to="/contact-us">Contact Us</Link></li>
            <li><Link className="ppd-footer-link" to="/press-releases">Press Releases</Link></li>
          </ul>
        </nav>

        <nav className="ppd-footer-column" aria-label="Legal">
          <h2 className="ppd-footer-heading">Legal</h2>
          <ul className="ppd-footer-links">
            <li><Link className="ppd-footer-link" to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="ppd-footer-link" to="/privacy-policy#cookies">Cookies Settings</Link></li>
          </ul>
        </nav>

        <div className="ppd-footer-contact">
          <h2 className="ppd-footer-heading">Contact</h2>
          <div className="ppd-footer-contact-list">
            <a href="mailto:info@proplusdata.co"><i className="fa fa-envelope" aria-hidden="true" />info@proplusdata.co</a>
            <a href="mailto:hr@proplusdata.com"><i className="fa fa-envelope" aria-hidden="true" />hr@proplusdata.com</a>
            <p><i className="fa fa-map-marker" aria-hidden="true" />ATC House, 5th Floor, Survey #23/5, Dharamveer Nagar, Baner, Pune, Maharashtra 411045</p>
          </div>
          <Link className="ppd-footer-cta" to="/contact-us">Get Free Access</Link>
        </div>
      </div>

      <section
        className="ppd-footer-compliance"
        aria-label="Certifications and compliance"
      >
        <div className="ppd-footer-compliance-group">
          <h2 className="ppd-footer-compliance-title">
            GDPR &amp; CCPA Compliant
          </h2>
          <div className="ppd-footer-compliance-logos">
            <img
              src="/assets/images/gdpr-ready-logo.svg"
              alt="GDPR Compliant"
              className="ppd-footer-compliance-logo"
            />
            <img
              src="/assets/images/ccpa-1.png"
              alt="CCPA Compliant"
              className="ppd-footer-compliance-logo"
            />
          </div>
        </div>
        <div className="ppd-footer-compliance-group">
          <h2 className="ppd-footer-compliance-title">
            ISO &amp; SOC 2 Certified
          </h2>
          <div className="ppd-footer-compliance-logos">
            <img
              src="/assets/images/ISO9001-2015.svg"
              alt="ISO 9001:2015 Certified"
              className="ppd-footer-compliance-logo"
            />
            <img
              src="/assets/images/ISO27001-2022.svg"
              alt="ISO 27001:2022 Certified"
              className="ppd-footer-compliance-logo"
            />
            <img
              src="/assets/images/SOC_2.svg"
              alt="SOC 2 Certified"
              className="ppd-footer-compliance-logo"
            />
          </div>
        </div>
      </section>

      <hr className="ppd-footer-divider" />
      <div className="ppd-footer-bottom">
        <p>© {new Date().getFullYear()} ProPlus Data. All rights reserved.</p>
        <span className="ppd-footer-bottom__tagline">Built for modern revenue teams.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
