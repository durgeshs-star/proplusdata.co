import React from "react";
import "./SolutionIllustration.css";
import TechStackRenewal from "./TechStackRenewal";

const solutionScenes = {
  contact: {
    label: "Contact intelligence",
    metric: "Verified profiles",
    value: "24,680",
    signal: "92% match quality",
    rows: [
      ["Aarav Mehta", "VP, Information Technology", "Verified"],
      ["Maya Chen", "Chief Digital Officer", "Verified"],
      ["Sofia Patel", "Director, Security", "New match"],
    ],
    columns: ["Decision maker", "Role", "Profile status"],
  },
  intent: {
    label: "Intent intelligence",
    metric: "Account activity",
    value: "High intent",
    signal: "Buying window open",
    rows: [
      ["Cloud migration", "Research rising", "Today"],
      ["Data security", "3 topics viewed", "2 days ago"],
      ["Infrastructure", "Repeat activity", "This week"],
    ],
    columns: ["Topic", "Signal", "Last seen"],
  },
  purchase: {
    label: "Next tech purchase",
    metric: "Purchase propensity",
    value: "84 / 100",
    signal: "Likely in next 90 days",
    rows: [
      ["Cloud platform", "Evaluating", "High"],
      ["Security stack", "Replacement", "High"],
      ["Data systems", "Expansion", "Medium"],
    ],
    columns: ["Category", "Buying motion", "Fit"],
  },
  renewal: {
    label: "Renewal intelligence",
    metric: "Upcoming renewals",
    value: "18 accounts",
    signal: "Next milestone · 42 days",
    rows: [
      ["Northstar Health", "Cloud services", "42 days"],
      ["Meridian Group", "CRM platform", "7 months"],
      ["Alto Systems", "Security suite", "multiyear"],
    ],
    columns: ["Account", "Technology", "Renewal"],
  },
  event: {
    label: "Audience intelligence",
    metric: "Audience fit",
    value: "94%",
    signal: "ICP alignment",
    rows: [
      ["Technology leaders", "Enterprise", "Strong fit"],
      ["Revenue operations", "Mid-market", "Strong fit"],
      ["Security decision makers", "Enterprise", "Good fit"],
    ],
    columns: ["Audience segment", "Company size", "Match"],
  },
  buying: {
    label: "Buying group intelligence",
    metric: "Committee coverage",
    value: "6 of 8 roles",
    signal: "2 stakeholders to map",
    rows: [
      ["Maya Chen", "Economic buyer", "Engaged"],
      ["Aarav Mehta", "Technical evaluator", "Mapped"],
      ["Sofia Patel", "Security lead", "New contact"],
    ],
    columns: ["Stakeholder", "Buying role", "Status"],
  },
  demand: {
    label: "Demand generation",
    metric: "Qualified pipeline",
    value: "$2.4M",
    signal: "32 accounts in motion",
    rows: [
      ["Northstar Health", "Lead verified", "Ready"],
      ["Meridian Group", "Intent confirmed", "Ready"],
      ["Alto Systems", "In nurture", "Building"],
    ],
    columns: ["Account", "Latest signal", "Stage"],
  },
};

function getScene(category) {
  const normalized = category.toLowerCase();
  if (normalized.includes("contact")) return solutionScenes.contact;
  if (normalized.includes("intent")) return solutionScenes.intent;
  if (normalized.includes("purchase")) return solutionScenes.purchase;
  if (normalized.includes("renewal")) return solutionScenes.renewal;
  if (normalized.includes("event")) return solutionScenes.event;
  if (normalized.includes("buying")) return solutionScenes.buying;
  return solutionScenes.demand;
}

