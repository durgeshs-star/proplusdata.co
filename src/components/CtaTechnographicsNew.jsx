import React from "react";

const CtaTechnographicsNew = () => {
  return (
    <section className="ppd-techno-cta-new">
      <div className="ppd-techno-cta-new__background" aria-hidden="true">
        <div className="ppd-techno-cta-new__grid" />
        <div className="ppd-techno-cta-new__glow" />
      </div>
      <div className="ppd-techno-cta-new__container">
        <div className="ppd-techno-cta-new__content">
          <div className="ppd-techno-cta-new__eyebrow">
            <span className="ppd-techno-cta-new__status" aria-hidden="true" />
            Get Started
          </div>
          <h2 className="ppd-techno-cta-new__title">
            Elevate your outreach strategies and drive success with <span>Technographics!</span>
          </h2>
          <p className="ppd-techno-cta-new__subtitle">
            Ready to transform your B2B sales and marketing with precision technographic data? Connect with our team today.
          </p>
          <a className="ppd-techno-cta-new__button" href="/contact-us">
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaTechnographicsNew;
