import React from "react";

const advantages = [
  ["Confirmed Interest", "Engage prospects who have validated their intent through direct dialogue, paving the way for more relevant outreach."],
  ["Minimized Risk", "Eliminate unreliable or outdated contacts early, safeguarding resources and maintaining campaign effectiveness."],
  ["Enhanced Dialogue", "Begin conversations with leads already familiar with your value proposition, fostering warmer, more productive exchanges."],
];

const Vvladvantage = () => (
  <section className="ppd-vvl-advantages" aria-labelledby="ppd-vvl-advantages-title">
    <div className="ppd-solution-shell">
      <header className="ppd-vvl-advantages-header">
        <h2 className="ppd-vvl-advantages-title" id="ppd-vvl-advantages-title">Advantages of <span>Voice Verification</span></h2>
        <span className="ppd-vvl-advantages-accent" aria-hidden="true" />
      </header>
      <div className="ppd-vvl-advantages-grid">
        {advantages.map(([title, description], index) => (
          <article className="ppd-vvl-advantage-card" key={title}>
            <span className="ppd-vvl-advantage-icon" aria-hidden="true">0{index + 1}</span>
            <h3 className="ppd-vvl-advantage-title">{title}</h3>
            <p className="ppd-vvl-advantage-description">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Vvladvantage;
