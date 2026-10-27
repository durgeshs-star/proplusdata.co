import React from "react";

const solutionsData = [
  {
    image: "/assets/images/icon/cloud-data-collection.png",
    title: "Technographic Insights",
    description:
      "Gain comprehensive visibility into the technology environments of prospects. From software to hardware, understand their tech preferences, integration ecosystems, and deployment cycles to perfectly align your offerings.",
    alt: "cloud data collection",
  },
  {
    image: "/assets/images/icon/insight.png",
    title: "Forecast Tech Demand with Precision",
    description:
      "Identify accounts likely to invest in technology soon. Using advanced behavioral analysis, these forecasts help you engage proactively and stay ahead of competitors.",
    alt: "forecast tech demand",
  },
  {
    image: "/assets/images/icon/target.png",
    title: "Identify the Right Accounts",
    description:
      "Target companies that are most likely to buy based on current tech, gaps, and switching cycles.",
    alt: "right accounts",
  },
  {
    image: "/assets/images/icon/campaign.png",
    title: "Power Up GTM | ABM Campaigns",
    description:
      "Get ultra-personal with your outreach by tailoring it to the actual tech stack of each account.",
    alt: "abm campaigns",
  },
];

const IntentDelivers = () => {
  return (
    <section className="ppd-techno-points" aria-labelledby="ppd-intent-points-title">
      <div className="ppd-solution-shell">
        <header className="ppd-techno-points-header">
          <h2 className="ppd-techno-points-title" id="ppd-intent-points-title">
            What We Deliver Through <span>Intent Data</span>
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

export default IntentDelivers;
