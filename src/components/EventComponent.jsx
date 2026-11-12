import React from "react";
import SolutionHero from "./solutions/SolutionHero";

export default function EventComponent() {
  return (
    <SolutionHero
      eyebrow="Event Audience Acquisition"
      title={<>Maximize Your Event’s ROI <span>with the Right Audience</span></>}
    >
      <p>
        Want to ensure your next event delivers real results? The key is attracting attendees who are genuinely interested and ready to engage. At ProPlus Data, we specialize in audience acquisition solutions that connect you with the perfect attendees, driving better ROI and meaningful interactions.
      </p>
      <p>
        We don’t just guess who your audience should be. Using rich data insights, we identify and verify individuals who match your event’s goals, whether it’s by demographics, interests, or industry. This laser-focused approach ensures your invitations reach people eager to engage with your content.
      </p>
    </SolutionHero>
  );
}
