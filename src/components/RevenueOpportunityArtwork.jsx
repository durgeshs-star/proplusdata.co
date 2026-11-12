import React, { useId } from "react";

const scenes = {
  timeline: {
    label: "FROM CHANGE TO OPPORTUNITY",
    description: "Account changes become visible, are recognized, and eventually enter pipeline.",
  },
  gap: {
    label: "THE OPPORTUNITY RECOGNITION GAP",
    description: "A timeline showing the time between account change and GTM recognition.",
  },
  framework: {
    label: "A MORE COMPLETE PRIORITIZATION LENS",
    description: "Who, why, and when questions combine to put account timing in context.",
  },
  market: {
    label: "PLAN FOR THE MARKET YOU ARE ENTERING",
    description: "Historical performance and current account changes inform market planning.",
  },
  planning: {
    label: "A PLAN THAT CAN ADAPT",
    description: "A planning loop that reviews market changes, validates assumptions, and adjusts priorities.",
  },
  metrics: {
    label: "MEASURE CHANGE, NOT ONLY EXECUTION",
    description: "Revenue performance metrics alongside measures of account and market change.",
  },
  intelligence: {
    label: "CONNECT THE SIGNALS AROUND AN ACCOUNT",
    description: "Contact, intent, technology, buying group, renewal, and purchase intelligence connect around an account.",
  },
  layers: {
    label: "FROM DISCONNECTED DATA TO OPPORTUNITY CONTEXT",
    description: "Contact, technology, intent, and timing signals combine to create a clearer view of an opportunity.",
  },
  techTimeline: {
    label: "A TECHNOLOGY STACK IS A TIMELINE",
    description: "A timeline showing technology adoption, detection, evolution, and replacement in an account.",
  },
  snapshot: {
    label: "A SNAPSHOT SHOWS PRESENCE. A TIMELINE ADDS CONTEXT.",
    description: "A static technology profile compared with an account technology timeline and recent detection.",
  },
  changes: {
    label: "TECHNOLOGY CHANGE CAN REVEAL NEW CONTEXT",
    description: "Technology adoption, replacement, and removal create changes that GTM teams can investigate.",
  },
};

