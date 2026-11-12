import React, { useEffect, useRef, useState } from "react";
import "./PressReleases.css";

const DataradeComponent = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ppd-press-section ppd-press-section-hero${isVisible ? " is-visible" : ""}`}
      aria-labelledby="datarade-title"
    >
      <div className="ppd-press-grid" aria-hidden="true" />
      <div className="ppd-press-container container">
        <div className="ppd-press-row row align-items-center">
          <article className="ppd-press-copy col-lg-7 col-md-6">
            <div className="ppd-press-eyebrow">
              <span className="ppd-press-eyebrow-dot" aria-hidden="true" />
              <span>FEATURED IN</span>
            </div>

            <h1 className="ppd-press-title" id="datarade-title">
              The Datarade Pulse
            </h1>

            <div className="ppd-press-accent" aria-hidden="true">
              <span />
            </div>

            <div className="ppd-press-text">
              <p className="ppd-press-lead">
                ProPlus Data has been featured in The Datarade Pulse on April 25, curating some of the most impactful updates and trusted data providers in the ecosystem.
              </p>

              <p className="ppd-press-detail">
                This feature reinforces our commitment to high-quality, verified insights, global reach, precision targeting capabilities, and compliance. Whether it's identifying key buyer groups or building hyper-targeted campaigns, ProPlus Data empowers your sales and marketing teams to work smarter with data-driven intelligence.
              </p>
            </div>

            <div className="ppd-press-links">
              <a href="https://datarade.substack.com/p/the-datarade-pulse-news-and-insights-2a6" target="_blank" rel="noopener noreferrer" className="ppd-press-link">
                <span>DATARADE PULSE</span>
                <span className="ppd-press-link-arrow" aria-hidden="true">→</span>
              </a>
              <a href="https://www.linkedin.com/pulse/proplus-data-datarade-pulse-april-25-proplus-data-qleoc" target="_blank" rel="noopener noreferrer" className="ppd-press-link">
                <span>LINKEDIN</span>
                <span className="ppd-press-link-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <div className="ppd-press-visual-column col-lg-5 col-md-6">
            <div className="ppd-press-visual">
              <div className="ppd-press-visual-glow" aria-hidden="true" />
              <div className="ppd-press-orbit ppd-press-orbit-one" aria-hidden="true" />
              <div className="ppd-press-orbit ppd-press-orbit-two" aria-hidden="true" />
              <div className="ppd-press-connection" aria-hidden="true">
                <span className="ppd-press-connection-pulse" />
              </div>
              <div className="ppd-press-image-frame">
                <img
                  src="/assets/images/Datarade-Pulse.webp"
                  alt="Datarade Pulse Feature"
                />
              </div>
              <div className="ppd-press-data-tag ppd-press-data-tag-one">
                <span aria-hidden="true" />
                DATA QUALITY
              </div>
              <div className="ppd-press-data-tag ppd-press-data-tag-two">
                <span aria-hidden="true" />
                GLOBAL REACH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataradeComponent;
