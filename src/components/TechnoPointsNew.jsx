import React from "react";

const solutionsData = [
  {
    title: "Identify the Right Accounts",
    description:
      "Target companies that are most likely to buy based on current tech, gaps, and switching cycles.",
  },
  {
    title: "Power Up GTM | ABM Campaigns",
    description:
      "Get ultra-personal with your outreach by tailoring it to the actual tech stack of each account.",
  },
  {
    title: "Find Cross-Sell & Upsell Opportunities",
    description:
      "Know what tools they already use and where your solution fits perfectly.",
  },
  {
    title: "Competitor Landscape",
    description:
      "Track competitor technologies and gain an edge by showing up where they're falling short.",
  },
];

const TechnoPointsNew = () => {
  return (
    <section className="ppd-techno-points-new" aria-labelledby="ppd-techno-points-new-title">
      <div className="ppd-techno-points-new__container">
        <header className="ppd-techno-points-new__header">
          <div className="ppd-techno-points-new__eyebrow">
            <span className="ppd-techno-points-new__status" aria-hidden="true" />
            Core Capabilities
          </div>
          <h2 className="ppd-techno-points-new__title" id="ppd-techno-points-new-title">
            Why Choose <span>Technographics?</span>
          </h2>
          <p className="ppd-techno-points-new__subtitle">
            Unlock the full potential of your B2B sales and marketing with our comprehensive technographic data solutions
          </p>
        </header>

        <div className="ppd-techno-points-new__grid">
          {solutionsData.map((service, index) => (
            <article className="ppd-techno-point-card-new" key={service.title} style={{ animationDelay: `${index * 100}ms` }}>
              <div className="ppd-techno-point-card-new__icon-wrapper">
                <span className="ppd-techno-point-card-new__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="ppd-techno-point-card-new__content">
                <h3 className="ppd-techno-point-card-new__title">{service.title}</h3>
                <p className="ppd-techno-point-card-new__description">{service.description}</p>
              </div>
              <div className="ppd-techno-point-card-new__arrow" aria-hidden="true">→</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnoPointsNew;