function TimelineScene({ accent, orange, ink }) {
  return (
    <>
      <path d="M92 181H735" stroke="#d7e2eb" strokeWidth="4" strokeLinecap="round" />
      <path className="ppd-revenue-art__path" d="M102 181C214 181 202 118 316 118s105 63 213 63 101-64 203-64" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
      {[{ x: 112, y: 181 }, { x: 316, y: 118 }, { x: 529, y: 181 }, { x: 732, y: 117 }].map((point, index) => (
        <g key={point.x} className="ppd-revenue-art__node" style={{ "--node-delay": `${index * 0.35}s` }}>
          <circle cx={point.x} cy={point.y} r="23" fill={index === 3 ? orange : accent} opacity=".13" />
          <circle cx={point.x} cy={point.y} r="9" fill={index === 3 ? orange : accent} />
          {index === 0 && <path d="M108 181h8m-4-4v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />}
          {index === 3 && <path d="m728 117 3 3 6-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
        </g>
      ))}
      <text x="112" y="228" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">ACCOUNT CHANGE</text>
      <text x="316" y="80" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">SIGNAL DETECTED</text>
      <text x="529" y="228" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">TEAM RECOGNIZES</text>
      <text x="732" y="80" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">PIPELINE</text>
      <rect x="239" y="258" width="370" height="42" rx="21" fill="#fff" stroke="#e0e8ee" />
      <circle cx="264" cy="279" r="5" fill={orange} />
      <text x="424" y="284" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">THE OPPORTUNITY FORMED BEFORE IT WAS LOGGED</text>
    </>
  );
}

function GapScene({ accent, orange, ink }) {
  return (
    <>
      <rect x="79" y="83" width="172" height="110" rx="16" fill="#fff" stroke="#dfe8ef" strokeWidth="2" />
      <circle cx="117" cy="121" r="15" fill={accent} opacity=".18" />
      <circle cx="117" cy="121" r="6" fill={accent} />
      <rect x="145" y="112" width="77" height="8" rx="4" fill="#aebed0" />
      <rect x="105" y="151" width="119" height="7" rx="3.5" fill="#e0e8ef" />
      <text x="165" y="222" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">MEANINGFUL CHANGE</text>
      <path d="M257 137h248" stroke="#a8bacb" strokeWidth="3" strokeDasharray="7 9" />
      <circle cx="257" cy="137" r="7" fill={accent} />
      <circle cx="505" cy="137" r="7" fill={orange} />
      <path d="M257 102v-15M505 102v-15M257 95h248" fill="none" stroke="#c6d3df" strokeWidth="2" />
      <rect x="329" y="75" width="106" height="37" rx="18.5" fill="#fff4e2" />
      <text x="382" y="99" textAnchor="middle" fill={ink} className="ppd-revenue-art__gap-label">RECOGNITION GAP</text>
      <rect x="514" y="83" width="172" height="110" rx="16" fill="#fff" stroke="#dfe8ef" strokeWidth="2" />
      <circle cx="552" cy="121" r="15" fill={orange} opacity=".18" />
      <path d="m546 121 4 4 8-9" fill="none" stroke={orange} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="580" y="112" width="77" height="8" rx="4" fill="#aebed0" />
      <rect x="540" y="151" width="119" height="7" rx="3.5" fill="#e0e8ef" />
      <text x="600" y="222" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">GTM TEAM RECOGNIZES IT</text>
      <circle className="ppd-revenue-art__spark" cx="381" cy="167" r="5" fill={accent} />
      <circle className="ppd-revenue-art__spark ppd-revenue-art__spark--delay" cx="422" cy="167" r="5" fill={orange} />
    </>
  );
}

function FrameworkScene({ accent, orange, ink }) {
  const cards = [
    { x: 67, key: "WHO", title: "Right account", color: accent, letter: "01" },
    { x: 314, key: "WHY", title: "Relevant reason", color: orange, letter: "02" },
    { x: 561, key: "WHEN", title: "Right moment", color: "#7868ca", letter: "03" },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <g key={card.key} className="ppd-revenue-art__framework-card" style={{ "--node-delay": `${index * 0.2}s` }}>
          <rect x={card.x} y="73" width="214" height="155" rx="18" fill="#fff" stroke="#e1e9ef" strokeWidth="2" />
          <rect x={card.x + 19} y="94" width="42" height="28" rx="14" fill={card.color} opacity=".14" />
          <text x={card.x + 40} y="113" textAnchor="middle" fill={ink} className="ppd-revenue-art__card-number">{card.letter}</text>
          <text x={card.x + 19} y="163" fill={ink} className="ppd-revenue-art__card-key">{card.key}</text>
          <text x={card.x + 19} y="192" fill={ink} className="ppd-revenue-art__card-title">{card.title}</text>
          {index < 2 && <circle cx={card.x + 239} cy="151" r="4" fill={accent} opacity=".65" />}
        </g>
      ))}
      <path d="M281 151h28M528 151h28" stroke={accent} strokeWidth="2" strokeDasharray="3 5" />
    </>
  );
}

