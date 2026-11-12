import React from "react";
import SolutionStepCard from "./SolutionStepCard";

const benefits = [
  ["Improve Targeting and Campaign Efficiency", "Increase engagement rates with clean, segmented contact data aligned to your ideal customer profile."],
  ["Accelerate Lead Generation and Sales Pipelines", "Give your teams direct access to qualified contacts to reduce the sales cycle and boost productivity."],
  ["Enhance CRM and ABM Performance", "Strengthen internal systems and marketing strategies with accurate, structured data that integrates easily with existing platforms."],
];

const BusinessBenefit = () => (
  <section className="ppd-renewal-how ppd-contact-benefits" aria-labelledby="ppd-contact-benefits-title">
    <div className="ppd-solution-shell">
      <header className="ppd-renewal-how-header">
        <p className="ppd-renewal-how-eyebrow">Contact data outcomes</p>
        <h2 className="ppd-renewal-how-title" id="ppd-contact-benefits-title">Business <span>Benefits</span></h2>
        <p className="ppd-renewal-how-intro">
          Put trusted contact intelligence to work across targeting, pipeline,
          and account-based marketing.
        </p>
      </header>
      <div className="ppd-renewal-how-steps">
        {benefits.map(([title, description], index) => (
          <SolutionStepCard
            key={title}
            number={`0${index + 1}`}
            label="Business benefit"
            title={title}
            description={description}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default BusinessBenefit;
