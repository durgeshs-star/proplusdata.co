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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    alt: "Team reviewing account research together",
    label: "Account signals",
    visualHeading: "Account analysis",
    visualRows: ["Firmographic insights", "Target accounts", "Business needs"],
    visualFooter: "Precision-driven account strategy",
  },
  {
    title: "Intelligent Data Insights",
    description: (
      <>
        Harness the power of <a href="https://proplusdata.co/technographics">Technographics</a>  and <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase® (NTP)</a>  to uncover key buying signals, track technology adoption, and refine your outreach for maximum impact.
      </>
    ),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    alt: "Analytics dashboard on a laptop",
    label: "Tech intelligence",
    visualHeading: "Technology insights",
    visualRows: ["Technographics", "Technology adoption", "Next Tech Purchase®"],
    visualFooter: "Buying signals and outreach",
  },
  {
    title: "Voice & EDM Engagement",
    description: (
      <>
        Through multi-channel EDM and voice verification, we validate interest and deliver personalized, high-impact messages; connecting you directly with decision-makers.
      </>
    ),
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    alt: "Colleagues collaborating during a meeting",
    label: "Buyer engagement",
    visualHeading: "Buyer engagement",
    visualRows: ["Voice verification", "EDM engagement", "Decision-makers"],
    visualFooter: "Personalized buyer outreach",
  },
];

const imageSlides = [
  processSteps[processSteps.length - 2],
  processSteps[processSteps.length - 1],
  ...processSteps,
  processSteps[0],
  processSteps[1],
];

