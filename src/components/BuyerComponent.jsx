import React from "react";
import SolutionHero from "./solutions/SolutionHero";

export default function BuyerComponent() {
  return (
    <SolutionHero
      eyebrow="Buying Group"
      title={<>Identify Enterprise Buying Groups and <span>Decision-Makers</span></>}
    >
      <p>
        Buying Group is an essential guide for fostering meaningful engagement with high potential clients. By uncovering the motivations, challenges, and decision-making behaviors of your target accounts, these reports help you craft highly relevant strategies that resonate. This deeper understanding builds stronger connections, fosters long-term partnerships, and drives exceptional business outcomes.
      </p>
    </SolutionHero>
  );
}
