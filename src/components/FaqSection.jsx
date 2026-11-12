import React from "react";
import './FaqSection.css';
import SolutionStoryCarousel from "./SolutionStoryCarousel";

const FAQSection = () => {
  const outcomes = [
    {
      label: "Personalization",
      title: "Personalized Email Campaigns",
      description:
        "We craft tailored emails that deliver the right message to the right people, sparking interest and registrations.",
      visualLabel: "PERSONALIZED OUTREACH",
      visualItems: [{ label: "Audience fit", value: "Matched" }, { label: "Message relevance", value: "Aligned" }],
    },
    {
      label: "Optimization",
      title: "Smart Analytics & Optimization",
      description:
        "We track engagement in real-time, tweaking campaigns to maximize response rates and impact.",
      visualLabel: "LIVE OPTIMIZATION",
      visualItems: [{ label: "Campaign signals", value: "Tracked" }, { label: "Performance", value: "Improving" }],
    },
    {
      label: "Verification",
      title: "Voice-Confirmed Registrations",
      description:
        "We directly connect with potential attendees to confirm interest, ensuring high-quality sign-ups.",
      visualLabel: "REGISTRATION QUALITY",
      visualItems: [{ label: "Attendee interest", value: "Confirmed" }, { label: "Sign-up quality", value: "Verified" }],
    },
    {
      label: "Efficiency",
      title: "Optimized Marketing Expenditure",
      description:
        "Focusing resources on a well-defined audience reduces unnecessary costs and increases the efficiency of marketing efforts.",
      visualLabel: "CAMPAIGN EFFICIENCY",
      visualItems: [{ label: "Target audience", value: "Focused" }, { label: "Marketing spend", value: "Optimized" }],
    },
    {
      label: "Participation",
      title: "Enhanced Event Participation",
      description:
        "Attracting attendees with a genuine interest in the event's subject matter leads to more dynamic and productive interactions.",
      visualLabel: "EVENT ENGAGEMENT",
      visualItems: [{ label: "Attendee interest", value: "Relevant" }, { label: "Participation", value: "Growing" }],
    },
    {
      label: "Follow-through",
      title: "Improved Post-Event Opportunities",
      description:
        "Establishing connections with high-potential leads facilitates more effective follow-up and business development activities.",
      visualLabel: "POST-EVENT GROWTH",
      visualItems: [{ label: "Qualified leads", value: "Connected" }, { label: "Follow-up", value: "Ready" }],
    },
  ];

  return (
    <section className="ppd-event-results" aria-labelledby="ppd-event-results-title">
      <div className="container">
        <header className="ppd-event-results-header">
          <span className="ppd-event-results-eyebrow">EVENT MARKETING</span>
          <h2 className="ppd-event-results-title" id="ppd-event-results-title">
            Smarter Events. Better <span>ROI</span>
          </h2>
          <div className="ppd-event-results-rule" aria-hidden="true"></div>
        </header>

        <SolutionStoryCarousel
          items={outcomes}
          ariaLabel="Event marketing outcomes"
          paginationLabel="Choose an event marketing outcome"
        />
      </div>
    </section>
  );
};

export default FAQSection;
