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
          <div className="ppd-buyer-matter-content">
            <p className="ppd-buyer-matter-eyebrow"><span /> BUYING GROUP INTELLIGENCE</p>
            <h2 className="ppd-buyer-matter-title" id="ppd-buyer-matter-title">
              Why <span>Buying Groups</span> Matter
            </h2>
            <span className="ppd-buyer-matter-accent" aria-hidden="true" />
            <p className="ppd-buyer-matter-description">
              Buying decisions rarely rest with one person. Understand the priorities, influence, and needs across the committee so every conversation speaks to what matters to each stakeholder.
            </p>
            <div className="ppd-buyer-matter-signals" aria-label="Buying group insights">
              <span><i>01</i> Decision makers</span>
              <span><i>02</i> Key influencers</span>
              <span><i>03</i> Technical evaluators</span>
            </div>
          </div>
          <aside className="ppd-buyer-matter-graphic" aria-label="Buying group stakeholder map">
            <div className="ppd-buyer-matter-graphic-head">
              <span><i /> STAKEHOLDER MAP</span>
              <b>ACCOUNT CONTEXT</b>
            </div>
            <div className="ppd-buyer-matter-map">
              <svg viewBox="0 0 500 330" preserveAspectRatio="none" aria-hidden="true">
                <path d="M250 165 115 78M250 165 385 78M250 165 115 252M250 165 385 252" />
                <path className="ppd-buyer-matter-map-pulse" d="M250 165 115 78M250 165 385 78M250 165 115 252M250 165 385 252" />
                <circle cx="250" cy="165" r="4" />
                <circle cx="115" cy="78" r="3" />
                <circle cx="385" cy="78" r="3" />
                <circle cx="115" cy="252" r="3" />
                <circle cx="385" cy="252" r="3" />
              </svg>
              <div className="ppd-buyer-matter-map-hub">
                <span className="ppd-buyer-matter-map-hub-icon"><i /><i /><i /></span>
                <small>SHARED ACCOUNT VIEW</small>
                <b>Buying group</b>
                <span>Decision Makers | Influencers</span>
              </div>
              <div className="ppd-buyer-matter-map-node ppd-buyer-matter-map-node--leadership">
                <i>01</i><span><b>Leadership</b><small>Sets priorities</small></span>
              </div>
              <div className="ppd-buyer-matter-map-node ppd-buyer-matter-map-node--marketing">
                <i>02</i><span><b>Marketing</b><small>Shapes demand</small></span>
              </div>
              <div className="ppd-buyer-matter-map-node ppd-buyer-matter-map-node--technical">
                <i>03</i><span><b>Technical</b><small>Validates fit</small></span>
              </div>
              <div className="ppd-buyer-matter-map-node ppd-buyer-matter-map-node--finance">
                <i>04</i><span><b>Finance</b><small>Reviews value</small></span>
              </div>
            </div>
            <div className="ppd-buyer-matter-graphic-foot"><span><i /> Different roles, aligned context</span><b>01 — 04</b></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
