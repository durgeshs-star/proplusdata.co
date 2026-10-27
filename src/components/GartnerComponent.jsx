import React from "react";
import "./Gartner.css"

export default function GartnerComponent() {
  return (
    <section className="ppd-gartner-event ppd-gartner-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="ppd-gartner-hero-eyebrow">
              GARTNER MARKETING SYMPOSIUM/XPO 2025
            </span>
            <h1 className="ppd-gartner-hero-title">
              Where <span className="ppd-gartner-hero-highlight">Vision Meets Velocity</span>: ProPlus Data at the Gartner Marketing Symposium/Xpo™ 2025
            </h1>
            <div className="ppd-gartner-hero-rule"></div>
            <div className="ppd-gartner-hero-description">
              <p>From June 2nd to 4th, <a href="https://proplusdata.co/">ProPlus Data</a> was proud to be part of the <a href="https://www.gartner.com/en">Gartner</a> Marketing Symposium/Xpo™ 2025 at the Gaylord Rockies Resort, Denver — one of the most influential gatherings for martech innovators worldwide.</p>
              <p>As exhibitors at Booth #116, we connected with decision-makers navigating the complexities of modern GTM, and shared how our predictive intelligence platform is helping enterprises move from fragmented data to unified, revenue-driving action.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ppd-gartner-hero-media">
              <div className="ppd-gartner-hero-image">
                <img src="/assets/images/Garnter-Post-Event.webp" alt="Gartner event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
