import React, { useEffect, useRef, useState } from "react";
import "./ProspectIntelligence.css";

const ProspectIntelligence = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let hasRevealed = false;
    let observer = null;
    const revealIfVisible = () => {
      if (hasRevealed) return;
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        hasRevealed = true;
        setIsVisible(true);
        observer?.disconnect();
        window.removeEventListener("scroll", revealIfVisible);
        window.removeEventListener("resize", revealIfVisible);
      }
    };

    if (!("IntersectionObserver" in window)) {
      revealIfVisible();
      window.addEventListener("scroll", revealIfVisible, { passive: true });
      window.addEventListener("resize", revealIfVisible);
      return () => {
        window.removeEventListener("scroll", revealIfVisible);
        window.removeEventListener("resize", revealIfVisible);
      };
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) revealIfVisible();
      },
      { threshold: 0.18 }
    );

    observer.observe(section);
    window.addEventListener("scroll", revealIfVisible, { passive: true });
    window.addEventListener("resize", revealIfVisible);
    revealIfVisible();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", revealIfVisible);
      window.removeEventListener("resize", revealIfVisible);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ppd-prospect${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-prospect-title"
    >
      <div className="ppd-prospect__grid" aria-hidden="true" />
      <div className="ppd-prospect__ambient" aria-hidden="true" />

      <div className="ppd-prospect__container">
        <div className="ppd-prospect__content">
          <p className="ppd-prospect__eyebrow">
            <span className="ppd-prospect__status" aria-hidden="true" />
            Prospect Intelligence
          </p>

          <h2 className="ppd-prospect__title" id="ppd-prospect-title">
            <span className="ppd-prospect__title-line">Elevate Performance Through</span>
            <span className="ppd-prospect__title-accent">Data-Led Precision</span>
          </h2>

          <div className="ppd-prospect__copy">
            <p>
              Ready to outpace competitors and drive revenue growth? ProPlus Data transforms complex data into precise, actionable intelligence. We provide real-time, curated intelligence that identifies high-value prospects, forecasts emerging opportunities, and empowers precise, impactful marketing. Our insights are designed to drive accuracy, elevate sales performance, and enable smarter, faster decisions.
            </p>
            <p>
              The cutting edge solutions and frameworks empower you to target the right accounts, optimize strategies, and achieve operational excellence. With a focus on innovation and adaptability, we equip your business with the intelligence to thrive in a dynamic market.
            </p>
          </div>
        </div>

        <div className="ppd-prospect__visual">
          <div className="ppd-prospect__orbit ppd-prospect__orbit--outer" aria-hidden="true" />
          <div className="ppd-prospect__orbit ppd-prospect__orbit--inner" aria-hidden="true" />
          <div className="ppd-prospect__visual-grid" aria-hidden="true" />

          <div className="ppd-prospect__connection ppd-prospect__connection--top" aria-hidden="true">
            <span />
          </div>
          <div className="ppd-prospect__connection ppd-prospect__connection--right" aria-hidden="true">
            <span />
          </div>
          <div className="ppd-prospect__connection ppd-prospect__connection--bottom" aria-hidden="true">
            <span />
          </div>
          <div className="ppd-prospect__connection ppd-prospect__connection--left" aria-hidden="true">
            <span />
          </div>

          <span className="ppd-prospect__particle ppd-prospect__particle--one" aria-hidden="true" />
          <span className="ppd-prospect__particle ppd-prospect__particle--two" aria-hidden="true" />
          <span className="ppd-prospect__particle ppd-prospect__particle--three" aria-hidden="true" />
          <span className="ppd-prospect__particle ppd-prospect__particle--four" aria-hidden="true" />
          <span className="ppd-prospect__particle ppd-prospect__particle--five" aria-hidden="true" />
          <span className="ppd-prospect__particle ppd-prospect__particle--six" aria-hidden="true" />

          <div className="ppd-prospect__label ppd-prospect__label--top" aria-hidden="true">
            <span />
            High-value accounts
          </div>
          <div className="ppd-prospect__label ppd-prospect__label--right" aria-hidden="true">
            <span />
            Real-time signals
          </div>
          <div className="ppd-prospect__label ppd-prospect__label--bottom" aria-hidden="true">
            <span />
            Actionable intelligence
          </div>

          <div className="ppd-prospect__image-frame">
            <img
              src="/assets/images/why-us.gif"
              alt="why proplus data"
            />
          </div>

          <div className="ppd-prospect__signal" aria-hidden="true">
            <span className="ppd-prospect__signal-node" />
            <span className="ppd-prospect__signal-line" />
            <span className="ppd-prospect__signal-node" />
            <span className="ppd-prospect__signal-line" />
            <span className="ppd-prospect__signal-node" />
            <span className="ppd-prospect__signal-tag">DATA FLOW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProspectIntelligence;
