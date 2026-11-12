import React, { useState } from "react";
import "./IndustriesSection.css";

const industries = [
  "Cloud", "Logistics", "IT Services", "Telecommunications", "SaaS", "FinTech",
  "Endpoint Security", "Computer Hardware", "Computer Networking", "Data Center",
  "CAD", "Cloud Communications",
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="ppd-industries-section" aria-labelledby="ppd-industries-title">
      <div className="ppd-industries-container container">
        <header className="ppd-industries-header">
          <p className="ppd-industries-eyebrow"><span className="ppd-industries-eyebrow-dot" aria-hidden="true" />Industry intelligence</p>
          <h2 id="ppd-industries-title">A clearer view of <em>every market</em></h2>
          <p className="ppd-industries-intro">Explore the technology landscapes and decision-makers shaping the industries you sell into.</p>
        </header>

        <div className="ppd-industries-explorer">
          <div className="ppd-industries-feature">
            <div
              className="ppd-industries-feature-visual"
              key={activeIndustry}
              style={{ "--industry-hue": (activeIndustry * 29 + 210) % 360 }}
              role="img"
              aria-label={`Illustrated market intelligence network for ${industries[activeIndustry]}`}
            >
              <span className="ppd-industries-feature-orbit ppd-industries-feature-orbit-one" />
              <span className="ppd-industries-feature-orbit ppd-industries-feature-orbit-two" />
              <svg className="ppd-industries-feature-network" viewBox="0 0 360 270" aria-hidden="true">
                <path d="M56 70 180 134 303 58M56 70 62 206 180 134 299 207 303 58M62 206 299 207" />
                <circle cx="56" cy="70" r="7" />
                <circle cx="303" cy="58" r="7" />
                <circle cx="62" cy="206" r="7" />
                <circle cx="299" cy="207" r="7" />
              </svg>
              <div className="ppd-industries-feature-center">
                <span className="ppd-industries-feature-number">0{activeIndustry + 1}</span>
                <span className="ppd-industries-feature-kicker">MARKET INTELLIGENCE</span>
                <strong>{industries[activeIndustry]}</strong>
                <span className="ppd-industries-feature-status"><i aria-hidden="true" /> Coverage available</span>
              </div>
              <span className="ppd-industries-feature-signal ppd-industries-feature-signal-one">TECH LANDSCAPE</span>
              <span className="ppd-industries-feature-signal ppd-industries-feature-signal-two">BUYER SIGNALS</span>
            </div>
            <p className="ppd-industries-feature-caption">
              Explore account and technology context across the markets you serve.
            </p>
          </div>
          <div className="ppd-industries-selector">
            <div className="ppd-industries-selector-heading">
              <span>MARKETS WE COVER</span>
              <span>{String(industries.length).padStart(2, "0")} INDUSTRIES</span>
            </div>
            <div className="ppd-industries-list" aria-label="Select an industry">
              {industries.map((industry, index) => (
                <button
                  type="button"
                  key={industry}
                  className={`ppd-industry-node${activeIndustry === index ? " is-active" : ""}`}
                  aria-pressed={activeIndustry === index}
                  onClick={() => setActiveIndustry(index)}
                >
                  <span className="ppd-industry-node-dot" aria-hidden="true" />
                  <span>{industry}</span>
                  <span className="ppd-industry-node-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
