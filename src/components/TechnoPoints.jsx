import React from "react";

const solutionsData = [
  {
    image: "/assets/images/icon/target.png",
    title: "Identify the Right Accounts",
    description:
      "Target companies that are most likely to buy based on current tech, gaps, and switching cycles.",
    alt: "right accounts",
  },
  {
    image: "/assets/images/icon/campaign.png",
    title: " Power Up GTM | ABM Campaigns",
    description:
      "Get ultra-personal with your outreach by tailoring it to the actual tech stack of each account.",
    alt: "abm campaigns",
  },
  {
    image: "/assets/images/icon/upsell-opportunities.png",
    title: " Find Cross-Sell & Upsell Opportunities",
    description:
      "Know what tools they already use and where your solution fits perfectly.",
    alt: "upsell opportunities",
  },
  {
    image: "/assets/images/icon/competitor-landscape.png",
    title: "Competitor Landscape",
    description:
      " Track competitor technologies and gain an edge by showing up where they’re falling short.",
    alt: "competitor landscape",
  },
];

const TechnoPoints = () => {
  return (
    <section className="ppd-techno-points" aria-labelledby="ppd-techno-points-title">
      <div className="ppd-solution-shell">
        <header className="ppd-techno-points-header">
          <h2 className="ppd-techno-points-title" id="ppd-techno-points-title">
            Why Choose <span>Technographics?</span>
          </h2>
          <span className="ppd-techno-points-accent" aria-hidden="true" />
        </header>

        <div className="ppd-techno-points-grid">
          {solutionsData.map((service) => (
            <article className="ppd-techno-point-card" key={service.title}>
              <span className="ppd-techno-point-icon">
                <img src={service.image} alt={service.alt} />
              </span>
              <div className="ppd-techno-point-content">
                <h3 className="ppd-techno-point-title">{service.title}</h3>
                <p className="ppd-techno-point-description">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnoPoints;
