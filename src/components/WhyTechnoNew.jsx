import React from "react";
import SolutionIllustration from "./solutions/SolutionIllustration";

export default function WhyTechnoNew() {
  return (
    <section className="ppd-techno-value-new">
      <div className="ppd-techno-value-new__container">
        <div className="ppd-techno-value-new__visual">
          <div className="ppd-techno-value-new__image-wrapper">
            <SolutionIllustration category="Technographic Data" compact />
            <div className="ppd-techno-value-new__decoration" />
          </div>
        </div>
        <div className="ppd-techno-value-new__content">
          <div className="ppd-techno-value-new__eyebrow">
            <span className="ppd-techno-value-new__status" aria-hidden="true" />
            Key Benefits
          </div>
          <h2 className="ppd-techno-value-new__title">
            Discover the Value Behind <span>Tech Adoption Patterns</span>
          </h2>
          <div className="ppd-techno-value-new__copy">
            <p>
              <a href="https://proplusdata.co/technographics">Technographic Data</a> is like x-ray vision for B2B sales and marketing.
              It gives you a complete view of the technology stack, tools, and platforms your target companies currently use.
            </p>
            <p>
              We go beyond basic info, providing timestamped data, tech usage trends, and purchase intent signals so you can target the fit account.
            </p>
          </div>
          <div className="ppd-techno-value-new__stats">
            <div className="ppd-techno-value-new__stat">
              <span className="ppd-techno-value-new__stat-number">10K+</span>
              <span className="ppd-techno-value-new__stat-label">Technologies Tracked</span>
            </div>
            <div className="ppd-techno-value-new__stat">
              <span className="ppd-techno-value-new__stat-number">95%</span>
              <span className="ppd-techno-value-new__stat-label">Data Accuracy</span>
            </div>
            <div className="ppd-techno-value-new__stat">
              <span className="ppd-techno-value-new__stat-number">150+</span>
              <span className="ppd-techno-value-new__stat-label">Countries Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
