import React from "react";

const CtaIntent = () => {
  return (
    <section className="ppd-techno-cta">
      <div className="ppd-techno-cta__grid" aria-hidden="true" />
      <div className="ppd-solution-shell">
        <div className="ppd-techno-cta__panel">
          <h2>
            Engage with right accounts with <span>buyer intent!</span>
          </h2>
          <a className="ppd-techno-cta__button" href="/contact-us">
            Connect With Us
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaIntent;
