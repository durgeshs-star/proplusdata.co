import React, { useEffect, useRef, useState } from "react";
import "./CtaCareers.css";

const CtaCareers = () => {
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
      className={`ppd-cta-careers-section${isVisible ? " ppd-cta-careers-visible" : ""}`}
      aria-labelledby="ppd-cta-careers-heading"
    >
      <div className="ppd-cta-careers-container container">
        <div className="ppd-cta-careers-top ppd-cta-careers-reveal">
          <span className="ppd-cta-careers-eyebrow">
            JOIN OUR TEAM <span aria-hidden="true">→</span> SHAPE THE FUTURE
          </span>
          <span className="ppd-cta-careers-accent-line" aria-hidden="true" />
        </div>

        <div className="ppd-cta-careers-layout">
          <div className="ppd-cta-careers-content">
            <h2
              className="ppd-cta-careers-heading ppd-cta-careers-reveal"
              id="ppd-cta-careers-heading"
            >
              Ready to power{" "}
              <span className="ppd-cta-careers-highlight">data intelligence</span>?
              Join ProPlus Data and turn your expertise into{" "}
              <span className="ppd-cta-careers-highlight">impactful</span> career!
            </h2>
          </div>

          <div className="ppd-cta-careers-action ppd-cta-careers-reveal">
            <div className="ppd-cta-careers-flow" aria-hidden="true">
              <span className="ppd-cta-careers-flow-point" />
              <span className="ppd-cta-careers-flow-label">TALENT</span>
              <span className="ppd-cta-careers-flow-line" />
              <span className="ppd-cta-careers-flow-point" />
              <span className="ppd-cta-careers-flow-label">INNOVATION</span>
              <span className="ppd-cta-careers-flow-line" />
              <span className="ppd-cta-careers-flow-point" />
              <span className="ppd-cta-careers-flow-label">IMPACT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaCareers;
