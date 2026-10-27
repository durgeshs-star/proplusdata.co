import React, { useEffect, useRef, useState } from "react";
import "./OurProcess.css";

const processSteps = [
  {
    title: "Deep Account Analysis",
    description: (
      <>
        We begin with in-depth firmographic insights to understand your target accounts inside out, ensuring precision-driven strategies tailored to your business needs.
      </>
    ),
    image: "assets/images/icon/Process1.svg",
    alt: "account analysis",
    label: "Account signals",
  },
  {
    title: "Intelligent Data Insights",
    description: (
      <>
        Harness the power of <a href="https://proplusdata.co/technographics">Technographics</a>  and <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase® (NTP)</a>  to uncover key buying signals, track technology adoption, and refine your outreach for maximum impact.
      </>
    ),
    image: "assets/images/icon/Process2.svg",
    alt: "intelligent data insights",
    label: "Tech intelligence",
  },
  {
    title: "Voice & EDM Engagement",
    description: (
      <>
        Through multi-channel EDM and voice verification, we validate interest and deliver personalized, high-impact messages; connecting you directly with decision-makers.
      </>
    ),
    image: "assets/images/icon/Process3.svg",
    alt: "voice-edm-management",
    label: "Buyer engagement",
  },
];

const OurProcess = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let hasRevealed = false;
    let observer = null;
    const revealIfVisible = () => {
      if (hasRevealed) return;
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        hasRevealed = true;
        setIsVisible(true);
        observer?.disconnect();
        window.removeEventListener("scroll", revealIfVisible);
        window.removeEventListener("resize", revealIfVisible);
      }
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) revealIfVisible();
        },
        { threshold: 0.12 }
      );
      observer.observe(section);
    }

    window.addEventListener("scroll", revealIfVisible, { passive: true });
    window.addEventListener("resize", revealIfVisible);
    revealIfVisible();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", revealIfVisible);
      window.removeEventListener("resize", revealIfVisible);
    };
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveStep((currentStep) => (currentStep + 1) % processSteps.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`ppd-process-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-process-title"
    >
      <div className="ppd-process-grid" aria-hidden="true" />
      <div className="ppd-process-glow" aria-hidden="true" />

      <div className="ppd-process-container">
        <header className="ppd-process-header">
          <p className="ppd-process-eyebrow">
            <span className="ppd-process-status" aria-hidden="true" />
            How it works
          </p>
          <h2 className="ppd-process-title" id="ppd-process-title">
            <span>How ProPlus Data</span>
            <span>Drives Your Success</span>
          </h2>
          <div className="ppd-process-title-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </header>

        <div className="ppd-process-workflow">
          <div className="ppd-process-line" aria-hidden="true">
            <span className="ppd-process-pulse" />
          </div>

          <div className="ppd-process-steps">
            {processSteps.map((step, index) => {
              const isActive = (hoveredStep ?? activeStep) === index;

              return (
                <article
                  className={`ppd-process-step${isActive ? " is-active" : ""}`}
                  key={step.title}
                  tabIndex={0}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onFocus={() => setHoveredStep(index)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setHoveredStep(null);
                    }
                  }}
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  <div className="ppd-process-step-top">
                    <span className="ppd-process-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="ppd-process-node" aria-hidden="true" />
                  </div>

                  <div className="ppd-process-panel">
                    <div className="ppd-process-icon-ring" aria-hidden="true">
                      <span className="ppd-process-icon">
                        <img src={step.image} alt={step.alt} />
                      </span>
                    </div>

                    <div className="ppd-process-content">
                      <h3 className="ppd-process-step-title">{step.title}</h3>
                      <p className="ppd-process-description">{step.description}</p>
                    </div>

                    <div className="ppd-process-label">
                      <span className="ppd-process-label-dot" aria-hidden="true" />
                      {step.label}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
