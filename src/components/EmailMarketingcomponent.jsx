import React from "react";
import JobOpening from "./JobOpening";

export default function EmailMarketingComponent() {
  const deliverables = [
    "Plan, design, and execute lead generation-focused email marketing campaigns that drive engagement and conversions.",
    "Develop and maintain visually engaging and responsive email templates, ensuring consistency with brand guidelines.",
    "Develop and implement personalized email marketing campaigns that achieve high open and click-through rates.",
    "Build, manage, and segment targeted contact lists to support personalized campaign delivery.",
    "Monitor campaign performance; generate reports and analyse key metrics (CTR, open rates, conversions) to measure effectiveness and inform future strategy.",
    "Manage email platforms (e.g., HubSpot, Mailchimp, Benchmark) and ensure high deliverability, while maintaining compliance with CAN-SPAM, GDPR, and other relevant regulations.",
    "Run A/B testing on subject lines, CTAs, content, and timing to optimize email performance across segments.",
    "Collaborate with data and content teams to align email campaigns with overall Account-Based Marketing (ABM) strategies.",
    "Contribute to the broader content strategy by developing ideas for supporting blog posts, landing pages, or lead magnets tied to email campaigns.",
    "Apply SEO knowledge to enhance content relevance and discoverability."
  ];

  const requirements = [
    "Proficient with email marketing platforms like Mailchimp, HubSpot, benchmark, or similar tools.",
    "Knowledge of SEO principles and how they can complement content strategies.",
    "Skilled in email content creation and template design, HTML/CSS, mobile-responsive email templates.",
    "Strong project management skills and the ability to handle multiple campaigns simultaneously.",
    "Excellent verbal and written communication and interpersonal skills.",
    "Strong grasp of email KPIs, list segmentation, conversion tracking, and campaign analysis.",
    "Experience in ABM campaign management and optimization is must have.",
    "Comfortable working in a fast-paced, onsite environment, adapting and collaborating across departments."
  ];

  return (
    <JobOpening
      position="Email Marketing Specialist"
      deliverables={deliverables}
      requirements={requirements}
      sectionTitle="Key Responsibilities"
      requirementsTitle="Skillset Required"
    />
  );
}
