import React from "react";
import SolutionStoryCarousel from "./SolutionStoryCarousel";

const differences = [
  {
    label: "01 / Verify",
    title: "Human Verified Data",
    description: "Every contact is verified by our team for accuracy and relevance.",
    detail: "A manual review process helps your team reach real decision-makers, not outdated or fictional contacts.",
    visualLabel: "CONTACT QUALITY",
    visualItems: [{ label: "Human review", value: "Verified" }, { label: "Decision maker", value: "Matched" }],
  },
  {
    label: "02 / Connect",
    title: "Verified Mobile Direct Dials",
    description: "Direct dial numbers verified and updated regularly.",
    detail: "Decision-maker phone numbers are refreshed quarterly to help improve connection rates.",
    visualLabel: "DIRECT DIALS",
    visualItems: [{ label: "Mobile numbers", value: "Current" }, { label: "Refresh cadence", value: "Quarterly" }],
  },
  {
    label: "03 / Target",
    title: "Accurate Job Titles",
    description: "Precise job titles and decision-maker roles for targeted outreach.",
    detail: "Granular job function data maps contacts to the right organizational roles.",
    visualLabel: "ROLE INTELLIGENCE",
    visualItems: [{ label: "Job function", value: "Mapped" }, { label: "Decision role", value: "Aligned" }],
  },
  {
    label: "04 / Enrich",
    title: "Complete Profiles",
    description: "Full contact profiles with all essential information.",
    detail: "Email, phone, company details, and technology context enrich every contact record.",
    visualLabel: "PROFILE COVERAGE",
    visualItems: [{ label: "Contact details", value: "Complete" }, { label: "Company context", value: "Enriched" }],
  },
];

export default function ContactDifference() {
  return (
    <section className="ppd-contact-difference" aria-labelledby="ppd-contact-diff-title">
      <div className="ppd-solution-shell">
        <header className="ppd-contact-diff-header">
          <h2 className="ppd-contact-diff-title" id="ppd-contact-diff-title">
            Details That Make The <span>Difference</span>
          </h2>
          <span className="ppd-contact-diff-accent" aria-hidden="true" />
        </header>
        <SolutionStoryCarousel
          items={differences}
          ariaLabel="Contact data details"
          paginationLabel="Choose a contact data detail"
        />
      </div>
    </section>
  );
}