function ContactDataAnimation() {
  return (
    <div className="ppd-contact-visual">
      <div className="ppd-contact-visual__backdrop" />
      <div className="ppd-contact-visual__device ppd-contact-visual__device--tablet">
        <div className="ppd-contact-visual__screen-top"><i /> CONTACT INTELLIGENCE <b>•••</b></div>
        <div className="ppd-contact-visual__screen-title">Verified decision makers <span>92% match</span></div>
        <div className="ppd-contact-visual__search">⌕ <span>Search by role, company, or signal</span></div>
        <div className="ppd-contact-visual__mini-row"><i>AM</i><span><b>Aarav Mehta</b><small>VP, Information Technology</small></span><em>VERIFIED</em></div>
        <div className="ppd-contact-visual__mini-row"><i>MC</i><span><b>Maya Chen</b><small>Chief Digital Officer</small></span><em>VERIFIED</em></div>
        <div className="ppd-contact-visual__mini-row"><i>SP</i><span><b>Sofia Patel</b><small>Director, Security</small></span><em>MATCHED</em></div>
        <div className="ppd-contact-visual__screen-chart"><b>Profile completeness</b><span><i /><i /><i /><i /><i /><i /><i /><i /><i /></span></div>
      </div>
      <div className="ppd-contact-visual__device ppd-contact-visual__device--phone">
        <div className="ppd-contact-visual__phone-notch" />
        <div className="ppd-contact-visual__phone-head"><i>PD</i><span><b>ProPlus Data</b><small>Contact profile</small></span><strong>✓</strong></div>
        <div className="ppd-contact-visual__phone-avatar">AM</div>
        <b className="ppd-contact-visual__phone-name">Aarav Mehta</b>
        <span className="ppd-contact-visual__phone-role">VP, Information Technology</span>
        <div className="ppd-contact-visual__phone-detail"><i>✉</i> aarav.mehta@company.com</div>
        <div className="ppd-contact-visual__phone-detail"><i>⌕</i> Verified business profile</div>
        <div className="ppd-contact-visual__phone-action">View contact <b>↗</b></div>
      </div>
      <div className="ppd-contact-visual__floating ppd-contact-visual__floating--verified"><i>✓</i> Verified profile</div>
      <div className="ppd-contact-visual__floating ppd-contact-visual__floating--signal"><i>✦</i> Decision maker</div>
      <div className="ppd-contact-visual__ground" />
    </div>
  );
}

function DemandGenerationAnimation() {
  return (
    <div className="ppd-demand-board">
      <header className="ppd-demand-board__header">
        <span><i /> CAMPAIGN WORKSPACE</span><b>Q3 PIPELINE PROGRAM</b><em><i /> LIVE</em>
      </header>
      <div className="ppd-demand-board__flow">
        <section className="ppd-demand-board__audience">
          <div className="ppd-demand-board__label"><span>01</span> QUALIFIED AUDIENCE</div>
          <strong>32</strong><b>accounts in motion</b>
          <div className="ppd-demand-board__avatars"><i>AM</i><i>JT</i><i>SK</i><i>RL</i><b>+28</b></div>
          <div className="ppd-demand-board__fit"><i /> ICP + intent matched <b>92%</b></div>
        </section>
        <div className="ppd-demand-board__connector"><i /><i /><i /></div>
        <section className="ppd-demand-board__activation">
          <div className="ppd-demand-board__label"><span>02</span> COORDINATED REACH</div>
          <div className="ppd-demand-board__channel ppd-demand-board__channel--email"><i>✉</i><span><b>Email sequence</b><small>Personalized · Day 1</small></span><em>Sent</em></div>
          <div className="ppd-demand-board__channel ppd-demand-board__channel--social"><i>in</i><span><b>Social touchpoint</b><small>Decision maker · Day 3</small></span><em>Queued</em></div>
          <div className="ppd-demand-board__channel ppd-demand-board__channel--event"><i>↗</i><span><b>Sales follow-up</b><small>Intent triggered · Day 5</small></span><em>Next</em></div>
        </section>
        <div className="ppd-demand-board__connector"><i /><i /><i /></div>
        <section className="ppd-demand-board__outcome">
          <div className="ppd-demand-board__label"><span>03</span> PIPELINE IMPACT</div>
          <small>QUALIFIED PIPELINE</small><strong>$2.4M</strong>
          <div className="ppd-demand-board__chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="ppd-demand-board__outcome-foot"><span><i /> +28% engagement</span><b>↑</b></div>
        </section>
      </div>
      <footer className="ppd-demand-board__footer"><span><i /> Audience signals matched to the next best action</span><b>32 ACCOUNTS · 3 CHANNELS</b></footer>
    </div>
  );
}

