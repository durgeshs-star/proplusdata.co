import React from "react";

const CtaEvent = () => {
  return (
    <section className="ppd-techno-cta" aria-labelledby="ppd-event-cta-title">
      <div className="ppd-techno-cta__grid" aria-hidden="true" />
      <div className="ppd-solution-shell">
        <div className="ppd-techno-cta__panel">
          <h2 id="ppd-event-cta-title">
            Want to ensure your next event delivers{" "}
            <span>highest ROI?</span>
          </h2>
          <a href="/contact-us" className="ppd-techno-cta__button">
            Connect With Us
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaEvent;
