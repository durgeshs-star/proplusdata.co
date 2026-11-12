import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarClock,
  ContactRound,
  Layers3,
  Radar,
  ScanSearch,
  TicketCheck,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./SolutionSection.css";

const solutions = [
  { number: "01", abbreviation: "TECHNO", title: "Technographics", description: "Map the technologies companies use and uncover changes across every layer of their tech stack.", icon: Layers3, to: "/technographics" },
  { number: "02", abbreviation: "RI", title: "Renewal Intelligence", description: "Track renewal and subscription timing to engage accounts while contract decisions are approaching.", icon: CalendarClock, to: "/renewal-intelligence" },
  { number: "03", abbreviation: "INT", title: "Intent", description: "Find in-market accounts through buying signals that reveal emerging technology needs.", icon: Radar, to: "/intent-data" },
  { number: "04", abbreviation: "BG", title: "Buying Groups", description: "Understand the stakeholders, behaviors, and preferences shaping B2B purchase decisions.", icon: UsersRound, to: "/buying-group" },
  { number: "05", abbreviation: "NTP", title: "Next Tech Purchase®", description: "Spot technology shifts early to discover alternatives and identify potential replacement opportunities.", icon: ScanSearch, to: "/next-tech-purchase" },
  { number: "06", abbreviation: "CD", title: "Contact Data", description: "Connect with the right decision-makers using accurate, actionable contact intelligence.", icon: ContactRound, to: "/contact-data" },
  { number: "07", abbreviation: "DG", title: "Demand Gen", description: "Generate and engage qualified demand with targeted audience and campaign intelligence.", icon: UserCheck, to: "/demand-gen" },
  { number: "08", abbreviation: "EAA", title: "Event Audience Acquisition", description: "Find and engage relevant audiences to increase the impact of your events.", icon: TicketCheck, to: "/event-audience-acquisition" },
];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075, delayChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 0.68, 0, 1] } },
};

const SolutionSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="ppd-daas-section"
      id="daas-solution"
      aria-labelledby="ppd-daas-title"
    >
      <div className="ppd-daas-container">
        <motion.header
          className="ppd-daas-header"
          variants={cardVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="ppd-daas-title" id="ppd-daas-title">
            8 Dimensions of <span>Intelligence.</span>
          </h2>
          <p className="ppd-daas-intro">A unified ecosystem of specialized data intelligence solutions.</p>
        </motion.header>

        <motion.div
          className="ppd-daas-grid"
          variants={sectionVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {solutions.map(({ number, abbreviation, title, description, icon: Icon, to }) => (
            <motion.article
              className="ppd-daas-card"
              key={number}
              variants={cardVariants}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              transition={{ type: "spring", stiffness: 320, damping: 25 }}
            >
              <Link className="ppd-daas-card-link" to={to} aria-label={`${title} solution`}>
                <div className="ppd-daas-card-top">
                  <span className="ppd-daas-card-number">{number}</span>
                </div>

                <div className="ppd-daas-card-identity">
                  <span className="ppd-daas-card-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span>
                  <span className="ppd-daas-card-abbreviation">{abbreviation}</span>
                </div>

                <div className="ppd-daas-card-bottom">
                  <div className="ppd-daas-card-copy">
                    <h3 className="ppd-daas-card-title">{title}</h3>
                    <p className="ppd-daas-card-description">{description}</p>
                  </div>
                  <span className="ppd-daas-card-arrow" aria-hidden="true"><ArrowUpRight size={19} strokeWidth={1.8} /></span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionSection;
