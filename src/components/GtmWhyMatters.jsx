import React from "react";
import "./GtmWhyMatters.css";

export default function GtmWhyMatters() {
  return (
    <div className="ppd-gtm-why">
      <div className="container">
        <div className="ppd-gtm-why-grid">
          <div className="ppd-gtm-why-media">
            <img src="/assets/images/about/gtm-assessment.png" alt="Data Intelligence Company" />
          </div>
          <div className="ppd-gtm-why-content">
            <h2 className="ppd-gtm-why-title">Why It Matters</h2>
            <div className="ppd-gtm-why-rule"></div>
            <p className="ppd-gtm-why-description">
              This assessment shows the real state of your GTM across marketing, sales, and revenue. It highlights gaps, priorities, and what to fix first, based on how your teams actually work today.
            </p>
            <p className="ppd-gtm-why-description">
              Your results depend on your answers, so honest inputs lead to practical guidance, not generic advice. The questions focus on data quality, targeting, pipeline discipline, and sales alignment.
            </p>
            <p className="ppd-gtm-why-description">
              At the end, you'll receive a detailed report with your scores, risks you might be missing, and clear next steps to improve pipeline quality and conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