function MarketScene({ accent, orange, ink }) {
  const signals = [
    { x: 152, y: 121, label: "TECHNOLOGY" },
    { x: 410, y: 92, label: "BUYING ACTIVITY" },
    { x: 664, y: 125, label: "MARKET SHIFT" },
  ];

  return (
    <>
      <path d="M142 158c106-83 174-61 268-24s158 57 267-9" fill="none" stroke="#d7e2eb" strokeWidth="3" />
      <path d="M142 158c106-83 174-61 268-24s158 57 267-9" fill="none" stroke={accent} strokeWidth="3" strokeDasharray="5 8" />
      {signals.map((signal, index) => (
        <g key={signal.label}>
          <circle className="ppd-revenue-art__node" style={{ "--node-delay": `${index * .3}s` }} cx={signal.x} cy={signal.y} r="37" fill={index === 1 ? orange : accent} opacity=".13" />
          <circle cx={signal.x} cy={signal.y} r="18" fill="#fff" stroke={index === 1 ? orange : accent} strokeWidth="3" />
          {index === 0 && <path d="M143 116v10m9-10v10m-18 3h27m-20 1v11h14v-11" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
          {index === 1 && <path d="M402 93h16m-8-8v16m-12 9h24" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />}
          {index === 2 && <path d="m655 126 7 7 13-16" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
          <text x={signal.x} y="208" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">{signal.label}</text>
        </g>
      ))}
      <rect x="268" y="249" width="285" height="42" rx="21" fill="#fff" stroke="#e0e8ee" />
      <text x="410" y="275" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">HISTORY + CURRENT CONTEXT</text>
    </>
  );
}

function PlanningScene({ accent, orange, ink }) {
  const steps = [
    { x: 86, label: "PLAN", color: accent },
    { x: 250, label: "MONITOR", color: orange },
    { x: 414, label: "VALIDATE", color: accent },
    { x: 578, label: "ADJUST", color: orange },
  ];
  return (
    <>
      <path d="M135 139h492" stroke="#d6e1eb" strokeWidth="4" strokeLinecap="round" />
      <path d="M135 139h492" stroke={accent} strokeWidth="3" strokeDasharray="5 9" />
      {steps.map((step, index) => (
        <g key={step.label} className="ppd-revenue-art__framework-card" style={{ "--node-delay": `${index * .2}s` }}>
          <circle cx={step.x + 54} cy="139" r="31" fill={step.color} opacity=".15" />
          <circle cx={step.x + 54} cy="139" r="17" fill="#fff" stroke={step.color} strokeWidth="3" />
          {index === 0 && <path d={`M${step.x + 47} 133h14v12h-14zM${step.x + 50} 129v8m8-8v8`} fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
          {index === 1 && <path d={`M${step.x + 47} 139h14m-7-7v14`} stroke={ink} strokeWidth="2" strokeLinecap="round" />}
          {index === 2 && <path d={`m${step.x + 47} 139 5 5 10-11`} fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
          {index === 3 && <path d={`M${step.x + 47} 141a8 8 0 0 1 11-9l3 3m0-5v5h-5m-6 7a8 8 0 0 0 11 1`} fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />}
          <text x={step.x + 54} y="199" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">{step.label}</text>
        </g>
      ))}
      <path d="m211 133 9 6-9 6m164-12 9 6-9 6m164-12 9 6-9 6" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="411" y="251" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">STRATEGIC DIRECTION, CONTINUOUS CONTEXT</text>
    </>
  );
}

function MetricsScene({ accent, orange, ink }) {
  return (
    <>
      <rect x="66" y="53" width="688" height="205" rx="18" fill="#fff" stroke="#e1e9ef" strokeWidth="2" />
      <rect x="91" y="76" width="181" height="143" rx="12" fill="#f7f9fb" />
      <path d="M110 190h143M110 160h143M110 130h143" stroke="#e2e8ef" strokeWidth="2" />
      <path d="m115 177 31-23 27 9 34-39 35-20" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="173" cy="163" r="5" fill={orange} />
      <circle cx="207" cy="124" r="5" fill={orange} />
      <text x="181" y="243" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">PERFORMANCE</text>
      <rect x="296" y="76" width="198" height="143" rx="12" fill="#f7f9fb" />
      <circle cx="363" cy="141" r="38" fill="none" stroke="#e0e8ef" strokeWidth="9" />
      <circle cx="363" cy="141" r="38" fill="none" stroke={accent} strokeWidth="9" strokeLinecap="round" strokeDasharray="175 240" transform="rotate(-90 363 141)" />
      <path d="M363 141 386 119" stroke={orange} strokeWidth="4" strokeLinecap="round" />
      <circle cx="363" cy="141" r="5" fill={ink} />
      <rect x="414" y="117" width="57" height="9" rx="4.5" fill="#cbd7e3" />
      <rect x="414" y="136" width="42" height="7" rx="3.5" fill="#e0e7ed" />
      <rect x="414" y="154" width="52" height="7" rx="3.5" fill="#e0e7ed" />
      <text x="395" y="243" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">MARKET CHANGE</text>
      <rect x="518" y="76" width="211" height="143" rx="12" fill="#f7f9fb" />
      {[0, 1, 2, 3].map((index) => (
        <g key={index}>
          <circle cx="542" cy={101 + index * 29} r="5" fill={index === 2 ? orange : accent} />
          <rect x="558" y={97 + index * 29} width={126 - index * 9} height="8" rx="4" fill="#cad6e2" />
          <rect x="558" y={110 + index * 29} width="77" height="5" rx="2.5" fill="#e2e8ee" />
        </g>
      ))}
      <text x="623" y="243" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">EARLY SIGNALS</text>
    </>
  );
}

function IntelligenceScene({ accent, orange, ink }) {
  const signals = [
    { x: 70, y: 58, label: "CONTACTS", color: accent },
    { x: 327, y: 45, label: "INTENT", color: orange },
    { x: 584, y: 58, label: "TECHNOLOGY", color: accent },
    { x: 70, y: 220, label: "BUYING GROUP", color: orange },
    { x: 327, y: 233, label: "RENEWAL", color: accent },
    { x: 584, y: 220, label: "NEXT PURCHASE", color: orange },
  ];

  return (
    <>
      {signals.map((signal) => (
        <path
          key={`link-${signal.label}`}
          d={`M${signal.x + 82} ${signal.y + 28} 410 165`}
          stroke="#cad8e5"
          strokeWidth="2"
          strokeDasharray="4 7"
        />
      ))}
      <circle cx="410" cy="165" r="63" fill={accent} opacity=".1" />
      <circle cx="410" cy="165" r="43" fill="#fff" stroke={accent} strokeWidth="3" />
      <circle cx="410" cy="165" r="30" fill="#f3f7f6" />
      <text x="410" y="162" textAnchor="middle" fill={ink} className="ppd-revenue-art__card-key">ACCOUNT</text>
      <text x="410" y="182" textAnchor="middle" fill={ink} className="ppd-revenue-art__card-number">CONTEXT</text>
      {signals.map((signal, index) => (
        <g key={signal.label} className="ppd-revenue-art__framework-card" style={{ "--node-delay": `${index * .12}s` }}>
          <rect x={signal.x} y={signal.y} width="166" height="56" rx="14" fill="#fff" stroke="#dfe8ef" strokeWidth="2" />
          <circle className="ppd-revenue-art__node" style={{ "--node-delay": `${index * .25}s` }} cx={signal.x + 22} cy={signal.y + 28} r="7" fill={signal.color} />
          <rect x={signal.x + 38} y={signal.y + 21} width={index % 2 ? "85" : "105"} height="6" rx="3" fill="#d2dde7" />
          <text x={signal.x + 38} y={signal.y + 41} fill={ink} className="ppd-revenue-art__label">{signal.label}</text>
        </g>
      ))}
    </>
  );
}

function LayersScene({ accent, orange, ink }) {
  const layers = [
    { y: 62, label: "CONTACTS", color: accent },
    { y: 111, label: "TECHNOLOGY", color: orange },
    { y: 160, label: "INTENT", color: accent },
    { y: 209, label: "TIMING", color: orange },
  ];

  return (
    <>
      {layers.map((layer, index) => (
        <g key={layer.label} className="ppd-revenue-art__framework-card" style={{ "--node-delay": `${index * .15}s` }}>
          <rect x="76" y={layer.y} width="207" height="38" rx="11" fill="#fff" stroke="#e1e9ef" strokeWidth="2" />
          <circle cx="96" cy={layer.y + 19} r="6" fill={layer.color} />
          <text x="111" y={layer.y + 24} fill={ink} className="ppd-revenue-art__label">{layer.label}</text>
          <rect x="203" y={layer.y + 15} width="56" height="7" rx="3.5" fill="#dfe7ed" />
        </g>
      ))}
      <path d="M296 80v172M296 80h37M296 129h37M296 178h37M296 228h37" fill="none" stroke="#c7d5e1" strokeWidth="2" />
      <path d="M333 80v148" fill="none" stroke={accent} strokeWidth="3" strokeDasharray="5 8" />
      <path d="m326 218 7 11 7-11" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="ppd-revenue-art__node" cx="333" cy="154" r="8" fill={orange} />
      <path d="M345 154h47" stroke="#c7d5e1" strokeWidth="3" strokeDasharray="5 7" />
      <circle cx="410" cy="154" r="52" fill={accent} opacity=".12" />
      <circle cx="410" cy="154" r="35" fill="#fff" stroke={accent} strokeWidth="3" />
      <path d="m396 154 10 10 19-21" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M448 154h35" stroke="#c7d5e1" strokeWidth="3" strokeDasharray="5 7" />
      <rect x="489" y="99" width="247" height="111" rx="17" fill="#fff" stroke="#dfe8ef" strokeWidth="2" />
      <rect x="512" y="122" width="11" height="11" rx="3" fill={accent} opacity=".8" />
      <text x="535" y="132" fill={ink} className="ppd-revenue-art__card-key">OPPORTUNITY</text>
      <text x="512" y="160" fill={ink} className="ppd-revenue-art__label">CONTEXT</text>
      <rect x="512" y="177" width="178" height="7" rx="3.5" fill="#dfe7ed" />
    </>
  );
}

function TechTimelineScene({ accent, orange, ink }) {
  const events = [
    { x: 112, label: "DETECTED", date: "YEAR 1", color: accent, y: 140 },
    { x: 310, label: "ADOPTED", date: "YEAR 2", color: orange, y: 108 },
    { x: 510, label: "EXPANDED", date: "YEAR 4", color: accent, y: 140 },
    { x: 710, label: "REPLACED", date: "RECENT", color: orange, y: 108 },
  ];

  return (
    <>
      <path d="M92 181H730" stroke="#d7e2eb" strokeWidth="4" strokeLinecap="round" />
      <path d="M104 181c95 0 114-64 207-64s111 65 204 65 107-64 203-64" fill="none" stroke={accent} strokeWidth="4" strokeDasharray="7 9" strokeLinecap="round" />
      {events.map((event, index) => (
        <g key={event.label} className="ppd-revenue-art__framework-card" style={{ "--node-delay": `${index * .18}s` }}>
          <circle className="ppd-revenue-art__node" style={{ "--node-delay": `${index * .25}s` }} cx={event.x} cy={index % 2 ? 117 : 181} r="23" fill={event.color} opacity=".16" />
          <circle cx={event.x} cy={index % 2 ? 117 : 181} r="9" fill={event.color} />
          <text x={event.x} y={index % 2 ? 74 : 228} textAnchor="middle" fill={ink} className="ppd-revenue-art__label">{event.label}</text>
          <text x={event.x} y={index % 2 ? 91 : 247} textAnchor="middle" fill="#62758a" className="ppd-revenue-art__caption">{event.date}</text>
        </g>
      ))}
      <rect x="239" y="270" width="370" height="34" rx="17" fill="#fff" stroke="#e0e8ee" />
      <text x="424" y="292" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">PRESENCE + CHANGE + TIMING</text>
    </>
  );
}

function SnapshotScene({ accent, orange, ink }) {
  return (
    <>
      <rect x="63" y="64" width="294" height="195" rx="17" fill="#fff" stroke="#dfe8ef" strokeWidth="2" />
      <text x="88" y="94" fill={ink} className="ppd-revenue-art__card-key">TECHNOLOGY PRESENT</text>
      <rect x="88" y="112" width="239" height="52" rx="11" fill="#f7f9fb" />
      <circle cx="110" cy="138" r="7" fill={accent} />
      <rect x="128" y="131" width="103" height="7" rx="3.5" fill="#b9c9d8" />
      <rect x="128" y="143" width="73" height="5" rx="2.5" fill="#e1e8ee" />
      <rect x="88" y="176" width="239" height="52" rx="11" fill="#f7f9fb" />
      <circle cx="110" cy="202" r="7" fill={orange} />
      <rect x="128" y="195" width="123" height="7" rx="3.5" fill="#b9c9d8" />
      <rect x="128" y="207" width="82" height="5" rx="2.5" fill="#e1e8ee" />
      <path d="M380 159h59" stroke="#c3d1de" strokeWidth="3" strokeDasharray="5 7" />
      <path d="m431 150 10 9-10 9" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="463" y="64" width="294" height="195" rx="17" fill="#fff" stroke="#dfe8ef" strokeWidth="2" />
      <text x="488" y="94" fill={ink} className="ppd-revenue-art__card-key">CHANGE OVER TIME</text>
      <path d="M509 161h207" stroke="#d7e2eb" strokeWidth="3" strokeLinecap="round" />
      <path d="M520 161c55 0 48-38 100-38s54 39 96 39" fill="none" stroke={accent} strokeWidth="3" strokeDasharray="5 7" />
      {[{ x: 520, y: 161, color: accent }, { x: 620, y: 123, color: orange }, { x: 716, y: 162, color: accent }].map((point) => (
        <g key={point.x} className="ppd-revenue-art__node">
          <circle cx={point.x} cy={point.y} r="15" fill={point.color} opacity=".16" />
          <circle cx={point.x} cy={point.y} r="6" fill={point.color} />
        </g>
      ))}
      <text x="520" y="201" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">FIRST SEEN</text>
      <text x="620" y="107" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">ADOPTED</text>
      <text x="716" y="201" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">NOW</text>
      <rect x="540" y="220" width="163" height="24" rx="12" fill="#f1f6f5" />
      <circle cx="556" cy="232" r="4" fill={orange} />
      <text x="624" y="236" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">RECENTLY DETECTED</text>
    </>
  );
}

function ChangesScene({ accent, orange, ink }) {
  const changes = [
    { x: 82, label: "ADOPTED", color: accent, mark: "+" },
    { x: 326, label: "REPLACED", color: orange, mark: "↔" },
    { x: 570, label: "REMOVED", color: accent, mark: "−" },
  ];

  return (
    <>
      {changes.map((change, index) => (
        <g key={change.label} className="ppd-revenue-art__framework-card" style={{ "--node-delay": `${index * .2}s` }}>
          <rect x={change.x} y="78" width="168" height="154" rx="17" fill="#fff" stroke="#dfe8ef" strokeWidth="2" />
          <circle cx={change.x + 84} cy="124" r="29" fill={change.color} opacity=".14" />
          <circle cx={change.x + 84} cy="124" r="18" fill={change.color} />
          <text x={change.x + 84} y="132" textAnchor="middle" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="24" fontWeight="700">{change.mark}</text>
          <text x={change.x + 84} y="181" textAnchor="middle" fill={ink} className="ppd-revenue-art__label">{change.label}</text>
          <rect x={change.x + 34} y="197" width="100" height="6" rx="3" fill="#dfe7ed" />
        </g>
      ))}
      <path d="M267 155h44m-7-8 9 8-9 8M511 155h44m-7-8 9 8-9 8" fill="none" stroke="#b8c8d7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="244" y="261" width="332" height="38" rx="19" fill="#fff" stroke="#e0e8ee" />
      <circle cx="269" cy="280" r="5" fill={orange} />
      <text x="410" y="284" textAnchor="middle" fill={ink} className="ppd-revenue-art__caption">CHANGE CREATES CONTEXT</text>
    </>
  );
}

export default function RevenueOpportunityArtwork({ variant = "timeline", className = "" }) {
  const scene = scenes[variant] || scenes.timeline;
  const gradientId = `revenue-art-${variant}-${useId().replace(/:/g, "")}`;

  return (
    <figure className={`ppd-revenue-artwork ${className}`}>
      <svg
        className="ppd-revenue-artwork__svg"
        viewBox="0 0 820 330"
        role="img"
        aria-label={scene.description}
        focusable="false"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f3f7f5" />
            <stop offset="100%" stopColor="#eef3fc" />
          </linearGradient>
        </defs>
        <rect width="820" height="330" rx="24" fill={`url(#${gradientId})`} />
        <circle cx="760" cy="44" r="99" fill="#e7a03a" opacity=".08" />
        <circle cx="50" cy="302" r="95" fill="#159b8a" opacity=".07" />
        <path d="M0 65C133 17 185 50 280 72s190 15 284-16 163-36 256-11" fill="none" stroke="#fff" strokeWidth="2" />
        {variant === "gap" ? (
          <GapScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "framework" ? (
          <FrameworkScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "market" ? (
          <MarketScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "planning" ? (
          <PlanningScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "metrics" ? (
          <MetricsScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "intelligence" ? (
          <IntelligenceScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "layers" ? (
          <LayersScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "techTimeline" ? (
          <TechTimelineScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "snapshot" ? (
          <SnapshotScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : variant === "changes" ? (
          <ChangesScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        ) : (
          <TimelineScene accent="#159b8a" orange="#e7a03a" ink="#203756" />
        )}
      </svg>
      <figcaption>{scene.label}</figcaption>
    </figure>
  );
}
