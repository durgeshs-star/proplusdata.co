import React from "react";
import "./Dmwf.css"

const DmwfSection = () => {
  return (
    <section className="ppd-dmwf-event ppd-dmwf-discussion">
      <div className="ppd-dmwf-discussion-inner">
        <h2 className="ppd-dmwf-section-title">What We Discussed at DMWF</h2>
        <p className="ppd-dmwf-intro">At DMWF Europe, we explored how forward-looking teams can use renewal signals to sharpen GTM execution.</p>
        <p className="ppd-dmwf-intro">Specifically, how renewal timelines can be used to:</p>
        
        <ul className="ppd-dmwf-insights">
          <li className="ppd-dmwf-insight">
            <span className="ppd-dmwf-insight-number">01</span>
            <span className="ppd-dmwf-insight-text">Identify high-intent accounts before competitive noise peaks</span>
          </li>
          <li className="ppd-dmwf-insight">
            <span className="ppd-dmwf-insight-number">02</span>
            <span className="ppd-dmwf-insight-text">Prioritize expansion and cross-sell opportunities with precision</span>
          </li>
          <li className="ppd-dmwf-insight">
            <span className="ppd-dmwf-insight-number">03</span>
            <span className="ppd-dmwf-insight-text">Align sales and marketing around real buying windows</span>
          </li>
          <li className="ppd-dmwf-insight">
            <span className="ppd-dmwf-insight-number">04</span>
            <span className="ppd-dmwf-insight-text">Reduce resource spend on late or misaligned outreach</span>
          </li>
        </ul>

        <p className="ppd-dmwf-pullquote">Renewals aren't a back-office metric anymore. They're a frontline GTM signal.</p>

        <div className="ppd-dmwf-why">
          <h3 className="ppd-dmwf-why-title">Why Renewal Intelligence Matters Now</h3>
          <p className="ppd-dmwf-why-description">Most GTM strategies still rely heavily on intent signals alone. Useful, but incomplete.</p>
          <p className="ppd-dmwf-why-description"><a href="https://proplusdata.co/renewal-intelligence">Renewal Intelligence</a> empowers you with comprehensive account intelligence and renewal cycle insights that will help you map your forecast. By leveraging tailored outreach strategies informed by customer behavior and lifecycle trends, you can optimize opportunities for upselling and cross-selling, and foster enduring partnerships.</p>
        </div>
      </div>
    </section>
  );
};

export default DmwfSection;
