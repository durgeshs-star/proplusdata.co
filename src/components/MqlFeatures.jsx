import React, { useEffect, useRef, useState } from "react";

const processItems = [
  {
    id: 1,
    title: "Targeted Lead Acquisition",
    desc: "Access a carefully curated pool of prospects actively interacting with pertinent content or offers, ensuring outreach efforts prioritize those most inclined to engage and convert.",
  },
  {
    id: 2,
    title: "Behavioral and Engagement Analytics",
    desc: "Track real buying signals and engagement patterns to identify in-market accounts and prioritize outreach that drives pipeline.",
  },
  {
    id: 3,
    title: "Structured Multi-Touch Campaigns",
    desc: "Implement a proven three-touch engagement sequence designed to heighten responsiveness and cultivate intent, building trust and encouraging deeper consideration.",
  },
  {
    id: 4,
    title: "A/B Testing for Ongoing Refinement",
    desc: "Evaluate subject lines, content structures, & calls to action in real time. Data-backed adjustments pinpoint the most impactful formats for sustained engagement.",
  },
];

const MqlFeatures = () => {
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
    <section ref={sectionRef} className={`ppd-mql-features${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-mql-features-title">
      <div className="ppd-solution-shell">
        <header className="ppd-mql-features-header">
          <h2 className="ppd-mql-features-title" id="ppd-mql-features-title">
            Key <span>Features</span>
          </h2>
          <span className="ppd-mql-features-accent" aria-hidden="true" />
        </header>

        <div className="ppd-mql-features-grid">
          {processItems.map((item) => (
            <article className="ppd-mql-feature-card" key={item.id}>
              <span className="ppd-mql-feature-number">{item.id}</span>
              <h3 className="ppd-mql-feature-title">{item.title}</h3>
              <p className="ppd-mql-feature-description">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MqlFeatures;
