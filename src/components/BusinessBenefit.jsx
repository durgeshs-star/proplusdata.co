import React, { useEffect, useRef, useState } from "react";

const BusinessBenefit = () => {
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
      title: "Improve Targeting and Campaign Efficiency",
      description: "Increase engagement rates with clean, segmented contact data aligned to your ideal customer profile."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Accelerate Lead Generation and Sales Pipelines",
      description: "Give your teams direct access to qualified contacts to reduce the sales cycle and boost productivity."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Enhance CRM and ABM Performance",
      description: "Strengthen internal systems and marketing strategies with accurate, structured data that integrates easily with existing platforms."
    }
  ];

  return (
    <section ref={sectionRef} className={`ppd-contact-benefits${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-contact-benefits-title">
      <div className="ppd-solution-shell">
        <header className="ppd-contact-benefits-header">
          <h2 className="ppd-contact-benefits-title" id="ppd-contact-benefits-title">
            Business <span>Benefits</span>
          </h2>
          <span className="ppd-contact-benefits-accent" aria-hidden="true" />
        </header>

        <div className="ppd-contact-benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              className="ppd-contact-benefits-grid-item" 
              key={benefit.title}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="ppd-contact-benefits-float-icon">
                {benefit.icon}
              </div>
              <div className="ppd-contact-benefits-badge">
                <span>0{index + 1}</span>
              </div>
              <h3 className="ppd-contact-benefits-item-title">{benefit.title}</h3>
              <p className="ppd-contact-benefits-item-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefit;
