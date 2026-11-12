import React, { useEffect, useRef, useState } from "react";
import SolutionStepCard from "./SolutionStepCard";

const StrategicAdvantage = () => {
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

  const advantages = [
    {
      number: "01",
      title: "Maximized ROI",
      description: "Channel resources toward high-potential prospects backed by validated intent, ensuring every investment delivers maximum returns."
    },
    {
      number: "02",
      title: "Competitive Supremacy",
      description: "Anticipate market trends and competitor maneuvers, positioning your business as the preferred choice."
    },
    {
      number: "03",
      title: "Operational Excellence",
      description: "Eliminate inefficiencies with a clear, data-driven roadmap to engage prospects, streamlining execution. Build lasting relationships by addressing decision-makers' needs with precision, fostering loyalty and sustainable growth."
    }
  ];

  return (
    <section ref={sectionRef} className={`ppd-renewal-how ppd-buyer-advantages${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-buyer-advantages-title">
      <div className="ppd-solution-shell">
        <header className="ppd-renewal-how-header">
          <p className="ppd-renewal-how-eyebrow">Buying group impact</p>
          <h2 className="ppd-renewal-how-title" id="ppd-buyer-advantages-title">
            Strategic <span>Advantages</span>
          </h2>
          <p className="ppd-renewal-how-intro">
            Use buyer group insight to prioritize accounts, strengthen
            engagement, and create sustainable growth.
          </p>
        </header>

        <div className="ppd-renewal-how-steps ppd-buyer-advantages-hex">
          {advantages.map((advantage, index) => (
            <SolutionStepCard
              key={advantage.title}
              number={advantage.number}
              label="Strategic advantage"
              title={advantage.title}
              description={advantage.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvantage;
