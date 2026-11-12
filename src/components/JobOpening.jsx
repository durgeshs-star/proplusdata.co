import React, { useEffect, useRef, useState } from "react";
import CareerForm from "./CareerForm";
import "./JobOpening.css";
import "./CareerForm.css";

export default function JobOpening({
  position,
  deliverables = [],
  requirements = [],
  sectionTitle = "Deliverables",
  requirementsTitle = "Requirements"
}) {
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
      className={`ppd-job-opening${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-job-title"
    >
      <div className="ppd-job-grid" aria-hidden="true" />
      <div className="ppd-job-container container">
        <div className="ppd-job-row row align-items-center">
          <article className="ppd-job-copy col-lg-7 col-md-6">
            <div className="ppd-job-eyebrow">
              <span className="ppd-job-eyebrow-dot" aria-hidden="true" />
              <span>CAREER OPPORTUNITY</span>
            </div>

            <h1 className="ppd-job-title" id="ppd-job-title">
              {position}
            </h1>

            <div className="ppd-job-accent" aria-hidden="true">
              <span />
            </div>

            {deliverables.length > 0 && (
              <div className="ppd-job-section">
                <h2 className="ppd-job-section-title">{sectionTitle}</h2>
                <div className="ppd-job-list">
                  {deliverables.map((item, index) => (
                    <div key={index} className="ppd-job-item">
                      <div className="ppd-job-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="ppd-job-item-text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {requirements.length > 0 && (
              <div className="ppd-job-section">
                <h2 className="ppd-job-section-title">{requirementsTitle}</h2>
                <div className="ppd-job-list">
                  {requirements.map((item, index) => (
                    <div key={index} className="ppd-job-item ppd-job-item-req">
                      <div className="ppd-job-item-icon ppd-job-item-icon-req">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="ppd-job-item-text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          <div className="ppd-job-visual-column col-lg-5 col-md-6">
            <CareerForm position={position} />
          </div>
        </div>
      </div>
    </section>
  );
}