const OurProcess = () => {
  const sectionRef = useRef(null);
  const imageViewportRef = useRef(null);
  const imageTrackRef = useRef(null);
  const transitionLock = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visualIndex, setVisualIndex] = useState(2);
  const [isJumping, setIsJumping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [imageTrackOffset, setImageTrackOffset] = useState(0);
  const activeStep = (visualIndex - 2 + processSteps.length) % processSteps.length;

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
    if (!isVisible || isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const rotationId = window.setInterval(() => {
      setVisualIndex((currentIndex) => currentIndex + 1);
    }, 3000);
    return () => window.clearInterval(rotationId);
  }, [activeStep, isPaused, isVisible]);

  useEffect(() => {
    const viewport = imageViewportRef.current;
    const track = imageTrackRef.current;
    if (!viewport || !track) return undefined;

    const updateTrackOffset = () => {
      const activeSlide = track.querySelector(`[data-process-track-index="${visualIndex}"]`);
      if (!activeSlide) return;
      setImageTrackOffset(activeSlide.offsetLeft);
    };

    updateTrackOffset();
    if (!("ResizeObserver" in window)) {
      window.addEventListener("resize", updateTrackOffset);
      return () => window.removeEventListener("resize", updateTrackOffset);
    }
    const resizeObserver = new ResizeObserver(updateTrackOffset);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    return () => resizeObserver.disconnect();
  }, [visualIndex]);

  const moveBy = (direction) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (transitionLock.current && !prefersReducedMotion) return;
    transitionLock.current = !prefersReducedMotion;
    setVisualIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;
      if (prefersReducedMotion && nextIndex < 2) return processSteps.length + 1;
      if (prefersReducedMotion && nextIndex > processSteps.length + 1) return 2;
      return nextIndex;
    });
  };

  const goToStep = (targetStep) => {
    const forward = (targetStep - activeStep + processSteps.length) % processSteps.length;
    const backward = forward - processSteps.length;
    const shortestMove = Math.abs(forward) <= Math.abs(backward) ? forward : backward;
    if (!shortestMove) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (transitionLock.current && !prefersReducedMotion) return;
    transitionLock.current = !prefersReducedMotion;
    setVisualIndex((currentIndex) => {
      const nextIndex = currentIndex + shortestMove;
      if (prefersReducedMotion && nextIndex < 2) return processSteps.length + 1;
      if (prefersReducedMotion && nextIndex > processSteps.length + 1) return 2;
      return nextIndex;
    });
  };

  const handleTrackTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (visualIndex >= 2 && visualIndex <= processSteps.length + 1) {
      transitionLock.current = false;
      return;
    }

    setIsJumping(true);
    setVisualIndex(visualIndex < 2 ? processSteps.length + 1 : 2);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setIsJumping(false);
      transitionLock.current = false;
    }));
  };

  return (
    <section
      ref={sectionRef}
      className={`ppd-process-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-process-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="ppd-process-grid" aria-hidden="true" />
      <div className="ppd-process-glow" aria-hidden="true" />

      <div className="ppd-process-container">
        <div className="ppd-process-layout">
          <div className="ppd-process-copy-column">
            <header className="ppd-process-header">
              <h2 className="ppd-process-title" id="ppd-process-title">
                <span>How it works</span>
                <span>How ProPlus Data</span>
                <span>Drives Your Success</span>
              </h2>
              <div className="ppd-process-title-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </header>
            <div className="ppd-process-copy" key={activeStep} aria-live="polite">
              <span className="ppd-process-number">{String(activeStep + 1).padStart(2, "0")}</span>
              <h3 className="ppd-process-step-title">{processSteps[activeStep].title}</h3>
              <p className="ppd-process-description">{processSteps[activeStep].description}</p>
              <div className="ppd-process-label">
                <span className="ppd-process-label-dot" aria-hidden="true" />
                {processSteps[activeStep].label}
              </div>
            </div>

            <div className="ppd-process-dots" aria-label="Choose a process step">
              {processSteps.map((step, index) => (
                <button
                  className={`ppd-process-dot${activeStep === index ? " is-active" : ""}`}
                  key={step.title}
                  type="button"
                  aria-label={`Show step ${index + 1}: ${step.title}`}
                  aria-current={activeStep === index ? "step" : undefined}
                  onClick={() => goToStep(index)}
                />
              ))}
            </div>

            <div className="ppd-process-arrows" aria-label="Image carousel controls">
              <button type="button" aria-label="Previous step" onClick={() => moveBy(-1)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15.5 5-7 7 7 7" /></svg>
              </button>
              <button type="button" aria-label="Next step" onClick={() => moveBy(1)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.5 5 7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="ppd-process-image-column">
            <div className="ppd-process-image-viewport" ref={imageViewportRef} role="region" aria-roledescription="carousel" aria-label="Process images">
              <div className={`ppd-process-image-track${isJumping ? " is-jumping" : ""}`} ref={imageTrackRef} onTransitionEnd={handleTrackTransitionEnd} style={{ transform: `translate3d(-${imageTrackOffset}px, 0, 0)` }}>
                {imageSlides.map((step, index) => {
                  const stepIndex = (index - 2 + processSteps.length) % processSteps.length;
                  const isActiveImage = index === visualIndex;
                  return (
                  <div
                    className={`ppd-process-image-slide${isActiveImage ? " is-active" : ""}`}
                    data-process-track-index={index}
                    key={`${step.title}-${index}`}
                    aria-hidden={!isActiveImage}
                    aria-roledescription="slide"
                    aria-label={`${stepIndex + 1} of ${processSteps.length}: ${step.title}`}
                  >
                    <img src={step.image} alt={step.alt} loading="eager" />
                    <div className="ppd-process-image-design" aria-hidden="true">
                      <div className="ppd-process-float-panel ppd-process-float-panel--top">
                        <strong>{step.visualHeading}</strong>
                        {step.visualRows.map((row) => <span key={row}><i />{row}</span>)}
                      </div>
                      <div className="ppd-process-float-panel ppd-process-float-panel--bottom">
                        <i aria-hidden="true" />
                        <span>{step.visualFooter}</span>
                      </div>
                    </div>
                    <span className="ppd-process-visual-label" aria-hidden="true">{step.label}</span>
                  </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
