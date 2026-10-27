import React from "react";
import SolutionHero from "./solutions/SolutionHero";

export default function IntentComponent() {
  return (
    <SolutionHero
      eyebrow="Intent Data"
      title={<>Unlock the Power of <span>Intent with Precision</span></>}
      image="/assets/images/intent-data.gif"
      imageAlt="intent with precision"
    >
      <p>
        When prospects start researching solutions, they leave clues, digital footprints that show they’re ready to buy. ProPlus Data’s Intent Intelligence reads these signals and turns them into clear, actionable steps to help you make smarter business moves.
      </p>
    </SolutionHero>
  );
}
