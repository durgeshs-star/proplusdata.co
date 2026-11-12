import React from "react";
import SolutionHero from "./solutions/SolutionHero";

export default function RenewalComponent() {
  return (
    <SolutionHero
      eyebrow="Renewal Intelligence"
      title={<>Prioritize Key Accounts with Refreshed <span>Renewal Intelligence.</span></>}
    >
      <p>
        <b>Most Technology Buying Decisions Start Months Before the Renewal Date.</b> <br/>When enterprise software contracts approach renewal, buyers quietly reassess their vendors, pricing, and technology stack. For revenue teams that know the timing, these moments become high-probability opportunities.
      </p>
      <p>
        <b>ProPlus Data Renewal Intelligence reveals upcoming technology contract renewals across your target accounts.</b> Identify expiring software, SaaS, and enterprise technology contracts, track vendor relationships, and understand renewal timelines so your team can engage buyers while they are actively evaluating alternatives.
      </p>
      <p>
        Start conversations earlier, position your solution at the right moment, and turn renewal cycles into a predictable pipeline.
      </p>
    </SolutionHero>
  );
}
