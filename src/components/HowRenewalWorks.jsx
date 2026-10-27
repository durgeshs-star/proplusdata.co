import React from "react";

const steps = [
  {
    number: "01",
    image: "assets/images/icon/Process1.svg",
    alt: "real time tracking",
    title: "Real-Time Tracking",
    description: "Monitors subscription signals to flag upcoming renewals.",
  },
  {
    number: "02",
    image: "assets/images/icon/Process2.svg",
    alt: "targeted outreach",
    title: "Targeted Outreach",
    description: "Triggers strategies for retention, upsells, and growth.",
  },
  {
    number: "03",
    image: "assets/images/icon/Process3.svg",
    alt: "client lock-in",
    title: "Client Lock-In",
    description: "Strengthens ties before competitors move in.",
  },
];

const HowRenewalWorks = () => {
  return (
    <section className="ppd-renewal-how">
      <div className="ppd-solution-shell">
        <header className="ppd-renewal-how-header">
          <h2 className="ppd-renewal-how-title">
            How It
            <br />
            <span>Works</span>
          </h2>
          <span className="ppd-renewal-how-rule" aria-hidden="true" />
        </header>
        <div className="ppd-renewal-how-grid">
          {steps.map((step) => (
            <article className="ppd-renewal-how-card" key={step.number}>
              <span className="ppd-renewal-how-number">{step.number}</span>
              <div className="ppd-renewal-how-icon">
                <img src={step.image} alt={step.alt} />
              </div>
              <h3 className="ppd-renewal-how-card-title">{step.title}</h3>
              <p className="ppd-renewal-how-description">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowRenewalWorks;
