import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CtaContact = () => {
  return (
    <section className="ppd-techno-cta">
      <div className="ppd-techno-cta__grid" aria-hidden="true" />
      <div className="ppd-solution-shell">
        <div className="ppd-techno-cta__panel">
          <h2>
            Unlock conversations that spark transformation with verified contacts!
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

export default CtaContact;
