import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="footer-middle pt-95"
      style={{ backgroundImage: "url(/assets/images/call-bg.png)" }}
    >
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="widget widgets-company-info">
              <div className="footer-bottom-logo pb-40">
               <a href="/"> <img src="/assets/images/white-logo.png" alt="Logo" /></a>
              </div>
              <div className="company-info-desc d-flex">
                <p className=" ml-3 mb-2"><i className="fa fa-envelope"></i> info@proplusdata.co</p><br/>
              
              </div>
              <div className="company-info-desc d-flex">
               
                <p className=" ml-3 mb-2"><i className="fa fa-envelope"></i> hr@proplusdata.com</p>
              
              </div>
              <div className="company-info-desc d-flex">
                
                <p className=" ml-3"><i className="fa fa-map-marker"></i> India | Japan | Singapore </p> 
              </div>
              <div className="follow-company-info pt-3 d-flex">
                <div className="follow-company-text ml-3">
                  <a href="#"><p>Follow Us </p></a>
                </div>
                <div className="follow-company-icon">
                  <a href="https://www.linkedin.com/company/proplus-data/" target="_blank" rel="noopener noreferrer">
                     <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GTM Enablers */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex footer">
            <div className="widget widget-nav-menu">
              <h4 className="widget-title pb-4 mr-150">Solutions</h4>
              <ul className="menu-quick-link text-left">
                <li><Link to="/technographics">Technographics</Link></li>
                <li><Link to="/next-tech-purchase">Next Tech Purchase<sup>&reg;</sup></Link></li>
                <li><Link to="/renewal-intelligence">Renewal Intelligence</Link></li>
                <li><Link to="/intent-data">Intent Data</Link></li>
                <li><Link to="/contact-data">Contact Data</Link></li>
                <li><Link to="/demand-gen">Demand Gen</Link></li>
                <li><Link to="/buying-group">Buying Group</Link></li>
                <li><Link to="/event-audience-acquisition">Event Audience Acquisition</Link></li>
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex footer">
            <div className="widget widgets-company-info">
              <h3 className="widget-title pb-4">Resources</h3>
              <ul className="menu-quick-link mr-2 text-left">
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/conferences">Conferences</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/press-releases">Press Releases</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* GDPR Compliance */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
            <div className="widget widget-icon" id="em-recent-post-widget">
              <h5 className="widget-title mr-3 pb-3">GDPR & CCPA Compliant</h5>
              <div className="recent-post-item active pb-3 d-flex">
                <img width="120" height="120" src="/assets/images/gdpr-ready-logo 2.svg" alt="GDPR Logo" />
                <img width="120" height="120" src="/assets/images/ccpa-1.png" alt="CCPA Logo" />
              </div>
              <h5 className="widget-title mr-3 pb-3">ISO & SOC 2 Certified</h5>
                <div className="recent-post-item active pb-3 d-flex">
                  <img width="120" height="120" src="/assets/images/ISO9001-2015.svg" alt="ISO-9001 Logo" />
                <img width="120" height="120" src="/assets/images/ISO27001-2022.svg" alt="ISO-27001 Logo" />
                <img width="120" height="120" src="/assets/images/SOC_2.svg" alt="SOC Logo" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row footer-bottom mt-70 pt-3 pb-1">
          <div className="col-lg-6 col-md-6 text-left">
           <p>© {new Date().getFullYear()} ProPlus Data. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