function EventAudienceAnimation() {
  return (
    <div className="ppd-event-visual">
      <div className="ppd-event-visual__backdrop" />
      <div className="ppd-event-visual__rings"><i /><i /><i /><b>EVENT<br />AUDIENCE</b></div>
      <div className="ppd-event-visual__role ppd-event-visual__role--ceo"><i>AM</i><span><b>CEO</b><small>Leadership</small></span></div>
      <div className="ppd-event-visual__role ppd-event-visual__role--cfo"><i>JT</i><span><b>CFO</b><small>Finance</small></span></div>
      <div className="ppd-event-visual__role ppd-event-visual__role--coo"><i>SK</i><span><b>COO</b><small>Operations</small></span></div>
      <div className="ppd-event-visual__role ppd-event-visual__role--vp"><i>RL</i><span><b>VP</b><small>Revenue</small></span></div>
      <div className="ppd-event-visual__role ppd-event-visual__role--director"><i>MP</i><span><b>DIR</b><small>Marketing</small></span></div>
      <div className="ppd-event-visual__metric"><i>✓</i><span><b>94% audience fit</b><small>Verified event prospects</small></span><strong>↗</strong></div>
      <div className="ppd-event-visual__caption"><i /> Target the right people. Fill the room.</div>
    </div>
  );
}

function IntentSignalAnimation() {
  const signalGroups = [
    { label: "Cloud migration", kind: "cloud" },
    { label: "Data security", kind: "shield" },
    { label: "Infrastructure", kind: "stack" },
  ];
  const segments = [
    { label: "High", count: "12 accounts", tone: "high" },
    { label: "Medium", count: "28 accounts", tone: "building" },
    { label: "Low", count: "46 accounts", tone: "early" },
    { label: "Greenfield", count: "19 accounts", tone: "greenfield" },
  ];

  return (
    <div className="ppd-intent-flow" aria-hidden="true">
      <span className="ppd-intent-flow__orbit ppd-intent-flow__orbit--one" />
      <span className="ppd-intent-flow__orbit ppd-intent-flow__orbit--two" />
      <div className="ppd-intent-flow__source">
        <span className="ppd-intent-flow__source-icon">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M12 51V27l15 8V25l14 9V14h11v37H12Z" fill="currentColor" opacity=".13" />
            <path d="M12 51V27l15 8V25l14 9V14h11v37H12Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M45 14V8h8v6M20 43h5m5 0h5m5 0h5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M44 3v3m7-3v3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </span>
        <span className="ppd-intent-flow__source-copy"><b>Market signals</b><small>Research activity detected</small></span>
        <span className="ppd-intent-flow__live"><i /> LIVE</span>
      </div>

      <div className="ppd-intent-flow__connector ppd-intent-flow__connector--source"><i /><i /><i /></div>

      <div className="ppd-intent-flow__signals">
        <div className="ppd-intent-flow__section-label"><span>01</span> SIGNALS DETECTED</div>
        <div className="ppd-intent-flow__signal-list">
          {signalGroups.map((signal, index) => (
            <div className={`ppd-intent-flow__signal ppd-intent-flow__signal--${signal.kind}`} key={signal.label} style={{ "--signal-index": index }}>
              <span className="ppd-intent-flow__signal-icon">
                {signal.kind === "cloud" ? "☁" : signal.kind === "shield" ? "⌑" : "▤"}
              </span>
              <b>{signal.label}</b>
              <span className="ppd-intent-flow__signal-bars"><i /><i /><i /></span>
            </div>
          ))}
        </div>
      </div>

      <div className="ppd-intent-flow__connector ppd-intent-flow__connector--intent"><i /><i /><i /></div>

      <div className="ppd-intent-flow__intent">
        <div className="ppd-intent-flow__intent-score"><span>INTENT STRENGTH</span><b>86</b><small>Strong buying activity</small></div>
        <div className="ppd-intent-flow__intent-detail"><span className="ppd-intent-flow__section-label"><span>02</span> PRODUCT-LEVEL INTENT</span><strong>Cloud security platform</strong><div><i /><i /><i /><i /><i /><i /><i /><i /></div><small>Research rising across 3 topics</small></div>
      </div>

      <div className="ppd-intent-flow__connector ppd-intent-flow__connector--segment"><i /><i /><i /></div>

      <div className="ppd-intent-flow__segments">
        <div className="ppd-intent-flow__section-label"><span>03</span> ACCOUNTS TO PRIORITIZE</div>
        <div className="ppd-intent-flow__segment-list">
          {segments.map((segment) => (
            <div className={`ppd-intent-flow__segment ppd-intent-flow__segment--${segment.tone}`} key={segment.label}>
              <i /><span><b>{segment.label}</b><small>{segment.count}</small></span>
            </div>
          ))}
        </div>
      </div>
      <div className="ppd-intent-flow__caption"><span><i /> Signals connected to real accounts</span><b>Intent → action</b></div>
    </div>
  );
}

