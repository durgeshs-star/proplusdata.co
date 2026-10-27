import React from "react";
import JobOpening from "./JobOpening";

export default function WebTechComponent() {
  const deliverables = [
    "Conduct Contact discovery of provided accounts.",
    "Find cloud technology of provided organizations & their cloud adoption dates.",
    "Validate provided emails.",
    "Regularly refresh the fetched data to ensure its relevance and accuracy."
  ];

  const requirements = [
    "Experience in contact discovery.",
    "Knowledge about Technographic Data is a big plus.",
    "Should be good with Advance Excel (Vlookup, Pivot, Dedupe etc)."
  ];

  return (
    <JobOpening
      position="Web / Tech Researcher"
      deliverables={deliverables}
      requirements={requirements}
      sectionTitle="Deliverables"
      requirementsTitle="Requirements"
    />
  );
}
