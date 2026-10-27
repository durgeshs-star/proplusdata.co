import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CtaEvent = () => {
  return (
    <section className="ppd-techno-cta" aria-labelledby="ppd-event-cta-title">
      <div className="ppd-techno-cta__grid" aria-hidden="true" />
      <div className="ppd-solution-shell">
        <div className="ppd-techno-cta__panel">
          <h2 id="ppd-event-cta-title">
            Want to ensure your next event delivers highest ROI?
          </h2>
          <a href="/contact-us" className="ppd-techno-cta__button">
            Connect With Us
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaEvent;
