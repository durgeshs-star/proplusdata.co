import React, { useEffect, useRef, useState } from "react";

export default function BuyerPersonaMatter() {
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
    <section ref={sectionRef} className={`ppd-buyer-matter${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-buyer-matter-title">
      <div className="ppd-solution-shell">
        <div className="ppd-buyer-matter-layout">
          <div className="ppd-buyer-matter-visual">
            <div className="ppd-buyer-matter-frame" aria-hidden="true" />
            <img src="/assets/images/Buyer Pesona Insights.webp" alt="Organizational Chart" />
          </div>
          <div className="ppd-buyer-matter-content">
            <h2 className="ppd-buyer-matter-title" id="ppd-buyer-matter-title">
              Why <span>Buying Group</span> Matter
            </h2>
            <span className="ppd-buyer-matter-accent" aria-hidden="true" />
            <p className="ppd-buyer-matter-description">
              Buying Group empower you to refine your go-to-market approach with precision. It extends beyond rudimentary data compilation to deliver strategic insights into business priorities, financials, tech investments, buyer groups and competitive landscape at granular level. This depth of insight enables you to craft hyper-targeted strategies, build meaningful engagement, and drive impactful business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
