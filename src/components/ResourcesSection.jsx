import React from "react";
import "./ResourcesSection.css";
import GTMResourceArtwork from "./GTMResourceArtwork";

const resources = [
  {
    artwork: "competitor",
    category: "COMPETITIVE INTELLIGENCE",
    title: "Turning Your Competitor's Customers into Your Growth Engine",
    link: "/turning-your-competitors-customers-into-your-growth-engine",
  },
  {
    artwork: "renewal",
    category: "RENEWAL INTELLIGENCE",
    title: "How Renewal Intelligence Wins Against the Odds",
    link: "/how-renewal-intelligence-win-against-the-odd",
  },
  {
    artwork: "growth",
    category: "PREDICTABLE GROWTH",
    title: "4 Smart Ways to Build Predictable Growth Using Renewal Intelligence",
    link: "/renewal-are-the-arr-4-smart-ways-to-build-drive-growth-with-renewal-intelligence",
  },
  {
    artwork: "timing",
    category: "TIMING ADVANTAGE",
    title: "Mastering the 100-Day Advantage",
    link: "/strategic-imperative-of-renewal-timings-mastering-the-100-day-advantage",
  },
];

const ResourcesSection = () => {
  return (
    <section className="ppd-gtm-resources" aria-labelledby="ppd-gtm-resources-title">
      <div className="container">
        <div className="ppd-gtm-resources-header">
          <span className="ppd-gtm-resources-eyebrow">
            INSIGHTS & INTELLIGENCE
          </span>
          <h2 className="ppd-gtm-resources-title" id="ppd-gtm-resources-title">
            GTM <em>Resources</em>
          </h2>
          <p className="ppd-gtm-resources-intro">
            Fresh perspectives to help you spot opportunity, sharpen strategy, and grow with confidence.
          </p>
        </div>
        <div className="ppd-gtm-resources-grid">
          {resources.map((resource) => (
            <a
              href={resource.link}
              className="ppd-gtm-resource-card"
              key={resource.artwork}
            >
              <div className="ppd-gtm-resource-image-wrap">
                <GTMResourceArtwork type={resource.artwork} title={resource.category.toLowerCase()} />
              </div>
              <div className="ppd-gtm-resource-content">
                <span className="ppd-gtm-resource-category">{resource.category}</span>
                <h3 className="ppd-gtm-resource-title">{resource.title}</h3>
                <span className="ppd-gtm-resource-action" aria-hidden="true">
                  Explore insight
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
