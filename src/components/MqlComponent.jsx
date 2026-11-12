import React from "react";
import SolutionHero from "./solutions/SolutionHero";

export default function MqlComponent() {
  return (
    <SolutionHero
      eyebrow="Demand Gen"
      title={<>Smarter Demand Generation <span>for Better Pipeline</span></>}
    >
      <p>
        Connect with decision-makers who have already shown interest in relevant solutions. Eliminate uncertainty from outbound by focusing only on prospects ready for meaningful engagement.
      </p>
      <p>
        A multi-touch, data-driven approach powered by behavioral insights drives a faster pipeline and stronger conversion. Every lead is voice-verified and validated to ensure accuracy, relevance, and real engagement readiness.
      </p>
    </SolutionHero>
  );
}
