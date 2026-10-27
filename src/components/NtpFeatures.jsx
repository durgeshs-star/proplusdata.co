import React from "react";

const solutionsData = [
  {
    image: "/assets/images/icon/cloud-data-collection.png",
    alt: "Cloud Data Collection",
    description: (
      <>
        Leveraging{" "}
        <a href="https://proplusdata.co/technographics">technographics</a> &{" "}
        <a href="https://proplusdata.co/intent-data">Intent data</a> , we analyze
        the past, present, and anticipated technology adoption of your
        prospective clients, enabling contextually relevant and strategically
        aligned engagement.
      </>
    ),
  },
  {
    image: "/assets/images/icon/accountable.png",
    alt: "Accountable Data",
    description:
      "Utilize a meticulously curated, data-driven selection of in-market accounts to engage exclusively with those actively planning new technology investments.",
  },
];

const NtpFeatures = () => {
  return (
    <section className="ppd-ntp-features">
      <div className="ppd-solution-shell">
        <header className="ppd-ntp-features-header">
          <h2 className="ppd-ntp-features-title">
            Key Features of
            <br />
            <span className="ppd-ntp-features-accent">
              Next Tech Purchase<sup>&reg;</sup>
            </span>
          </h2>
          <span className="ppd-ntp-features-rule" aria-hidden="true" />
        </header>
        <div className="ppd-ntp-features-grid">
          {solutionsData.map((feature) => (
            <article className="ppd-ntp-feature-card" key={feature.alt}>
              <div className="ppd-ntp-feature-icon">
                <img src={feature.image} alt={feature.alt} />
              </div>
              <div className="ppd-ntp-feature-content">
                <p className="ppd-ntp-feature-description">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NtpFeatures;
