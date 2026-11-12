import React from "react";
import SolutionStepCard from "./SolutionStepCard";

const benefits = [
  {
    number: "01",
    title: "Stay ahead of the curve",
    description:
      "Position offerings ahead of competitors by anticipating and responding to emerging technology adoption trends.",
  },
  {
    number: "02",
    title: "Spend with precision",
    description:
      "Focus efforts on high-propensity accounts to maximize return on every sales and marketing investment.",
  },
  {
    number: "03",
    title: "Make confident decisions",
    description:
      "Equip teams with verified insights to guide planning, reduce guesswork, and support data-driven outreach.",
  },
];

export default function NtpBenefits() {
  return (
    <section className="ppd-renewal-how ppd-ntp-benefits" aria-labelledby="ppd-ntp-benefits-title">
      <div className="ppd-solution-shell">
        <header className="ppd-renewal-how-header">
          <p className="ppd-renewal-how-eyebrow">The advantage</p>
          <h2 className="ppd-renewal-how-title" id="ppd-ntp-benefits-title">
            Benefits of <em>Next Tech Purchase</em><sup>&reg;</sup>
          </h2>
          <p className="ppd-renewal-how-intro">
            Turn predictive purchase signals into better timing, more precise
            investment, and confident decisions.
          </p>
        </header>
        <div className="ppd-renewal-how-steps">
          {benefits.map((benefit, index) => (
            <SolutionStepCard
              key={benefit.number}
              number={benefit.number}
              label="Purchase advantage"
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
