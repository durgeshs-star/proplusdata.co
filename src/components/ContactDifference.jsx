import React, { useEffect, useRef, useState } from "react";

export default function ContactDifference() {
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

  const differences = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M12 11v4" />
          <path d="M10 13h4" />
        </svg>
      ),
      title: "Human Verified Data",
      description: "Every contact is verified by our team for accuracy and relevance.",
      detail: "100% manual verification process ensuring you reach real decision-makers, not outdated or fictional contacts."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Verified Mobile Direct Dials",
      description: "Direct dial numbers verified and updated regularly.",
      detail: "Direct-to-decision-maker phone numbers with 95%+ connection rates, updated quarterly for maximum accuracy."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Accurate Job Titles",
      description: "Precise job titles and decision-maker roles for targeted outreach.",
      detail: "Granular job function data mapped to organizational hierarchy, helping you reach the right decision-makers every time."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M17 11h-5" />
          <path d="M17 11v2" />
          <path d="M17 13h-2" />
        </svg>
      ),
      title: "Complete Profiles",
      description: "Full contact profiles with all essential information.",
      detail: "Comprehensive data points including email, phone, LinkedIn, company details, and technology stack for enriched targeting."
    }
  ];

  return (
    <section ref={sectionRef} className={`ppd-contact-difference${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-contact-diff-title">
      <div className="ppd-solution-shell">
        <header className="ppd-contact-diff-header">
          <h2 className="ppd-contact-diff-title" id="ppd-contact-diff-title">
            Details That Make The <span>Difference</span>
          </h2>
          <span className="ppd-contact-diff-accent" aria-hidden="true" />
        </header>

        <div className="ppd-contact-diff-ladder">
          <div className="ppd-contact-diff-ladder-rail" aria-hidden="true" />
          
          {differences.map((item, index) => (
            <div 
              className={`ppd-contact-diff-ladder-item ${index % 2 === 0 ? 'ppd-contact-diff-ladder-left' : 'ppd-contact-diff-ladder-right'}`} 
              key={item.title}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="ppd-contact-diff-ladder-node" aria-hidden="true" />
              <div className="ppd-contact-diff-ladder-rung" aria-hidden="true" />
              
              <div className="ppd-contact-diff-ladder-card">
                <div className="ppd-contact-diff-ladder-icon">
                  {item.icon}
                </div>
                <div className="ppd-contact-diff-ladder-content">
                  <h3 className="ppd-contact-diff-ladder-title">{item.title}</h3>
                  <p className="ppd-contact-diff-ladder-description">{item.description}</p>
                  <p className="ppd-contact-diff-ladder-detail">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
