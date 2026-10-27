import React from "react";
import "./Gartner.css"

const GartnerSection = () => {
  return (
    <section className="ppd-gartner-event ppd-gartner-content">
      <div className="ppd-gartner-content-inner">
        <div className="ppd-gartner-section">
          <h2 className="ppd-gartner-section-title">Precision Intelligence. Marketing Impact.</h2>
          <p className="ppd-gartner-intro">Our conversations with marketing leaders centered on three clear priorities:</p>
          
          <ul className="ppd-gartner-insights">
            <li className="ppd-gartner-insight">
              <span className="ppd-gartner-insight-number">01</span>
              <span className="ppd-gartner-insight-text">Driving GTM performance through early buyer intent signals</span>
            </li>
            <li className="ppd-gartner-insight">
              <span className="ppd-gartner-insight-number">02</span>
              <span className="ppd-gartner-insight-text">Scaling personalization with enriched firmographics and buying patterns</span>
            </li>
            <li className="ppd-gartner-insight">
              <span className="ppd-gartner-insight-number">03</span>
              <span className="ppd-gartner-insight-text">Maximizing ROI with intelligence-led targeting and segmentation</span>
            </li>
          </ul>
        </div>

        <div className="ppd-gartner-section">
          <div className="ppd-gartner-feature">
            <p>One solution that sparked major interest: <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase®</a>, our proprietary predictive engine that forecasts upcoming technology investments before traditional intent data can. For marketing teams, it means one thing:</p>
            <p className="ppd-gartner-pullquote">A first-mover advantage on tech-buying accounts that are still off your radar.</p>
          </div>
        </div>

        <div className="ppd-gartner-section">
          <h2 className="ppd-gartner-section-title">Looking Ahead</h2>
          <div className="ppd-gartner-closing">
            <p>We leave Gartner's Symposium not just with new relationships and strategic insights, but with renewed momentum to help global GTM teams convert signals into strategy.</p>
            <p>Missed us at the Gartner Expo? Let's connect and explore how ProPlus Data's <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase®</a> and range of unified DaaS solutions can transform your next marketing move.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GartnerSection;
