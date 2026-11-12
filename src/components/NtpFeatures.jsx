import React from "react";
import SolutionStoryCarousel from "./SolutionStoryCarousel";

const solutionsData = [
  {
    label: "01",
    title: "Technology adoption context",
    visualLabel: "TECHNOLOGY CONTEXT",
    visualItems: [{ label: "Adoption history", value: "Mapped" }, { label: "Future needs", value: "Forecast" }],
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
    label: "02",
    title: "In-market account selection",
    visualLabel: "IN-MARKET ACCOUNTS",
    visualItems: [{ label: "Investment plans", value: "Identified" }, { label: "Account intent", value: "Matched" }],
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
        <SolutionStoryCarousel
          items={solutionsData.map((feature) => ({
            label: `${feature.label} / Purchase signal`,
            title: feature.title,
            description: feature.description,
            visualLabel: feature.visualLabel,
            visualItems: feature.visualItems,
          }))}
          ariaLabel="Next Tech Purchase features"
          paginationLabel="Choose a Next Tech Purchase feature"
        />
      </div>
    </section>
  );
};

export default NtpFeatures;