function BuyingGroupAnimation() {
  const stakeholders = [
    { initials: "EW", name: "Ethan Walker", title: "Chief Executive Officer", role: "Decision maker", level: "decision" },
    { initials: "DB", name: "Daniel Brooks", title: "Executive Director, Marketing", role: "Decision maker", level: "decision" },
    { initials: "AC", name: "Amelia Carter", title: "Executive Director, IT", role: "Decision maker", level: "decision" },
    { initials: "RM", name: "Ryan Mitchell", title: "Head of Digital Marketing", role: "Influencer", level: "influencer" },
    { initials: "CB", name: "Chloe Bennett", title: "Head of Marketing", role: "Influencer", level: "influencer" },
    { initials: "JH", name: "Jacob Hayes", title: "Head of Cloud Platforms", role: "Influencer", level: "influencer" },
    { initials: "EP", name: "Emily Parker", title: "Head of IT", role: "Influencer", level: "influencer" },
    { initials: "HP", name: "Henry Parker", title: "Sr. Technical Manager", role: "Practitioner", level: "practitioner" },
    { initials: "NR", name: "Natalie Reed", title: "Sr. Technical Manager", role: "Practitioner", level: "practitioner" },
  ];
  const people = stakeholders.slice(0, 3);

  const renderStakeholder = (person, index) => (
    <div className={`ppd-buying-map__person ppd-buying-map__person--${person.level}`} key={person.name} style={{ "--person-index": index }}>
      <span className="ppd-buying-map__avatar">{person.initials}</span>
      <span className="ppd-buying-map__person-copy">
        <span className="ppd-buying-map__role"><i />{person.role}</span>
        <b>{person.name}</b>
        <small>{person.title}</small>
      </span>
      <span className="ppd-buying-map__matched" title="Verified profile">✓</span>
    </div>
  );

  return (
    <div className="ppd-buying-map" aria-hidden="true">
      <div className="ppd-buying-map__texture" />
      <div className="ppd-buying-map__network">
        <div className="ppd-buying-map__network-heading"><span><i /> BUYING GROUP</span></div>
        <div className="ppd-buying-map__tree">
          <div className="ppd-buying-map__level ppd-buying-map__level--top">{renderStakeholder(stakeholders[0], 0)}</div>
          <div className="ppd-buying-map__branch ppd-buying-map__branch--two"><i /><i /><i /></div>
          <div className="ppd-buying-map__level ppd-buying-map__level--decision">
            {renderStakeholder(stakeholders[1], 1)}{renderStakeholder(stakeholders[2], 2)}
          </div>
          <div className="ppd-buying-map__branch ppd-buying-map__branch--four"><i /><i /><i /><i /><i /></div>
          <div className="ppd-buying-map__level ppd-buying-map__level--influencers">
            {stakeholders.slice(3, 7).map((person, index) => renderStakeholder(person, index + 3))}
          </div>
          <div className="ppd-buying-map__branch ppd-buying-map__branch--practitioners"><i /><i /><i /></div>
          <div className="ppd-buying-map__level ppd-buying-map__level--practitioners">
            {stakeholders.slice(7).map((person, index) => renderStakeholder(person, index + 7))}
          </div>
        </div>
      </div>

      <aside className="ppd-buying-map__details">
        <section className="ppd-buying-map__organization">
          <div className="ppd-buying-map__panel-heading"><span>ORGANIZATION</span><b>ACCOUNT PROFILE</b></div>
          <div className="ppd-buying-map__company"><strong>G</strong><span><b>Global Manufacturing Co.</b><small>Enterprise account</small></span><i>in</i></div>
          <div className="ppd-buying-map__company-stats">
            <div><i>♙</i><span><small>EMPLOYEES</small><b>10,000+</b></span></div>
            <div><i>⌖</i><span><small>COUNTRY</small><b>United States</b></span></div>
            <div><i>↗</i><span><small>REVENUE</small><b>$200M+</b></span></div>
            <div><i>▦</i><span><small>INDUSTRY</small><b>Manufacturing</b></span></div>
            <div className="ppd-buying-map__domain"><i>↗</i><span><small>DOMAIN</small><b>globalmanufacturing.co</b></span></div>
          </div>
        </section>

        <section className="ppd-buying-map__team">
          <div className="ppd-buying-map__panel-heading"><span>KEY CONTACTS</span><b>3 OF 8 MAPPED</b></div>
          {people.map((person, index) => (
            <div className="ppd-buying-map__contact" key={person.name}>
              <span className={`ppd-buying-map__contact-avatar ppd-buying-map__contact-avatar--${index + 1}`}>{person.initials}</span>
              <span><b>{person.name}</b><small>{person.title}</small></span>
              <i>{index === 0 ? "✓" : "↗"}</i>
            </div>
          ))}
          <div className="ppd-buying-map__team-footer"><i /> Verified contact details <b>View group</b></div>
        </section>
      </aside>
      <span className="ppd-buying-map__glow" />
    </div>
  );
}

