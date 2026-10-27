import React from "react";

const strategicValues = [
  {
    title: (
      <>
        The Strategic Value of
        <br />
        Renewal Intelligence
      </>
    ),
    introduction:
      "Timely access to renewal data empowers organizations to:",
    points: [
      "Identify expiring contracts across current & target accounts.",
      "Reach out at right time to have relevant messagesing & conversations.",
      "Stay ahead of churn by decoding renewal patterns early.",
    ],
  },
  {
    title: (
      <>
        Renewal Cycle Intelligence:
        <br />
        Predict the Right Moment
      </>
    ),
    introduction:
      "Adoption sequence & insights that reveals renewal & forecast cycles.",
    points: [
      "Predict renewals accurately.",
      "Align outreach strategies with customer contract milestones.",
      "Engage consistently before renewals.",
    ],
  },
];

const StrategicValue = () => {
  return (
    <section className="ppd-renewal-strategic">
      <div className="ppd-solution-shell">
        <div className="ppd-renewal-strategic-grid">
          {strategicValues.map((value) => (
            <article className="ppd-renewal-strategic-card" key={value.points[0]}>
              <span className="ppd-renewal-strategic-accent" aria-hidden="true" />
              <h2 className="ppd-renewal-strategic-title">{value.title}</h2>
              <p className="ppd-renewal-strategic-intro">
                <strong>{value.introduction}</strong>
              </p>
              <ul className="ppd-renewal-strategic-list">
                {value.points.map((point) => (
                  <li
                    className="ppd-renewal-strategic-list-item"
                    key={point}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicValue;
