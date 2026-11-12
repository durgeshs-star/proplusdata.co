import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CtaTechnographics = () => {
  return (
    <section className="ppd-techno-cta">
      <div className="ppd-techno-cta__grid" aria-hidden="true" />
      <div className="ppd-solution-shell">
        <div className="ppd-techno-cta__panel">
          <h2>
            Elevate your outreach strategies and drive success with Technographics!
          </h2>
          <a className="ppd-techno-cta__button" href="/contact-us">
            Connect With Us
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaTechnographics;
