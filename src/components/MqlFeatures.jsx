import React from "react";
import SolutionStoryCarousel from "./SolutionStoryCarousel";

const processItems = [
  {
    id: 1,
    label: "01 / Acquire",
    title: "Targeted Lead Acquisition",
    desc: "Access a carefully curated pool of prospects actively interacting with pertinent content or offers, ensuring outreach efforts prioritize those most inclined to engage and convert.",
    visualLabel: "LEAD ACQUISITION",
    visualItems: [{ label: "Engaged prospects", value: "Matched" }, { label: "Conversion intent", value: "Prioritized" }],
  },
  {
    id: 2,
    label: "02 / Analyze",
    title: "Behavioral and Engagement Analytics",
    desc: "Track real buying signals and engagement patterns to identify in-market accounts and prioritize outreach that drives pipeline.",
    visualLabel: "BUYING SIGNALS",
    visualItems: [{ label: "Account activity", value: "Tracked" }, { label: "Intent patterns", value: "Active" }],
  },
  {
    id: 3,
    label: "03 / Engage",
    title: "Structured Multi-Touch Campaigns",
    desc: "Implement a proven three-touch engagement sequence designed to heighten responsiveness and cultivate intent, building trust and encouraging deeper consideration.",
    visualLabel: "CAMPAIGN SEQUENCE",
    visualItems: [{ label: "First touch", value: "Delivered" }, { label: "Follow-up", value: "Scheduled" }],
  },
  {
    id: 4,
    label: "04 / Refine",
    title: "A/B Testing for Ongoing Refinement",
    desc: "Evaluate subject lines, content structures, & calls to action in real time. Data-backed adjustments pinpoint the most impactful formats for sustained engagement.",
    visualLabel: "CAMPAIGN PERFORMANCE",
    visualItems: [{ label: "Message variants", value: "Compared" }, { label: "Top performer", value: "Selected" }],
  },
];

const MqlFeatures = () => {
  return (
    <section className="ppd-mql-features" aria-labelledby="ppd-mql-features-title">
      <div className="ppd-solution-shell">
        <header className="ppd-mql-features-header">
          <h2 className="ppd-mql-features-title" id="ppd-mql-features-title">
            Key <span>Features</span>
          </h2>
          <span className="ppd-mql-features-accent" aria-hidden="true" />
        </header>

        <SolutionStoryCarousel
          items={processItems.map((item) => ({
            label: item.label,
            title: item.title,
            description: item.desc,
            visualLabel: item.visualLabel,
            visualItems: item.visualItems,
          }))}
          ariaLabel="Demand generation features"
          paginationLabel="Choose a demand generation feature"
        />
      </div>
    </section>
  );
};

export default MqlFeatures;
