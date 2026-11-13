import React, { useState } from "react";
import "./IndustriesSection.css";

const industries = [
  "Cloud", "Logistics", "IT Services", "Telecommunications", "SaaS", "FinTech",
  "Endpoint Security", "Computer Hardware", "Computer Networking", "Data Center",
  "CAD", "Cloud Communications",
];

const industryDescriptions = [
  "See which cloud platforms power each account and where expansion may be possible.",
  "Map the systems behind shipping, fulfillment, fleet, and supply chain operations.",
  "Identify service providers and the technology their teams deliver and support.",
  "Find communications infrastructure, network providers, and related buying signals.",
  "Understand the software platforms companies use and how their stacks evolve.",
  "Spot payment, banking, and financial technology platforms across target accounts.",
  "Reveal endpoint protection tools and security solutions already in place.",
  "Identify device, server, and infrastructure vendors across business environments.",
  "Map networking vendors and connectivity technologies used across organizations.",
  "See data center platforms and infrastructure supporting an account’s operations.",
  "Find engineering and design teams using CAD tools and related software.",
  "Discover the voice, messaging, and collaboration platforms organizations rely on.",
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="ppd-industries-section" aria-label="Technology markets we cover">
      <div className="ppd-industries-container container">
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
                <strong className={industries[activeIndustry].length > 16 ? "is-long" : ""}>{industries[activeIndustry]}</strong>
                <p className="ppd-industries-feature-description" key={activeIndustry} aria-live="polite">
                  {industryDescriptions[activeIndustry]}
                </p>
                <span className="ppd-industries-feature-status"><i aria-hidden="true" /> Coverage available</span>
              </div>
              <span className="ppd-industries-feature-signal ppd-industries-feature-signal-one">TECH LANDSCAPE</span>
              <span className="ppd-industries-feature-signal ppd-industries-feature-signal-two">BUYER SIGNALS</span>
            </div>
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
