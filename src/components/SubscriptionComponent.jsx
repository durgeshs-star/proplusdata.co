import React from "react";

export default function SubscriptionComponent() {
  return (
    <section className="ppd-renewal-forecast">
      <div className="ppd-solution-shell ppd-renewal-forecast-inner">
        <div className="ppd-renewal-forecast-media">
          <img
            className="ppd-renewal-forecast-image"
            src="assets/images/Renewal.webp"
            alt="renewal cycle insights"
          />
        </div>
        <div className="ppd-renewal-forecast-content">
          <h2 className="ppd-renewal-forecast-title">
            Revenue Forecast with
            <br />
            <span className="ppd-renewal-forecast-accent">Precision</span>
          </h2>
          <p className="ppd-renewal-forecast-description">
            ProPlus Data empowers you with comprehensive account intelligence
            and renewal cycle insights that will help you map your forecast. By
            leveraging tailored outreach strategies informed by customer
            behavior and lifecycle trends, you can optimize opportunities for
            upselling and cross-selling, and foster enduring partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
