import React, { useEffect, useRef, useState } from "react";
import "./PressReleases.css";

const PressReleaseComponent = () => {
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
      className={`ppd-press-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="custom-media-title"
    >
      <div className="ppd-press-grid" aria-hidden="true" />
      <div className="ppd-press-container container">
        <div className="ppd-press-row row align-items-center">
          <article className="ppd-press-copy col-lg-7 col-md-6">
            <div className="ppd-press-eyebrow">
              <span className="ppd-press-eyebrow-dot" aria-hidden="true" />
              <span>PRESS RELEASE</span>
            </div>

            <h1 className="ppd-press-title" id="custom-media-title">
              Custom Media Partnership
            </h1>

            <div className="ppd-press-accent" aria-hidden="true">
              <span />
            </div>

            <div className="ppd-press-text">
              <p className="ppd-press-lead">
                <a href="https://custom-media.com/" target="_blank" rel="noopener noreferrer">Custom Media</a>, an award-winning B2B marketing agency based in Tokyo, Japan, has entered a strategic partnership with ProPlus Data to enhance their account-based marketing (ABM) and account-based experience (ABX) services delivery.
              </p>

              <p className="ppd-press-detail">
                This collaboration combines Custom Media's marketing expertise with ProPlus Data's advanced data intelligence capabilities, enabling more precise targeting and better campaign performance for clients across global markets.
              </p>
            </div>

            <div className="ppd-press-links">
              <a href="https://www.einpresswire.com/article/703080658/custom-media-to-partner-with-proplus-data-for-account-based-marketing-services" target="_blank" rel="noopener noreferrer" className="ppd-press-link">
                <span>EIN PRESSWIRE</span>
                <span className="ppd-press-link-arrow" aria-hidden="true">→</span>
              </a>
              <a href="https://www.linkedin.com/posts/proplus-data_proplus-data-japan-partnership-2024-activity-7185505879373332481-jF0C?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="ppd-press-link">
                <span>LINKEDIN</span>
                <span className="ppd-press-link-arrow" aria-hidden="true">→</span>
              </a>
              <a href="https://fox2now.com/business/press-releases/ein-presswire/703080658/custom-media-to-partner-with-proplus-data-for-account-based-marketing-services/" target="_blank" rel="noopener noreferrer" className="ppd-press-link">
                <span>FOX2NOW</span>
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
                  src="/assets/images/cm-x-proplus-data.jpeg"
                  alt="Custom Media - ProPlus Data Partnership"
                />
              </div>
              <div className="ppd-press-data-tag ppd-press-data-tag-one">
                <span aria-hidden="true" />
                ABM SERVICES
              </div>
              <div className="ppd-press-data-tag ppd-press-data-tag-two">
                <span aria-hidden="true" />
                PARTNERSHIP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressReleaseComponent;
