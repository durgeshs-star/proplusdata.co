import React, { useEffect, useRef, useState } from "react";
import "./GlobalPresence.css";

const GlobalPresence = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    let hasRevealed = false;
    let observer;
    const revealWhenVisible = () => {
      if (hasRevealed) return;
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        hasRevealed = true;
        setIsVisible(true);
        observer?.disconnect();
        window.removeEventListener("scroll", revealWhenVisible);
        window.removeEventListener("resize", revealWhenVisible);
      }
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) revealWhenVisible();
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    window.addEventListener("scroll", revealWhenVisible, { passive: true });
    window.addEventListener("resize", revealWhenVisible);
    revealWhenVisible();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", revealWhenVisible);
      window.removeEventListener("resize", revealWhenVisible);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ppd-global-section${isVisible ? " ppd-global-visible" : ""}`}
      aria-labelledby="ppd-global-heading"
    >
      <div className="ppd-global-grid" aria-hidden="true" />
      <div className="ppd-global-glow" aria-hidden="true" />

      <div className="ppd-global-container">
        <header className="ppd-global-header">
          <div className="ppd-global-eyebrow ppd-global-reveal">
            <span aria-hidden="true" />
            GLOBAL DATA COVERAGE
          </div>
          <h2
            className="ppd-global-heading ppd-global-reveal"
            id="ppd-global-heading"
          >
            <span>Global Intelligence</span>
            <span className="ppd-global-heading-accent">
              Without Geographic Limits
            </span>
          </h2>
          <div
            className="ppd-global-accent-line ppd-global-reveal"
            aria-hidden="true"
          >
            <span />
          </div>
        </header>

        <div className="ppd-global-layout">
          <div
            className="ppd-global-network ppd-global-reveal"
            role="img"
            aria-label="ProPlus Data connects its global intelligence platform to more than 150 countries across APAC, EMEA, and North America, with headquarters in India."
          >
            <div className="ppd-world-map-container">
              <img src="/assets/images/map.jpg" alt="" className="ppd-world-map" />
              <span className="ppd-map-dot ppd-map-dot--na-west" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--na-central" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--na-east" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--emea-west" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--emea-east" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--emea-south" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--emea-middle-east" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--apac-china" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--apac-sea" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot--apac-japan" aria-hidden="true" />
              <span className="ppd-map-dot ppd-map-dot-hq" aria-hidden="true" />
            </div>
          </div>

          <div className="ppd-global-content">
            <p className="ppd-global-copy ppd-global-reveal">
              Headquartered in India, with a global footprint spanning over
              150+ countries across APAC, EMEA, and North America, we deliver
              tailored, data-driven solutions to organizations across diverse
              industries.
            </p>
            <p className="ppd-global-copy ppd-global-reveal">
              By integrating our specialized  GTM | ABM data solutions, we
              elevate account-based marketing campaigns to new heights,
              ensuring impactful engagement with your target audience.
            </p>

            <div className="ppd-global-metrics">
              <div className="ppd-global-metric ppd-global-reveal">
                <span className="ppd-global-metric-value">150+</span>
                <span className="ppd-global-metric-label">COUNTRIES</span>
              </div>
              <div className="ppd-global-metric ppd-global-reveal">
                <span className="ppd-global-metric-value">3</span>
                <span className="ppd-global-metric-label">GLOBAL REGIONS</span>
              </div>
              <div className="ppd-global-metric ppd-global-reveal">
                <span className="ppd-global-metric-value">1</span>
                <span className="ppd-global-metric-label">
                  INTELLIGENCE PLATFORM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
