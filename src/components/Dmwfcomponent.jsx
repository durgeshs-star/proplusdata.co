import React from "react";
import "./Dmwf.css"

export default function DmwfComponent() {
  return (
    <section className="ppd-dmwf-event ppd-dmwf-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="ppd-dmwf-hero-eyebrow">
              DMWF EUROPE 2025
            </span>
            <h1 className="ppd-dmwf-hero-title">
              The Key GTM Insight from DMWF Europe: <span className="ppd-dmwf-hero-highlight">Visibility Beats Volume</span>
            </h1>
            <div className="ppd-dmwf-hero-rule"></div>
            <div className="ppd-dmwf-hero-description">
              <p><a href="https://www.digitalmarketing-conference.com/">DMWF</a> Europe reinforced one clear message: modern GTM success isn't about doing more marketing. It's about acting at the right moment.</p>
              <p>Across conversations at Stand #168, revenue and marketing teams shared a common challenge. A pipeline exists, but visibility into who is about to act is still missing.</p>
              <p>That's where Renewal Intelligence changes the equation.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ppd-dmwf-hero-media">
              <div className="ppd-dmwf-hero-image">
                <img src="/assets/images/dmwf-post-event.png" alt="DMWF event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
