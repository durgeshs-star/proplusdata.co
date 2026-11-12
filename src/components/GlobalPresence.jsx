import React, { useEffect, useRef, useState } from "react";
import "./GlobalPresence.css";

const coverageNodes = [
  { value: "150+", label: "COUNTRIES", className: "ppd-global-node-countries" },
  { value: "APAC", label: "", className: "ppd-global-node-apac" },
  { value: "EMEA", label: "", className: "ppd-global-node-emea" },
  { value: "NORTH", label: "AMERICA", className: "ppd-global-node-north-america" },
];

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
            <span
              className="ppd-global-connection ppd-global-connection-countries"
              aria-hidden="true"
            />
            <span
              className="ppd-global-connection ppd-global-connection-apac"
              aria-hidden="true"
            />
            <span
              className="ppd-global-connection ppd-global-connection-emea"
              aria-hidden="true"
            />
            <span
              className="ppd-global-connection ppd-global-connection-north-america"
              aria-hidden="true"
            />

            <div className="ppd-global-core">
              <span className="ppd-global-core-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="ppd-global-core-label">PROPLUS DATA</span>
              <span className="ppd-global-core-caption">
                Global Intelligence
              </span>
            </div>

            {coverageNodes.map((node, index) => (
              <div
                className={`ppd-global-node ppd-global-reveal ${node.className}`}
                key={node.className}
                style={{ "--ppd-global-order": index }}
              >
                <span className="ppd-global-node-indicator" aria-hidden="true" />
                <span className="ppd-global-node-value">{node.value}</span>
                {node.label && (
                  <span className="ppd-global-node-label">{node.label}</span>
                )}
              </div>
            ))}

            <div className="ppd-global-india">
              <span className="ppd-global-india-dot" aria-hidden="true" />
              <span className="ppd-global-india-name">INDIA</span>
              <span className="ppd-global-india-label">HEADQUARTERS</span>
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
