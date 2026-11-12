import React from "react";
import SolutionHero from "./solutions/SolutionHero";

export default function NtpComponent() {
  return (
    <SolutionHero
      eyebrow="Next Tech Purchase"
      title={<>Identify Replacement Opportunity with <span>Next Tech Purchase<sup>&reg;</sup></span></>}
    >
      <p>
        <strong>Imagine, 87% of your audience isn’t ready to buy today; but when <br/> they are, will your solution be the first they think of?</strong>
      </p>
      <p>
        Timing is a decisive advantage. When organizations begin exploring new technology investments, early visibility into that intent creates a powerful opportunity. <br/><b>Next Tech Purchase<sup>&reg;</sup></b> enables access to high-potential accounts actively considering software, hardware, cloud, AI tools, and digital infrastructure upgrades or replacements.
      </p>
      <p>
        Leveraging refreshed (45-60 days) signals and razor-sharp technographic insights, Next Tech Purchase<sup>&reg;</sup> puts you in front of high-potential accounts before your competitors even know they’re in play.
      </p>
    </SolutionHero>
  );
}
