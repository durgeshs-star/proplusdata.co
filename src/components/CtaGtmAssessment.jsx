import React from "react";
import "./CtaGtmAssessment.css";

const CtaGtmAssessment = () => {
  return (
    <div className="ppd-gtm-final-cta">
      <div className="ppd-gtm-final-cta-inner">
        <div className="ppd-gtm-final-cta-content">
          <div>
            <h2 className="ppd-gtm-final-cta-title">
              Your competitor's contract is nearing renewal. Are you ready to win that account?
            </h2>
            <p className="ppd-gtm-final-cta-description">
              Turn every expiring contract into a growth opportunity.
            </p>
          </div>
          <div className="ppd-gtm-final-cta-action">
            <a href="/contact-us" className="ppd-gtm-final-cta-button">
              Connect With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaGtmAssessment;
