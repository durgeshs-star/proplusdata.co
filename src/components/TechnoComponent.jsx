import React from "react";
import SolutionHero from "./solutions/SolutionHero";

export default function TechnoComponent() {
  return (
    <SolutionHero
      eyebrow="Technographic Data"
      title={<>Revolutionize Outreach with <span>Technographics!</span></>}
      image="/assets/images/technographics-data.gif"
      imageAlt=" Technographics or Technographic Data"
    >
      <p>
        <strong>Want to know exactly which technology your ideal customers has adopted or when they’re ready to switch?</strong>
      </p>
      <p>
        At <a href="https://proplusdata.co/"> ProPlus Data</a>, we help you uncover deep insights into your prospects’ tech stacks, so you can target smarter, sell faster, and close better deals.
      </p>
      <p>
        From cloud platforms and cybersecurity tools to CRM systems and firewalls, Technographics or Technographic Data shows you who’s using what and when they might need you next!
      </p>
    </SolutionHero>
  );
}
