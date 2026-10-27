import React, { useEffect, useRef, useState } from "react";
import "./IndustriesSection.css";

const industries = [
  { icon: "cloud", alt: "Cloud Industry", name: "Cloud", row: 1, column: 2 },
  { icon: "logistics", alt: "Logistics Industry", name: "Logistics", row: 1, column: 4 },
  { icon: "it-services", alt: "IT Services Industry", name: "IT Services", row: 2, column: 1 },
  { icon: "telecommunication", alt: "Telecommunication Industry", name: "Tele-\ncommunication", row: 2, column: 2 },
  { icon: "saas", alt: "SaaS Industry", name: "SaaS", row: 2, column: 4 },
  { icon: "fintech", alt: "FinTech Industry", name: "FinTech", row: 2, column: 5 },
  { icon: "security", alt: "Endpoint Security Industry", name: "Endpoint\nSecurity", row: 3, column: 1 },
  { icon: "hardware", alt: "Computer Hardware Industry", name: "Computer\nHardware", row: 3, column: 2 },
  { icon: "networking", alt: "Computer Networking Industry", name: "Computer\nNetworking", row: 3, column: 4 },
  { icon: "data-center", alt: "Data Center Industry", name: "Data Center", row: 3, column: 5 },
  { icon: "cad", alt: "CAD Industry", name: "CAD", row: 5, column: 2 },
  { icon: "cloud-comm", alt: "Cloud Communication Industry", name: "Cloud\nCommunication", row: 5, column: 4 },
];

const corePoint = { x: 500, y: 300 };

const industryIcons = {
  cloud: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  logistics: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  "it-services": (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  telecommunication: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  saas: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  ),
  fintech: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  security: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  hardware: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  networking: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="18" y1="10" x2="18" y2="14" />
    </svg>
  ),
  "data-center": (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <line x1="2" y1="8" x2="22" y2="8" />
      <line x1="2" y1="16" x2="22" y2="16" />
      <line x1="8" y1="2" x2="8" y2="22" />
      <line x1="16" y1="2" x2="16" y2="22" />
    </svg>
  ),
  cad: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
    </svg>
  ),
  "cloud-comm": (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" />
      <path d="M16 15.5v.01" />
      <path d="M12 12v.01" />
      <path d="M8.5 15.5v.01" />
      <path d="M16 8.5v.01" />
    </svg>
  ),
};

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ppd-industries-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-industries-title"
    >
      <div className="ppd-industries-grid" aria-hidden="true" />

      <div className="ppd-industries-container container">
        <header className="ppd-industries-header">
          <div className="ppd-industries-eyebrow">
            <span className="ppd-industries-eyebrow-dot" aria-hidden="true" />
            INDUSTRY INTELLIGENCE
          </div>
          <h2 id="ppd-industries-title">
            Proven Across <span>Industries</span>
          </h2>
          <div className="ppd-industries-accent" aria-hidden="true">
            <span />
          </div>
        </header>

        <div
          className="ppd-industries-network"
          data-active={activeIndustry === null ? "none" : activeIndustry}
        >
          <div className="ppd-industries-network-glow" aria-hidden="true" />
          <svg
            className="ppd-industries-connections"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {industries.map((industry, index) => (
              <line
                key={industry.name}
                className={`ppd-industries-connection${activeIndustry === index ? " is-active" : ""}`}
                x1={corePoint.x}
                y1={corePoint.y}
                x2={(industry.column - 0.5) * 200}
                y2={(industry.row - 0.5) * 120}
                style={{ "--connection-delay": `${700 + index * 65}ms` }}
              />
            ))}
          </svg>

          <div className="ppd-industries-core">
            <div className="ppd-industries-core-ring" aria-hidden="true" />
            <div className="ppd-industries-core-content">
              <span className="ppd-industries-core-dot" aria-hidden="true" />
              <strong>DATA</strong>
              <strong>INTELLIGENCE</strong>
            </div>
          </div>

          {industries.map((industry, index) => (
            <button
              key={industry.name}
              type="button"
              className={`ppd-industry-node${activeIndustry === index ? " is-active" : ""}`}
              style={{
                "--node-row": industry.row,
                "--node-column": industry.column,
                "--node-delay": `${index * 55}ms`,
              }}
              aria-label={`${industry.name} industry`}
              onMouseEnter={() => setActiveIndustry(index)}
              onMouseLeave={() => setActiveIndustry(null)}
              onFocus={() => setActiveIndustry(index)}
              onBlur={() => setActiveIndustry(null)}
            >
              <span className="ppd-industry-node-icon">
                {industryIcons[industry.icon]}
              </span>
              <span className="ppd-industry-node-name">{industry.name}</span>
            </button>
          ))}
        </div>

        <div className="ppd-industries-status">
          <span aria-hidden="true" />
          12 INDUSTRIES CONNECTED
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
