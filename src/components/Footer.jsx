import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ homepage = false }) => {
  return (
    <footer className="ppd-footer">
      <div className="ppd-footer__grid" aria-hidden="true" />

      <div className="container">
        <div className="ppd-footer-grid">
          <section className="ppd-footer-brand" aria-label="ProPlus Data">
            <Link to="/" className="ppd-footer-logo" aria-label="ProPlus Data home">
              <img src="/assets/images/white-logo.png" alt="ProPlus Data" />
            </Link>
            <p className="ppd-footer-description">
              Prospect intelligence that moves at the speed of your market.
            </p>
            <div className="ppd-footer-social" aria-label="Social media">
              {homepage && (
                <a
                  className="ppd-footer-social-link"
                  href="mailto:info@proplusdata.co"
                  aria-label="Email ProPlus Data"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              )}
              <a
                className="ppd-footer-social-link"
                href="https://www.linkedin.com/company/proplus-data/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ProPlus Data on LinkedIn"
              >
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              {homepage && (
                <a
                  className="ppd-footer-social-link"
                  href="https://wa.me/919112110691"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message ProPlus Data on WhatsApp"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true" />
                </a>
              )}
            </div>
          </section>

          <nav className="ppd-footer-column" aria-label="Solutions">
            <h2 className="ppd-footer-heading">Solutions</h2>
            <ul className="ppd-footer-links">
              <li><Link className="ppd-footer-link" to="/technographics">Technographics</Link></li>
              <li><Link className="ppd-footer-link" to="/next-tech-purchase">Next Tech Purchase<sup>&reg;</sup></Link></li>
              <li><Link className="ppd-footer-link" to="/renewal-intelligence">Renewal Intelligence</Link></li>
              <li><Link className="ppd-footer-link" to="/intent-data">Intent Data</Link></li>
              <li><Link className="ppd-footer-link" to="/contact-data">Contact Data</Link></li>
              <li><Link className="ppd-footer-link" to="/demand-gen">Demand Gen</Link></li>
              <li><Link className="ppd-footer-link" to="/buying-group">Buying Group</Link></li>
              <li><Link className="ppd-footer-link" to="/event-audience-acquisition">Event Audience Acquisition</Link></li>
            </ul>
          </nav>

          <nav className="ppd-footer-column" aria-label="Resources">
            <h2 className="ppd-footer-heading">Resources</h2>
            <ul className="ppd-footer-links">
              <li><Link className="ppd-footer-link" to="/careers">Careers</Link></li>
              <li><Link className="ppd-footer-link" to="/conferences">Conferences</Link></li>
              <li><Link className="ppd-footer-link" to="/blogs">Blogs</Link></li>
              <li><Link className="ppd-footer-link" to="/contact-us">Contact Us</Link></li>
              <li><Link className="ppd-footer-link" to="/press-releases">Press Releases</Link></li>
              <li><Link className="ppd-footer-link" to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </nav>

          <section className="ppd-footer-compliance" aria-label="Trust and compliance">
            <h2 className="ppd-footer-heading">Trust &amp; Compliance</h2>
            <div className="ppd-footer-compliance-group">
              <h3>GDPR &amp; CCPA Compliant</h3>
              <div className="ppd-footer-compliance-logos">
                <span className="ppd-footer-compliance-logo">
                  <img src="/assets/images/gdpr-ready-logo 2.svg" alt="GDPR Logo" />
                </span>
                <span className="ppd-footer-compliance-logo">
                  <img src="/assets/images/ccpa-1.png" alt="CCPA Logo" />
                </span>
              </div>
            </div>
            <div className="ppd-footer-compliance-group">
              <h3>ISO &amp; SOC 2 Certified</h3>
              <div className="ppd-footer-compliance-logos">
                <span className="ppd-footer-compliance-logo">
                  <img src="/assets/images/ISO9001-2015.svg" alt="ISO 9001 Logo" />
                </span>
                <span className="ppd-footer-compliance-logo">
                  <img src="/assets/images/ISO27001-2022.svg" alt="ISO 27001 Logo" />
                </span>
                <span className="ppd-footer-compliance-logo">
                  <img src="/assets/images/SOC_2.svg" alt="SOC 2 Logo" />
                </span>
              </div>
            </div>
          </section>

          <section className="ppd-footer-contact" aria-label="Contact ProPlus Data">
            <h2 className="ppd-footer-heading">Contact</h2>
            <div className="ppd-footer-contact-list">
              <a href="mailto:info@proplusdata.co">
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>info@proplusdata.co</span>
              </a>
              <a href="mailto:hr@proplusdata.com">
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>hr@proplusdata.com</span>
              </a>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>India | Japan | Singapore</span>
              </p>
            </div>
            <a
              className="ppd-footer-cta"
              href="https://nexora.proplusdata.co/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free Access
            </a>
          </section>
        </div>

        <hr className="ppd-footer-divider" />

        <div className="ppd-footer-bottom">
          <p>© {new Date().getFullYear()} ProPlus Data. All Rights Reserved.</p>
          <p className="ppd-footer-bottom__tagline">Built for modern revenue teams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
