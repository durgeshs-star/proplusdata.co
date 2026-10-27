import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./CareerComponent.css";

export default function CareerComponent() {
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
      className={`ppd-careers-hero${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-careers-title"
    >
      <div className="ppd-careers-grid" aria-hidden="true" />
      <div className="ppd-careers-container container">
        <div className="ppd-careers-row row align-items-center">
          <article className="ppd-careers-copy col-lg-7 col-md-6">
            <div className="ppd-careers-eyebrow">
              <span className="ppd-careers-eyebrow-dot" aria-hidden="true" />
              <span>JOIN OUR TEAM</span>
            </div>

            <h1 className="ppd-careers-title" id="ppd-careers-title">
              Careers at <span>ProPlus Data</span>
            </h1>

            <div className="ppd-careers-accent" aria-hidden="true">
              <span />
            </div>

            <div className="ppd-careers-text">
              <p className="ppd-careers-lead">
                At ProPlus Data, we build teams the same way we build our solutions, with precision, intelligence, and a focus on outcomes. Our people work across disciplines to power solutions like <Link to="/technographics">Technographics</Link>, <Link to="/next-tech-purchase">Next Tech Purchase®</Link>, and <Link to="/renewal-intelligence">Renewal Intelligence</Link>, turning complex data into decisive advantage for global businesses.
              </p>

              <p className="ppd-careers-detail">
                Whether you're diving into tech research, shaping digital campaigns, or streamlining operations, every role here contributes to innovations that matter. If you bring expertise, curiosity, and the drive to turn insight into impact, you'll find a workplace that values fresh ideas, encourages growth, and celebrates collaboration. Join us in shaping the future of data intelligence.
              </p>
            </div>

            <a
              href="#career-openings"
              className="ppd-careers-cta"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('career-openings');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span>View Openings</span>
              <span className="ppd-careers-cta-arrow" aria-hidden="true">→</span>
            </a>
          </article>

          <div className="ppd-careers-visual-column col-lg-5 col-md-6">
            <div className="ppd-careers-visual">
              <div className="ppd-careers-visual-glow" aria-hidden="true" />
              <div className="ppd-careers-orbit ppd-careers-orbit-one" aria-hidden="true" />
              <div className="ppd-careers-orbit ppd-careers-orbit-two" aria-hidden="true" />
              <div className="ppd-careers-connection" aria-hidden="true">
                <span className="ppd-careers-connection-pulse" />
              </div>
              <div className="ppd-careers-image-frame">
                <img
                  src="/assets/images/Career.webp"
                  alt="ProPlus Data careers"
                />
              </div>
              <div className="ppd-careers-data-tag ppd-careers-data-tag-one">
                <span aria-hidden="true" />
                DATA INTELLIGENCE
              </div>
              <div className="ppd-careers-data-tag ppd-careers-data-tag-two">
                <span aria-hidden="true" />
                TEAM COLLABORATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