function NextPurchaseAnimation() {
  const inputs = [
    { title: "Current tech stack", detail: "What they use today", icon: "▤", tone: "stack" },
    { title: "Adoption history", detail: "What they have adopted", icon: "▣", tone: "history" },
    { title: "Technology shifts", detail: "What is changing", icon: "◷", tone: "shifts" },
    { title: "Buying intent", detail: "What they are researching", icon: "⌕", tone: "intent" },
    { title: "Adoption patterns", detail: "What they may buy next", icon: "▥", tone: "patterns" },
  ];
  const predictions = [
    { mark: "☁", company: "Microsoft", technology: "Azure", propensity: "71.37%", tone: "azure" },
    { mark: "mi", company: "Xiaomi", technology: "Cloud services", propensity: "74.12%", tone: "xiaomi" },
    { mark: "S", company: "Samsung", technology: "AI infrastructure", propensity: "74.32%", tone: "samsung" },
    { mark: "◉", company: "MongoDB", technology: "Database platform", propensity: "79.53%", tone: "mongo" },
    { mark: "✳", company: "OpenAI", technology: "ChatGPT Enterprise", propensity: "72.42%", tone: "openai" },
  ];

  return (
    <div className="ppd-ntp-flow" aria-hidden="true">
      <div className="ppd-ntp-flow__topline">
        <span><i /> NEXT TECH PURCHASE MODEL</span>
        <b>ACCOUNT PREDICTION <i>LIVE</i></b>
      </div>
      <div className="ppd-ntp-flow__body">
        <section className="ppd-ntp-flow__inputs">
          <div className="ppd-ntp-flow__column-heading"><span>KEY INPUTS</span><b>05 SIGNALS</b></div>
          <div className="ppd-ntp-flow__input-list">
            {inputs.map((input, index) => (
              <div className={`ppd-ntp-flow__input ppd-ntp-flow__input--${input.tone}`} key={input.title} style={{ "--ntp-index": index }}>
                <span className="ppd-ntp-flow__input-icon">{input.icon}</span>
                <span><b>{input.title}</b><small>{input.detail}</small></span>
                <i className="ppd-ntp-flow__input-check">✓</i>
              </div>
            ))}
          </div>
        </section>

        <div className="ppd-ntp-flow__connector ppd-ntp-flow__connector--model" aria-hidden="true"><i>›</i><span /></div>

        <section className="ppd-ntp-flow__model">
          <div className="ppd-ntp-flow__model-orbit ppd-ntp-flow__model-orbit--outer" />
          <div className="ppd-ntp-flow__model-orbit ppd-ntp-flow__model-orbit--inner" />
          <div className="ppd-ntp-flow__model-core">
            <span className="ppd-ntp-flow__ai-icon"><i /><i /><i /><i /><i /><i /><i /><i /><b>AI</b></span>
            <strong>ProPlus Data</strong>
            <span>AI MODELS</span>
          </div>
          <p>Signals combined to predict the next likely technology investment.</p>
          <div className="ppd-ntp-flow__model-status"><i /> ANALYZING ACCOUNT SIGNALS</div>
        </section>

        <div className="ppd-ntp-flow__connector ppd-ntp-flow__connector--output" aria-hidden="true"><i>›</i><span /></div>

        <section className="ppd-ntp-flow__output">
          <div className="ppd-ntp-flow__column-heading"><span>EXAMPLE OUTPUT</span><b>5 PREDICTIONS</b></div>
          <div className="ppd-ntp-flow__table">
            <div className="ppd-ntp-flow__table-head"><span>COMPANY</span><span>TECHNOLOGY</span><span>PREDICTION</span><span>PROPENSITY</span></div>
            {predictions.map((prediction, index) => (
              <div className="ppd-ntp-flow__row" key={prediction.company} style={{ "--ntp-index": index, "--ntp-score": `${Number.parseFloat(prediction.propensity)}%` }}>
                <span className="ppd-ntp-flow__company"><i className={`ppd-ntp-flow__company-mark ppd-ntp-flow__company-mark--${prediction.tone}`}>{prediction.mark}</i><b>{prediction.company}</b></span>
                <span className="ppd-ntp-flow__technology">{prediction.technology}</span>
                <span className="ppd-ntp-flow__prediction">High</span>
                <b className="ppd-ntp-flow__propensity">{prediction.propensity}</b>
              </div>
            ))}
          </div>
          <div className="ppd-ntp-flow__output-foot"><span><i /> Purchase likelihood by account</span><b>90-day outlook</b></div>
        </section>
      </div>
      <div className="ppd-ntp-flow__footer"><span><i /> Multiple signals, one actionable forecast</span><b>NEXT TECH PURCHASE<sup>®</sup></b></div>
    </div>
  );
}

