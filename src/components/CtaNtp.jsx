import React from "react";

const CtaNtp = () => {
  return (
    <section
      className="ppd-ntp-cta"
      style={{ "--ppd-ntp-cta-globe": "url(/assets/images/glob-bg.png)" }}
    >
      <div className="ppd-ntp-cta-grid" aria-hidden="true" />
      <div className="ppd-solution-shell">
        <div className="ppd-ntp-cta-content">
          <h2 className="ppd-ntp-cta-title">
            Target replacement opprtunities with Next Tech Purchase<sup>&reg;</sup>
          </h2>
          <a className="ppd-ntp-cta-button" href="/contact-us">
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaNtp;
