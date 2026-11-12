import React from "react";

export default function SolutionStepCard({
  number,
  label,
  title,
  description,
  index = 0,
}) {
  const sceneIndex = (index % 3) + 1;

  return (
    <article
      className={`ppd-renewal-how-step ppd-renewal-how-step--${sceneIndex}`}
    >
      <div className="ppd-renewal-how-step-heading">
        <span className="ppd-renewal-how-step-number">{number}</span>
        <span className="ppd-renewal-how-step-label">{label}</span>
        <span className="ppd-renewal-how-step-arrow" aria-hidden="true">↗</span>
      </div>
      <h3>{title}</h3>
      <p className="ppd-renewal-how-step-description">{description}</p>
      <div
        className={`ppd-renewal-how-scene ppd-renewal-how-scene--${sceneIndex}`}
        aria-hidden="true"
      >
        {sceneIndex === 1 && (
          <div className="ppd-renewal-scene-tracking">
            <div className="ppd-renewal-scene-topline"><span>ACCOUNT SIGNALS</span><i /></div>
            <div className="ppd-renewal-scene-row"><b>Priority account</b><span>High intent</span><i /></div>
            <div className="ppd-renewal-scene-row"><b>Next opportunity</b><span>In view</span><i /></div>
            <div className="ppd-renewal-scene-timeline"><i /><span /><i /><span /><i /></div>
          </div>
        )}
        {sceneIndex === 2 && (
          <div className="ppd-renewal-scene-outreach">
            <div className="ppd-renewal-scene-message"><i /><span /><span /></div>
            <div className="ppd-renewal-scene-reply"><span /><span /></div>
            <div className="ppd-renewal-scene-send"><span>Relevant account context</span><b>↗</b></div>
          </div>
        )}
        {sceneIndex === 3 && (
          <div className="ppd-renewal-scene-growth">
            <div className="ppd-renewal-scene-ring"><span>86<small>FIT</small></span></div>
            <div className="ppd-renewal-scene-growth-copy">
              <b>Account opportunity</b>
              <span>Signal aligned to your goals</span>
              <i><em /></i>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
