import React, { useEffect, useRef, useState } from "react";
import "./CtaAbout.css";

const CtaAbout = () => {
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
      className={`ppd-cta-section${isVisible ? " ppd-cta-visible" : ""}`}
      aria-labelledby="ppd-cta-heading"
    >
      <div className="ppd-cta-container container">
        <div className="ppd-cta-layout">
          <div className="ppd-cta-content">
            <h2
              className="ppd-cta-heading ppd-cta-reveal"
              id="ppd-cta-heading"
            >
              Ready to turn{" "}
              <span className="ppd-cta-highlight">data intelligence</span> into
              impact?
            </h2>
          </div>

          <div className="ppd-cta-action ppd-cta-reveal">
            <a href="/contact-us" className="ppd-cta-button">
              <span>Connect With Us</span>
            </a>

            <div className="ppd-cta-flow" aria-hidden="true">
              <span className="ppd-cta-flow-point" />
              <span className="ppd-cta-flow-label">DATA</span>
              <span className="ppd-cta-flow-line" />
              <span className="ppd-cta-flow-point" />
              <span className="ppd-cta-flow-label">GTM | ABM</span>
              <span className="ppd-cta-flow-line" />
              <span className="ppd-cta-flow-point" />
              <span className="ppd-cta-flow-label">IMPACT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaAbout;
