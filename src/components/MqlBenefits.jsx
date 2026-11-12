import React from "react";
import SolutionStepCard from "./SolutionStepCard";

const benefits = [
  ["Precision Targeting of High-Intent Prospects", "Minimize inefficiencies and shorten conversion timelines by focusing solely on individuals demonstrating clear interest and readiness."],
  ["Scalable Engagement Framework", "Expand outreach across geographies or sectors while maintaining personalization and quality, aligning lead performance with strategic objectives."],
  ["Strategic Messaging Alignment", "Customize communications to mirror each prospect's interests and actions, amplifying relevance and maximizing the value of every interaction."],
];

const MqlBenefits = () => (
  <section className="ppd-renewal-how ppd-mql-benefits" aria-labelledby="ppd-mql-benefits-title">
    <div className="ppd-solution-shell">
      <header className="ppd-renewal-how-header">
        <p className="ppd-renewal-how-eyebrow">Demand generation outcomes</p>
        <h2 className="ppd-renewal-how-title" id="ppd-mql-benefits-title">Demand Gen <span>Benefits</span></h2>
        <p className="ppd-renewal-how-intro">
          Focus campaigns on the right prospects with relevant, scalable
          engagement that supports growth.
        </p>
      </header>
      <div className="ppd-renewal-how-steps">
        {benefits.map(([title, description], index) => (
          <SolutionStepCard
            key={title}
            number={`0${index + 1}`}
            label="Demand generation"
            title={title}
            description={description}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default MqlBenefits;
