import React, { useEffect, useRef, useState } from "react";
import SolutionIllustration from "./solutions/SolutionIllustration";

export default function VvlComponent() {
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
    <section ref={sectionRef} className={`ppd-vvl-section${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-vvl-title">
      <div className="ppd-solution-shell">
        <div className="ppd-vvl-layout">
          <div className="ppd-vvl-visual">
            <SolutionIllustration category="Demand Gen" compact />
          </div>
          <div className="ppd-vvl-content">
            <h2 className="ppd-vvl-title" id="ppd-vvl-title">
              Voice Verified Leads <span>for Maximum Credibility</span>
            </h2>
            <span className="ppd-vvl-accent" aria-hidden="true" />
            <p className="ppd-vvl-description">
              Each lead is rigorously validated through a voice verification process, confirming not just the accuracy of their information but also their genuine intent to connect. This added layer of precision filters out unqualified leads, ensuring that only the most credible and engaged prospects make it into your pipeline, saving your teams time, boosting conversion potential, and driving more meaningful conversations from the start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