export default function SolutionIllustration({ category, compact = false }) {
  const scene = getScene(category);
  const isIntentHero = category.toLowerCase().includes("intent") && !compact;
  const isContactHero = category.toLowerCase().includes("contact") && !compact;
  const isDemandHero = category.toLowerCase().includes("demand") && !compact;
  const isEventHero = category.toLowerCase().includes("event") && !compact;
  const isBuyingHero = category.toLowerCase().includes("buying") && !compact;
  const isPurchaseHero = category.toLowerCase().includes("purchase") && !compact;

  return (
    <div
      className={`ppd-solution-illustration${compact ? " ppd-solution-illustration--compact" : ""}${isIntentHero ? " ppd-solution-illustration--intent" : ""}${isContactHero ? " ppd-solution-illustration--contact" : ""}${isDemandHero ? " ppd-solution-illustration--demand" : ""}${isEventHero ? " ppd-solution-illustration--event" : ""}${isBuyingHero ? " ppd-solution-illustration--buying" : ""}${isPurchaseHero ? " ppd-solution-illustration--purchase" : ""}`}
      aria-label={isIntentHero ? "Animated intent signal flow from market research to prioritized accounts" : isContactHero ? "Verified contact profiles displayed across a tablet and mobile contact card" : isDemandHero ? "Demand generation campaign flow from qualified audience to coordinated outreach and pipeline" : isEventHero ? "Event audience acquisition target showing executive audience roles matched to the event" : isBuyingHero ? "Buying group map showing stakeholder roles, organization profile, and key contacts" : isPurchaseHero ? "Animated purchase prediction flow from five account signals through AI models to technology propensity scores" : `${scene.label} product preview`}
      role="img"
    >
      {isContactHero ? <ContactDataAnimation /> : isDemandHero ? <DemandGenerationAnimation /> : isEventHero ? <EventAudienceAnimation /> : isIntentHero ? <IntentSignalAnimation /> : isBuyingHero ? <BuyingGroupAnimation /> : isPurchaseHero ? <NextPurchaseAnimation /> : <>
      <div className="ppd-solution-illustration__window">
        <div className="ppd-solution-illustration__body">
          <aside className="ppd-solution-illustration__rail" aria-hidden="true">
            <i className="is-current" />
            <i />
            <i />
            <i />
          </aside>

          <div className="ppd-solution-illustration__workspace">
            <div className="ppd-solution-illustration__heading">
              <div>
                <span>ACCOUNT WORKSPACE</span>
                <strong>{scene.label}</strong>
              </div>
              <span className="ppd-solution-illustration__period">Last 90 days⌄</span>
            </div>

            <div className="ppd-solution-illustration__overview">
              <div className="ppd-solution-illustration__metric">
                <span>{scene.metric}</span>
                <strong>{scene.value}</strong>
                <small><i /> {scene.signal}</small>
              </div>
              {category.toLowerCase().includes("renewal") ? (
                <TechStackRenewal />
              ) : (
                <div className="ppd-solution-illustration__chart" aria-hidden="true">
                  <div className="ppd-solution-illustration__chart-labels"><span>Account activity</span><b>+28%</b></div>
                  <div className="ppd-solution-illustration__bars">
                    {[34, 48, 41, 62, 55, 74, 65, 92, 72, 100, 84, 108].map((height, index) => (
                      <i key={index} style={{ "--bar-height": `${height}px`, "--bar-index": index }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="ppd-solution-illustration__table">
              <div className="ppd-solution-illustration__table-head">
                {scene.columns.map((column) => <span key={column}>{column}</span>)}
              </div>
              {scene.rows.map((row, index) => (
                <div className="ppd-solution-illustration__row" key={row[0]}>
                  <strong><i className={`ppd-solution-illustration__avatar ppd-solution-illustration__avatar--${index + 1}`} />{row[0]}</strong>
                  <span>{row[1]}</span>
                  <span className={index === 0 ? "is-positive" : ""}>{row[2]}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="ppd-solution-illustration__insight">
            <span className="ppd-solution-illustration__insight-label">FIT SCORE</span>
            <strong>86</strong>
            <span>Strong account fit</span>
            <div className="ppd-solution-illustration__score" aria-hidden="true"><i /></div>
            <p>Signals aligned to your ideal customer profile.</p>
            <div className="ppd-solution-illustration__tags"><i /> Recent activity <i /> Verified data</div>
          </aside>
        </div>

        <div className="ppd-solution-illustration__footer">
          <span><i /> Updated moments ago</span>
          <span>Account overview&nbsp; · &nbsp;Signal history</span>
        </div>
      </div>
      <span className="ppd-solution-illustration__halo" aria-hidden="true" />
      </>}
    </div>
  );
}
