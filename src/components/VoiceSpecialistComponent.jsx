import React from "react";
import JobOpening from "./JobOpening";

export default function VoiceSpecialistComponent() {
  const deliverables = [
    "Contact potential or existing customers to verify the attributes given to them.",
    "Answer questions about products or the company.",
    "Direct prospects to the sales team when needed.",
    "Enter and update customer information in the database.",
    "Take and process orders in an accurate manner.",
    "Handle grievances to preserve the company's reputation."
  ];

  const requirements = [
    "Proven experience as a customer representative or similar role.",
    "Good knowledge of relevant computer programs and communication medium.",
    "Good English proficiency.",
    "Excellent communication and interpersonal skills."
  ];

  return (
    <JobOpening
      position="Voice Specialist"
      deliverables={deliverables}
      requirements={requirements}
      sectionTitle="Deliverables"
      requirementsTitle="Requirements"
    />
  );
}
