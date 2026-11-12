import React from "react";
import SolutionStepCard from "./SolutionStepCard";

const DataEnables = () => {
  const processes = [
    {
      id: 1,
      title: "Strategic Planning",
      description: "Craft targeted strategies based on real-time insights, ensuring your business is always aligned with market demands.",
    },
    {
      id: 2,
      title: "Increased ROI",
      description: "Invest wisely by focusing resources on accounts showing intent, maximizing the probability of successful tech adoption. Prioritize accounts with a high propensity for adoption to optimize sales and marketing resource allocation.",
    },
    {
      id: 3,
      title: "Competitive Edge",
      description: "Stay ahead of competitors with a proactive approach to tech trends, positioning your offerings as the top choice for intent-driven accounts.",
    },
  ];

  return (
    <section className="ppd-renewal-how ppd-intent-enables" aria-labelledby="ppd-intent-enables-title">
      <div className="ppd-solution-shell">
        <header className="ppd-renewal-how-header">
          <p className="ppd-renewal-how-eyebrow">Intent data outcomes</p>
          <h2 className="ppd-renewal-how-title" id="ppd-intent-enables-title">
            Intent Data <span>Enables You With</span>
          </h2>
          <p className="ppd-renewal-how-intro">
            Turn intent signals into focused plans, smarter investment, and more
            effective account engagement.
          </p>
        </header>

        <div className="ppd-renewal-how-steps">
          {processes.map((process, index) => (
            <SolutionStepCard
              key={process.id}
              number={`0${process.id}`}
              label="Intent data outcome"
              title={process.title}
              description={process.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataEnables;
