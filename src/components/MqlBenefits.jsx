import React, { useEffect, useRef, useState } from "react";

const MqlBenefits = () => {
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

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
        </svg>
      ),
      title: "Precision Targeting of High-Intent Prospects",
      description: "Minimize inefficiencies and shorten conversion timelines by focusing solely on individuals demonstrating clear interest and readiness."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Scalable Engagement Framework",
      description: "Expand outreach across geographies or sectors while maintaining personalization and quality, aligning lead performance with strategic objectives."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Strategic Messaging Alignment",
      description: "Customize communications to mirror each prospect's interests and actions, amplifying relevance and maximizing the value of every interaction."
    }
  ];

  return (
    <section ref={sectionRef} className={`ppd-mql-benefits${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-mql-benefits-title">
      <div className="ppd-solution-shell">
        <header className="ppd-mql-benefits-header">
          <h2 className="ppd-mql-benefits-title" id="ppd-mql-benefits-title">
            Demand Gen <span>Benefits</span>
          </h2>
          <span className="ppd-mql-benefits-accent" aria-hidden="true" />
        </header>

        <div className="ppd-mql-benefits-grid">
          {benefits.map((benefit, index) => (
            <article className="ppd-mql-benefit-card" key={benefit.title} style={{ animationDelay: `${index * 150}ms` }}>
              <span className="ppd-mql-benefit-icon">
                {benefit.icon}
              </span>
              <h3 className="ppd-mql-benefit-title">{benefit.title}</h3>
              <p className="ppd-mql-benefit-description">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MqlBenefits;
