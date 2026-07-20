import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none">
      <div className="mobile-menu">
        <nav className="techno_menu">
          <ul className="clearfix">
            <li>
              <Link to="#">Home</Link>
              <ul>
                <li>
                  <ul>
                    <li><Link to="/">Home One</Link></li>
                    <li><Link to="/index-2">Home Two</Link></li>
                    <li><Link to="/index-3">Home Three</Link></li>
                    <li><Link to="/index-4">Home Four</Link></li>
                    <li><Link to="/index-5">Home Five</Link></li>
                    <li><Link to="/index-6">Home Six</Link></li>
                    <li><Link to="/index-7">Home Seven</Link></li>
                    <li><Link to="/index-8">Home Eight</Link></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li><Link to="/index-9">Home Nine</Link></li>
                    <li><Link to="/index-10">Home Ten</Link></li>
                    <li><Link to="/index-11">Home Eleven New</Link></li>
                    <li><Link to="/index-12">Home Twelve New</Link></li>
                    <li><Link to="/index-13">Home Thirteen New</Link></li>
                    <li><Link to="/data-science">Data Science New</Link></li>
                    <li><Link to="/machine-learning">Machine Learning New</Link></li>
                    <li><Link to="/affiliate-intelligent">Affiliate Intelligent New</Link></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li><Link to="/odoo-erp">Odoo ERP <span>New</span></Link></li>
                    <li><Link to="/index-15">Home IT Solution <span>New</span></Link></li>
                    <li><Link to="/index-16">Home SEO <span>New</span></Link></li>
                    <li><Link to="/index-17">Home Insurance <span>New</span></Link></li>
                    <li><Link to="/index-18">Home Startup <span>New</span></Link></li>
                    <li><Link to="/revulation-slider">Revolution Slider One</Link></li>
                    <li><Link to="/revulation-slider-2">Revolution Slider Two</Link></li>
                    <li><Link to="/home-dark">Dark Version New</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Company</Link>
              <ul>
                <li><Link to="/about">About One</Link></li>
                <li><Link to="/about-2">About Two</Link></li>
                <li><Link to="/about-3">About Three</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/team-details">Team Details</Link></li>
                <li><Link to="/why-choose-us">Why Choose Us</Link></li>
                <li><Link to="/case-study">Case Study</Link></li>
                <li><Link to="/case-study-details">Case Study Details</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/404">Error</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#">Contact</Link>
              <ul>
                <li><Link to="/contact">Contact One</Link></li>
                <li><Link to="/contact-2">Contact Two New</Link></li>
                <li><Link to="/contact-3">Contact Three New</Link></li>
                <li><Link to="/contact-4">Contact Four New</Link></li>
                <li><Link to="/contact-5">Contact Five New</Link></li>
                <li><Link to="/contact-6">Contact Six New</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
