import React from "react";

const benefits = [
  {
    number: "01",
    title: "Stay ahead of the curve",
    description:
      "Position offerings ahead of competitors by anticipating and responding to emerging technology adoption trends.",
    image: "assets/images/shape/market-engagement.svg",
    imageAlt: "stay ahead of the curve",
    frameAlt: "frame1",
  },
  {
    number: "02",
    title: "Cost Efficiency",
    description: "Focus efforts on high-propensity accounts to maximize ROI.",
    image: "assets/images/shape/cost-efficiency.svg",
    imageAlt: "cost-efficiency",
    frameAlt: "frame2",
  },
  {
    number: "03",
    title: "Data-Backed Decision Making",
    description:
      "Equip teams with verified insights to guide strategic planning, reduce guesswork, and support data-driven outreach.",
    image: "assets/images/shape/data backed.svg",
    imageAlt: "data backed",
    frameAlt: "frame3",
  },
];

export default function NtpBenefits() {
  return (
    <section className="ppd-ntp-benefits">
      <div className="ppd-solution-shell">
        <header className="ppd-ntp-benefits-header">
          <h2 className="ppd-ntp-benefits-title">
            Benefits of
            <br />
            <span>Next Tech Purchase<sup>&reg;</sup></span>
          </h2>
          <span className="ppd-ntp-benefits-rule" aria-hidden="true" />
        </header>
        <div className="ppd-ntp-benefits-grid">
          {benefits.map((benefit) => (
            <article className="ppd-ntp-benefit-card" key={benefit.number}>
              <span className="ppd-ntp-benefit-number">{benefit.number}</span>
              <div className="ppd-ntp-benefit-icon">
                <img src={benefit.image} alt={benefit.imageAlt} />
                <img
                  className="ppd-ntp-benefit-frame"
                  src="assets/images/shape/Frame 15.png"
                  alt={benefit.frameAlt}
                />
              </div>
              <h3 className="ppd-ntp-benefit-title">
                <a href="#">{benefit.title}</a>
              </h3>
              <p className="ppd-ntp-benefit-description">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
