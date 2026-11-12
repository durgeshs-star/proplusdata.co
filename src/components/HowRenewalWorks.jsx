import React from "react";

const steps = [
  {
    number: "01",
    label: "Spot the signal",
    title: "Know when a renewal is coming.",
    description:
      "See upcoming technology contract renewals across your target accounts, with time to prepare.",
  },
  {
    number: "02",
    label: "Start the conversation",
    title: "Reach buyers at the right moment.",
    description:
      "Prioritize accounts entering an evaluation window and tailor outreach to their changing needs.",
  },
  {
    number: "03",
    label: "Build the opportunity",
    title: "Turn timing into account growth.",
    description:
      "Bring a relevant solution to the conversation before renewal decisions are locked in.",
  },
];

const HowRenewalWorks = () => {
  return (
    <section className="ppd-renewal-how" aria-labelledby="ppd-renewal-how-title">
      <div className="ppd-solution-shell">
        <header className="ppd-renewal-how-header">
          <p className="ppd-renewal-how-eyebrow">From signal to opportunity</p>
          <h2 className="ppd-renewal-how-title" id="ppd-renewal-how-title">
            How It <span>Works.</span>
          </h2>
          <p className="ppd-renewal-how-intro">
            A clearer view of renewal timing helps your team make every next move
            more relevant.
          </p>
        </header>
        <div className="ppd-renewal-how-steps">
          {steps.map((step, index) => (
            <article
              className={`ppd-renewal-how-step ppd-renewal-how-step--${index + 1}`}
              key={step.number}
            >
              <div className="ppd-renewal-how-step-heading">
                <span className="ppd-renewal-how-step-number">{step.number}</span>
                <span className="ppd-renewal-how-step-label">{step.label}</span>
                <span className="ppd-renewal-how-step-arrow" aria-hidden="true">↗</span>
              </div>
              <h3>{step.title}</h3>
              <p className="ppd-renewal-how-step-description">{step.description}</p>
              <div className={`ppd-renewal-how-scene ppd-renewal-how-scene--${index + 1}`} aria-hidden="true">
                {index === 0 && (
                  <div className="ppd-renewal-scene-tracking">
                    <div className="ppd-renewal-scene-topline"><span>ACCOUNT SIGNALS</span><i /></div>
                    <div className="ppd-renewal-scene-row"><b>Northstar Health</b><span>Renewal in 42 days</span><i /></div>
                    <div className="ppd-renewal-scene-row"><b>Meridian Group</b><span>Renewal in 68 days</span><i /></div>
                    <div className="ppd-renewal-scene-timeline"><i /><span /><i /><span /><i /></div>
                  </div>
                )}
                {index === 1 && (
                  <div className="ppd-renewal-scene-outreach">
                    <div className="ppd-renewal-scene-message"><i /><span /><span /></div>
                    <div className="ppd-renewal-scene-reply"><span /><span /></div>
                    <div className="ppd-renewal-scene-send"><span>Relevant account context</span><b>↗</b></div>
                  </div>
                )}
                {index === 2 && (
                  <div className="ppd-renewal-scene-growth">
                    <div className="ppd-renewal-scene-ring"><span>86<small>FIT</small></span></div>
                    <div className="ppd-renewal-scene-growth-copy"><b>Account opportunity</b><span>Renewal window identified</span><i><em /></i></div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowRenewalWorks;
