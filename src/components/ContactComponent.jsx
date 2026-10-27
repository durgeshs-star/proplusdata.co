import React from "react";
import SolutionHero from "./solutions/SolutionHero";

export default function ContactComponent() {
  return (
    <SolutionHero
      eyebrow="Contact Data"
      title={<>Empower Your Business Strategy with <span>Contact Data</span></>}
      image="assets/images/slider/contact-data.webp"
      imageAlt="contact insights"
    >
      <p>
        Behind every successful engagement is verified, high-quality contact data. At ProPlus Data, we don’t just serve up names and numbers; we deliver a game-changing trifecta of precision, relevance, and pinpoint accuracy. The holistic edge ensures you’re not just reaching out, but connecting with the right players, supercharging your odds of impactful interactions and sealed deals.
      </p>
      <p>
        As the business landscape twists and turns, ProPlus Data stands as your unshakable partner, arming you with real contact insights to dominate the field. Lets revolutionize your outreach, spark game-changing relationships, and propel your success to new heights!
      </p>
    </SolutionHero>
  );
}
