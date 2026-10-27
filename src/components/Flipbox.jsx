import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Flipbox.css";

const flipboxData = [
  {
    image: "assets/images/icon/technographics.svg",
    title: "Technographics ",
    description: "Technographics Intelligence identifies high-potential accounts, enabling precise targeting and higher ROI for your ABM campaigns.",
    alt:"technographics",
    link: "/technographics"
  },
  {
    image: "assets/images/icon/Intent-new.svg",
    title: "Intent Data",
    description: "Intent Data reveals tech preferences and buying signals, helping you target high-potential accounts for smarter, data-driven decisions.",
    alt:"intent data",
    link: "/intent-data"
  },
  {
    image: "assets/images/icon/NTP-n.svg",
    title: (
      <>
        Next Tech Purchase<sup>&reg;</sup>
      </>
    ),
    description: "NTP precisely tracks technology shifts, enabling seamless transitions and alternative solutions for evolving digital landscapes.",
    alt:"next tech purchase",
    link: "/next-tech-purchase"
  },
  {
    image: "assets/images/icon/Renewal & Subscription.svg",
    title: "Renewal Intelligence ",
    description: "Track the lifecycle of your prospects and proactively engage them before they consider competitors' solutions. ",
    alt:"renewal",
    link: "/renewal-intelligence"
  }
];

const Flipbox = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="proplus-intelligence-section" id="flipbox">
      <div className="proplus-intelligence-section__glow" aria-hidden="true" />
      <div className="proplus-intelligence-section__inner">
        <header className="proplus-intelligence-section__header">
          <div className="proplus-intelligence-section__eyebrow">
            <span className="proplus-intelligence-section__status" aria-hidden="true" />
            Data Intelligence
          </div>
          <h2 className="proplus-intelligence-section__title">
            B2B intelligence for
            <span> smarter decisions</span>
          </h2>
          <p className="proplus-intelligence-section__intro">
            Explore the data intelligence capabilities behind precise targeting and data-driven decisions.
          </p>
        </header>

        <div className="proplus-intelligence-grid">
          {flipboxData.map((item, index) => (
            <Link
              to={item.link}
              className={`proplus-intelligence-card${activeCard === index ? " is-active" : ""}`}
              key={item.link}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onFocus={() => setActiveCard(index)}
              onBlur={() => setActiveCard(null)}
            >
              <span className="proplus-intelligence-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="proplus-intelligence-card__arrow" aria-hidden="true">
                ↗
              </span>

              <span className="proplus-intelligence-card__icon-wrap">
                <span className="proplus-intelligence-card__icon-ring" />
                <span className="proplus-intelligence-card__icon">
                  <img src={item.image} alt={item.alt} />
                </span>
              </span>

              <span className="proplus-intelligence-card__title">{item.title}</span>
              <span className="proplus-intelligence-card__description">{item.description}</span>

              <span className="proplus-intelligence-card__footer">
                <span>Explore</span>
                <span className="proplus-intelligence-card__footer-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flipbox;
