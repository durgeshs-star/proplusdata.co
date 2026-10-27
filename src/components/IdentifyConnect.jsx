import React, { useEffect, useRef, useState } from "react";
import "./IdentifyConnect.css";

const processSteps = [
  {
    number: "01",
    title: "Identify",
    image: "assets/images/icon/Process1.svg",
    alt: "identify",
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
    image: "assets/images/icon/Process2.svg",
    alt: "connect",
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
    image: "assets/images/icon/Process3.svg",
    alt: "convert",
    description: (
      <>
        Raw data is just noise until it’s given structure. With our deep domain
        expertise and cutting-edge framework, we transform raw data into
        actionable insights that drive growth and success.
      </>
    ),
  },
];

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
                <img src={step.image} alt={step.alt} />
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
