export const SITE_URL = "https://proplusdata.co";
export const SOCIAL_IMAGE = `${SITE_URL}/assets/images/proplus-data-social-card.png`;

export const pageMetadata = {
  "/": {
    title: "B2B Data Intelligence & GTM Solutions | ProPlus Data",
    description:
      "Accelerate B2B growth with ProPlus Data's technographics, intent, contact, and renewal intelligence. Identify high-value accounts and buying opportunities.",
  },
  "/about-us": {
    title: "About ProPlus Data | B2B Prospect Intelligence Company",
    description:
      "Discover how ProPlus Data helps global businesses identify high-potential accounts through technographics, intent signals, and predictive buying intelligence.",
  },
  "/technographics": {
    title: "B2B Technographic Data & Technology Intelligence | ProPlus",
    description:
      "Discover company technology stacks, track technology adoption, and identify competitive opportunities with ProPlus Data's B2B technographic intelligence.",
  },
  "/renewal-intelligence": {
    title: "SaaS Renewal Intelligence & Software Contract Data | ProPlus",
    description:
      "Identify upcoming software renewals, uncover competitor replacement opportunities, and engage high-potential B2B accounts with renewal intelligence.",
  },
  "/intent-data": {
    title: "B2B Intent Data & Predictive Buying Signals | ProPlus Data",
    description:
      "Identify high-intent accounts, understand technology buying signals, and prioritize prospects with ProPlus Data's B2B intent intelligence.",
  },
  "/next-tech-purchase": {
    title: "Next Tech Purchase® | Predictive Technology Buying Intelligence",
    description:
      "Identify companies planning technology investments, replacements, and upgrades with Next Tech Purchase® predictive buying intelligence.",
  },
  "/contact-data": {
    title: "B2B Contact Data & Verified Decision-Maker Intelligence | ProPlus",
    description:
      "Connect with relevant B2B decision-makers using accurate, verified contact intelligence designed to improve prospect targeting and sales outreach.",
  },
  "/buying-group": {
    title: "B2B Buying Group Intelligence & Buyer Identification | ProPlus",
    description:
      "Identify enterprise buying committees, decision-makers, and influential buyer personas to strengthen account-based marketing and B2B sales strategies.",
  },
  "/blogs": {
    title: "B2B Data Intelligence Insights & GTM Resources | ProPlus Data",
    description:
      "Explore expert insights on technographics, B2B intent data, renewal intelligence, buying signals, and data-driven go-to-market strategies.",
  },
  "/contact-us": {
    title: "Contact ProPlus Data | B2B Data Intelligence Solutions",
    description:
      "Connect with ProPlus Data to explore B2B technographics, intent intelligence, contact data, renewal insights, and tailored prospect intelligence solutions.",
  },
};

export const noIndexPaths = new Set([
  "/thankyou",
  "/thank-you-gtm",
  "/thank-you-gtm-intelligence",
  "/gtm-assessment-questions",
  "/gtm-assessment-results",
  "/flipbook-viewers",
  "/flipbook-page",
  "/playbook-icon",
  "/unlock-your-gtm-truth-in-a-minute",
]);

export const servicePages = {
  "/technographics": {
    name: "Technographics Data",
    description:
      "Company technology stack and adoption intelligence for B2B account research, segmentation, and sales prioritization.",
    serviceType: "B2B technographic data",
  },
  "/intent-data": {
    name: "B2B Intent Data",
    description:
      "B2B intent intelligence that helps identify accounts showing relevant buying signals and prioritize sales outreach.",
    serviceType: "B2B intent data",
  },
  "/renewal-intelligence": {
    name: "Renewal Intelligence",
    description:
      "Technology contract renewal intelligence that helps identify upcoming renewal windows and relevant account opportunities.",
    serviceType: "Technology renewal intelligence",
  },
  "/next-tech-purchase": {
    name: "Next Tech Purchase®",
    description:
      "Predictive technology purchase intelligence for identifying potential technology investments, replacements, and upgrades.",
    serviceType: "Technology purchase intelligence",
  },
  "/contact-data": {
    name: "B2B Contact Data",
    description:
      "B2B contact intelligence to help teams identify relevant business decision-makers for prospecting and account outreach.",
    serviceType: "B2B contact data",
  },
  "/buying-group": {
    name: "Buying Group Intelligence",
    description:
      "Buying group and buyer persona intelligence to help identify stakeholders involved in B2B purchasing decisions.",
    serviceType: "B2B buying group intelligence",
  },
  "/event-audience-acquisition": {
    name: "Event Audience Acquisition",
    description:
      "B2B event audience acquisition that connects event programs with relevant prospective attendees.",
    serviceType: "B2B event audience acquisition",
  },
};

export const knownPublicPaths = new Set([
  "/", "/about-us", "/contact-us", "/careers", "/blogs", "/conferences",
  "/use-cases", "/privacy-policy", "/press-releases", "/technographics",
  "/contact-data", "/intent-data", "/next-tech-purchase", "/renewal-intelligence",
  "/demand-gen", "/buying-group", "/event-audience-acquisition", "/voice-specialist",
  "/blog1details", "/blog2details", "/blog3details", "/blog4details", "/blog5details",
  "/web-tech-researcher", "/operations-manager", "/finance-executive", "/admin-executive", "/email-marketing-specialist", "/forrester-b2b-summit-2025",
  "/apac-cx-transformation-success", "/accelerating-asean-market-penetration", "/the-power-of-proplus-data-dashboard",
  "/proplus-data-cloud-success", "/executive-assistant", "/book-meeting", "/gartner-marketing-symposium-xpo-2025",
  "/aws-case-study", "/proplus-intelligence-data-suite", "/how-a-fortune-500-manufacturer-transformed-gtm-with-proplus",
  "/proplus-renewal-intelligence-boosts-cloud-enterprise-pipeline-3x", "/proplus-renewal-intelligence-boosts-cloud-enterprise",
  "/fortune-500-gtm-success-proplus", "/strategic-imperative-of-renewal-timings-mastering-the-100-day-advantage",
  "/renewal-are-the-arr-4-smart-ways-to-build-drive-growth-with-renewal-intelligence", "/how-renewal-intelligence-win-against-the-odd",
  "/turning-your-competitors-customers-into-your-growth-engine", "/how-technographics-drive-smarter-gtm-abm-and-competitive-advantage",
  "/why-technographics-is-the-secret-ingredient-to-precision-messaging", "/renewals-lp",
  "/how-enterprise-will-build-predictable-growth-in-an-uncertain-market", "/the-new-rules-of-b2b-audience-penetration-for-2026",
  "/will-expansion-revenue-overtake-net-new-acquisition-in-2026", "/gtm-intelligence", "/b2b-intent-data-vs-traditional-lead-scoring",
  "/renewal-intelligence-lp", "/forrester-playbook-116", "/connect-cmo-playbook", "/cmo-playbook-2026",
  "/cracking-the-code-apac-transformation-success", "/see-your-gtm-truth-in-60-sec", "/cmo-leadership-summit-2026",
  "/dmwf-europe-amsterdam-2025", "/new-york-winter-data-summit-2025",
  "/how-predictive-intelligence-is-transforming-b2b-demand-generation", "/when-does-a-revenue-opportunity-begin",
  "/2027-gtm-planning-guide", "/10-b2b-gtm-trends-2027", "/b2b-intelligence-platforms-reshaping-gtm",
  "/what-if-your-technographic-data-is-already-outdated", "/nexora-pricing",
]);
