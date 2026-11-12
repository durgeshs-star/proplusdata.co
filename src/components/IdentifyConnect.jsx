import React, { useEffect, useRef, useState } from "react";
import "./IdentifyConnect.css";

const processSteps = [
  {
    number: "01",
    title: "Identify",
    art: "identify",
    description: (
      <>
        There’s no one-size-fits-all approach when it comes to data intelligence. We identify client’s unique needs and provide{" "}
        <a href="https://proplusdata.co/proplus-intelligence-data-suite">
          tailored data solutions
        </a>{" "}
        that drive meaningful outcomes.
      </>
    ),
  },
  {
    number: "02",
    title: "Connect",
    art: "connect",
    description: (
      <>
        We prioritize strong client and partner relationships, fostering trust
        and success through collaboration and open communication. Our
        customer-focused approach keeps us aligned with evolving market demands.
      </>
    ),
  },
  {
    number: "03",
    title: "Convert",
    art: "convert",
    description: (
      <>
        Raw data is just noise until it’s given structure. With our deep domain
        expertise and cutting-edge framework, we transform raw data into
        actionable insights that drive growth and success.
      </>
    ),
  },
];

function StepIllustration({ type }) {
  if (type === "identify") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">
        <circle className="ppd-identify-connect-art-orbit" cx="48" cy="48" r="34" />
        <circle className="ppd-identify-connect-art-ring" cx="48" cy="48" r="22" />
        <circle className="ppd-identify-connect-art-point ppd-identify-connect-art-point-one" cx="48" cy="14" r="5" />
        <circle className="ppd-identify-connect-art-point ppd-identify-connect-art-point-two" cx="77" cy="63" r="5" />
        <circle className="ppd-identify-connect-art-point ppd-identify-connect-art-point-three" cx="19" cy="63" r="5" />
        <circle className="ppd-identify-connect-art-core" cx="48" cy="48" r="10" />
        <circle className="ppd-identify-connect-art-core-dot" cx="48" cy="48" r="3" />
      </svg>
    );
  }

  if (type === "connect") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">
        <path className="ppd-identify-connect-art-link" d="M48 48 48 17M48 48 75 64M48 48 21 64" />
        <circle className="ppd-identify-connect-art-node ppd-identify-connect-art-node-one" cx="48" cy="16" r="10" />
        <circle className="ppd-identify-connect-art-node ppd-identify-connect-art-node-two" cx="77" cy="66" r="10" />
        <circle className="ppd-identify-connect-art-node ppd-identify-connect-art-node-three" cx="19" cy="66" r="10" />
        <circle className="ppd-identify-connect-art-hub" cx="48" cy="48" r="15" />
        <circle className="ppd-identify-connect-art-hub-dot" cx="48" cy="48" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">
      <path className="ppd-identify-connect-art-axis" d="M18 76h62" />
      <rect className="ppd-identify-connect-art-bar ppd-identify-connect-art-bar-one" x="24" y="52" width="12" height="24" rx="4" />
      <rect className="ppd-identify-connect-art-bar ppd-identify-connect-art-bar-two" x="43" y="39" width="12" height="37" rx="4" />
      <rect className="ppd-identify-connect-art-bar ppd-identify-connect-art-bar-three" x="62" y="23" width="12" height="53" rx="4" />
      <path className="ppd-identify-connect-art-arrow" d="m23 44 20-12 15 3 19-17m-11 0h11v11" />
    </svg>
  );
}

const IdentifyConnect = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let hasRevealed = false;
    let observer = null;
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

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) revealWhenVisible();
        },
        { threshold: 0.15 }
      );
      observer.observe(section);
    }

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
      className={`ppd-identify-connect${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-identify-connect-title"
      data-active-step={activeStep === null ? "none" : activeStep}
    >
      <div className="ppd-identify-connect-grid" aria-hidden="true" />
      <div className="ppd-identify-connect-glow" aria-hidden="true" />

      <div className="container ppd-identify-connect-container">
        <header className="ppd-identify-connect-header">
          <div className="ppd-identify-connect-eyebrow">
            <span aria-hidden="true" />
            PROSPECT INTELLIGENCE
          </div>
          <h2 id="ppd-identify-connect-title">
            Prospect <span>Intelligence</span>
          </h2>
          <p className="ppd-identify-connect-subtitle">
            Identify ~ Connect ~ Convert
          </p>
          <div className="ppd-identify-connect-accent" aria-hidden="true">
            <span />
          </div>
        </header>

        <div className="ppd-identify-connect-flow">
          <div className="ppd-identify-connect-track" aria-hidden="true">
            <span className="ppd-identify-connect-track-pulse" />
          </div>
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className={`ppd-identify-connect-step${activeStep === index ? " is-active" : ""}`}
              tabIndex={0}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              onFocus={() => setActiveStep(index)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setActiveStep(null);
                }
              }}
              style={{ "--step-index": index }}
            >
              <div className="ppd-identify-connect-step-top">
                <span className="ppd-identify-connect-number">{step.number}</span>
                <span className="ppd-identify-connect-node" aria-hidden="true" />
              </div>

              <div className="ppd-identify-connect-icon">
                <span className="ppd-identify-connect-icon-ring" aria-hidden="true" />
                <StepIllustration type={step.art} />
              </div>

              <div className="ppd-identify-connect-step-label">
                <span className="ppd-identify-connect-step-status">
                  <i aria-hidden="true" />
                  INTELLIGENCE STAGE
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="ppd-identify-connect-status">
          <span aria-hidden="true" />
          A CONNECTED INTELLIGENCE WORKFLOW
        </div>
      </div>
    </section>
  );
};

export default IdentifyConnect;
