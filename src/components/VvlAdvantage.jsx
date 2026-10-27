import React, { useEffect, useRef, useState } from "react";

const Vvladvantage = () => {
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
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      title: "Confirmed Interest",
      description: "Engage exclusively with prospects who have validated their intent through direct dialogue, paving the way for impactful outreach."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Minimized Risk",
      description: "Eliminate unreliable or outdated contacts early, safeguarding resources and maintaining campaign effectiveness."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9L21 11.5z" />
        </svg>
      ),
      title: "Enhanced Dialogue",
      description: "Begin conversations with leads already familiar with your value proposition, fostering warmer, more productive exchanges."
    }
  ];

  return (
    <section ref={sectionRef} className={`ppd-vvl-advantages${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-vvl-advantages-title">
      <div className="ppd-solution-shell">
        <header className="ppd-vvl-advantages-header">
          <h2 className="ppd-vvl-advantages-title" id="ppd-vvl-advantages-title">
            Advantages of <span>Voice Verification</span>
          </h2>
          <span className="ppd-vvl-advantages-accent" aria-hidden="true" />
        </header>

        <div className="ppd-vvl-advantages-grid">
          {advantages.map((advantage, index) => (
            <article className="ppd-vvl-advantage-card" key={advantage.title} style={{ animationDelay: `${index * 150}ms` }}>
              <span className="ppd-vvl-advantage-icon">
                {advantage.icon}
              </span>
              <h3 className="ppd-vvl-advantage-title">{advantage.title}</h3>
              <p className="ppd-vvl-advantage-description">{advantage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vvladvantage;
