import React from "react";

const artworkThemes = {
  trends: ["#f1f3eb", "#317ecb", "#22a68f"],
  b2bPlatforms: ["#eef4f1", "#1a9c8b", "#e7a03a"],
  technographicsTimeline: ["#eff5ff", "#3382cf", "#27a98d"],
  planning: ["#f3f1e8", "#3979cf", "#18a999"],
  opportunity: ["#eef4f1", "#1a9c8b", "#e7a03a"],
  predictive: ["#f3f0e8", "#e7ae4b", "#18a999"],
  intent: ["#eef4ff", "#4d83df", "#e9a441"],
  expansion: ["#f4f1e9", "#20a78f", "#ef9f3c"],
  audience: ["#eff5ff", "#886bd1", "#25a88f"],
  forecast: ["#f3f0e8", "#3f79d2", "#e9a441"],
  stack: ["#eff5ff", "#3382cf", "#27a98d"],
  competitiveStack: ["#f4f1e9", "#e99b37", "#547dde"],
  displacement: ["#eff5ff", "#25a88f", "#8a6bd0"],
  customerHealth: ["#f1f5ff", "#29a58d", "#e9a441"],
  arr: ["#f3f0e8", "#3e7bd9", "#19a88f"],
  timing: ["#eff5ff", "#e9a441", "#3280d6"],
  strategy: ["#f4f1e9", "#3180d6", "#8b6bd0"],
  connectivity: ["#eef5ff", "#289f98", "#e99d3d"],
  industrial: ["#f4f0e8", "#e79a37", "#258eaa"],
  cloud: ["#edf4ff", "#5487dc", "#28a78f"],
  transformation: ["#f2f1e9", "#3383d2", "#8b6bd0"],
};

const artworkLabels = {
  trends: "10 shifts shaping GTM",
  b2bPlatforms: "Connected GTM intelligence",
  technographicsTimeline: "Technology in motion",
  planning: "Plan for what changes",
  opportunity: "Before the pipeline",
  predictive: "Demand, anticipated",
  intent: "In-market signals",
  expansion: "Growth, unlocked",
  audience: "Buying groups",
  forecast: "Predictable growth",
  stack: "Tech stack clarity",
  competitiveStack: "Competitive edge",
  displacement: "Switch opportunity",
  customerHealth: "Account health",
  arr: "Recurring growth",
  timing: "The 100-day window",
  strategy: "Strategy in motion",
  connectivity: "Connected markets",
  industrial: "Industrial GTM",
  cloud: "Cloud control",
  transformation: "Global transformation",
};

function TrendConstellation({ accent, secondary }) {
  const signals = [
    { x: 240, y: 58, color: accent },
    { x: 296, y: 72, color: secondary },
    { x: 339, y: 112, color: accent },
    { x: 341, y: 161, color: secondary },
    { x: 300, y: 198, color: accent },
    { x: 240, y: 211, color: secondary },
    { x: 180, y: 198, color: accent },
    { x: 139, y: 161, color: secondary },
    { x: 141, y: 112, color: accent },
    { x: 184, y: 72, color: secondary },
  ];

  return (
    <>
      <circle cx="240" cy="135" r="103" fill="#fff" opacity=".82" />
      <circle cx="240" cy="135" r="82" fill="none" stroke="#19365b" strokeOpacity=".12" strokeWidth="1.5" strokeDasharray="3 7" />
      <path d="M240 54v162M159 135h162M182 77l116 116M298 77 182 193" stroke="#19365b" strokeOpacity=".09" strokeWidth="1" />
      <circle cx="240" cy="135" r="52" fill="#fff" stroke="#dce8e7" strokeWidth="2" />
      <text x="240" y="132" textAnchor="middle" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2">GTM</text>
      <text x="240" y="161" textAnchor="middle" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="700">2027</text>
      {signals.map((signal, index) => (
        <g key={`trend-${index}`} className={index % 2 === 0 ? "ppd-blog-artwork__signal" : undefined}>
          <circle cx={signal.x} cy={signal.y} r="15" fill={signal.color} opacity=".17" />
          <circle cx={signal.x} cy={signal.y} r="7" fill={signal.color} />
          <circle cx={signal.x} cy={signal.y} r="2.5" fill="#fff" />
        </g>
      ))}
    </>
  );
}

function PlanningRoadmap({ accent, secondary }) {
  const milestones = [
    { x: 112, y: 164, quarter: "Q1", color: accent, mark: "1" },
    { x: 195, y: 111, quarter: "Q2", color: secondary, mark: "2" },
    { x: 282, y: 163, quarter: "Q3", color: accent, mark: "3" },
    { x: 365, y: 107, quarter: "Q4", color: secondary, mark: "4" },
  ];

  return (
    <>
      <rect x="84" y="47" width="312" height="178" rx="24" fill="#fff" opacity=".88" />
      <path d="M112 164c0-47 83-47 83-53s-8-30 87-30 83 29 83 26" fill="none" stroke="#d9e3ed" strokeWidth="19" strokeLinecap="round" />
      <path d="M112 164c0-47 83-47 83-53s-8-30 87-30 83 29 83 26" fill="none" stroke="#fff" strokeWidth="11" strokeLinecap="round" />
      <path d="M112 164c0-47 83-47 83-53s-8-30 87-30 83 29 83 26" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="3 9" strokeLinecap="round" />
      {milestones.map((milestone, index) => (
        <g key={milestone.quarter} className={index === 3 ? "ppd-blog-artwork__signal" : undefined}>
          <circle cx={milestone.x} cy={milestone.y} r="22" fill={milestone.color} opacity=".15" />
          <circle cx={milestone.x} cy={milestone.y} r="13" fill="#fff" stroke={milestone.color} strokeWidth="3" />
          <text x={milestone.x} y={milestone.y + 4} textAnchor="middle" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700">{milestone.mark}</text>
          <rect x={milestone.x - 24} y={milestone.y + 26} width="48" height="19" rx="9.5" fill="#fff" />
          <text x={milestone.x} y={milestone.y + 39} textAnchor="middle" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700">{milestone.quarter}</text>
        </g>
      ))}
      <path d="m357 99 10 8-11 8" fill="none" stroke={secondary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="106" y="202" width="141" height="9" rx="4.5" fill={accent} opacity=".14" />
      <rect x="106" y="202" width="86" height="9" rx="4.5" fill={accent} opacity=".72" />
      <circle cx="259" cy="206.5" r="4" fill={secondary} />
      <text x="273" y="211" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="700">REVIEW &amp; ADAPT</text>
    </>
  );
}

function OpportunityFlow({ accent, secondary }) {
  return (
    <>
      <rect x="79" y="44" width="322" height="181" rx="22" fill="#fff" opacity=".88" />
      <text x="105" y="71" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.2">BEFORE IT HITS THE PIPELINE</text>
      <path d="M155 112c35 0 35 42 73 42s39-42 73-42" fill="none" stroke="#dce5eb" strokeWidth="4" strokeDasharray="5 7" />
      <path d="M155 112c35 0 35 42 73 42s39-42 73-42" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="3 8" />
      <g className="ppd-blog-artwork__float">
        <rect x="101" y="90" width="97" height="42" rx="12" fill="#f4f8f7" stroke="#dce9e5" />
        <circle cx="118" cy="111" r="7" fill={accent} opacity=".2" />
        <circle cx="118" cy="111" r="3.5" fill={accent} />
        <rect x="132" y="106" width="53" height="6" rx="3" fill="#9eb0c1" />
        <rect x="132" y="117" width="37" height="4" rx="2" fill="#d8e1e9" />
      </g>
      <g className="ppd-blog-artwork__float ppd-blog-artwork__float--delay">
        <rect x="204" y="132" width="97" height="42" rx="12" fill="#fff8eb" stroke="#f1e4ca" />
        <circle cx="221" cy="153" r="7" fill={secondary} opacity=".2" />
        <path d="M221 148v5l4 2" fill="none" stroke={secondary} strokeWidth="2" strokeLinecap="round" />
        <rect x="235" y="148" width="53" height="6" rx="3" fill="#9eb0c1" />
        <rect x="235" y="159" width="37" height="4" rx="2" fill="#d8e1e9" />
      </g>
      <g className="ppd-blog-artwork__float">
        <rect x="307" y="90" width="76" height="42" rx="12" fill="#f2f5fc" stroke="#dce3f0" />
        <circle cx="324" cy="111" r="7" fill={accent} opacity=".2" />
        <path d="M321 111h6m-3-3v6" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <rect x="338" y="106" width="34" height="6" rx="3" fill="#9eb0c1" />
        <rect x="338" y="117" width="26" height="4" rx="2" fill="#d8e1e9" />
      </g>
      <circle cx="228" cy="154" r="16" fill={secondary} opacity=".18" />
      <circle cx="228" cy="154" r="7" fill={secondary} />
      <rect x="306" y="155" width="79" height="40" rx="12" fill="#173454" />
      <path d="M325 176h40m-10-10 10 10-10 10" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="377" cy="154" r="9" fill={accent} opacity=".2" />
      <circle className="ppd-blog-artwork__signal" cx="377" cy="154" r="4" fill={accent} />
      <text x="105" y="204" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700">CHANGE</text>
      <text x="212" y="204" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700">SIGNAL</text>
      <text x="313" y="204" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700">OPPORTUNITY</text>
    </>
  );
}

function ArtworkScene({ type, accent, secondary }) {
  if (type === "trends") {
    return <TrendConstellation accent={accent} secondary={secondary} />;
  }
  if (type === "planning") {
    return <PlanningRoadmap accent={accent} secondary={secondary} />;
  }
  if (type === "opportunity") {
    return <OpportunityFlow accent={accent} secondary={secondary} />;
  }

  if (type === "technographicsTimeline") {
    return (
      <>
        <rect x="76" y="37" width="328" height="196" rx="19" fill="#fff" />
        <rect x="101" y="58" width="139" height="9" rx="4.5" fill="#243d68" opacity=".8" />
        <rect x="101" y="77" width="92" height="6" rx="3" fill="#d9e3f1" />
        <path d="M113 159h253" stroke="#d9e3f1" strokeWidth="4" strokeLinecap="round" />
        <path d="M113 159c45 0 43-42 91-42s48 42 91 42 39-41 71-41" fill="none" stroke={accent} strokeWidth="4" strokeDasharray="6 7" strokeLinecap="round" />
        {[
          { x: 116, y: 159, label: "SEEN", color: accent },
          { x: 203, y: 117, label: "ADOPTED", color: secondary },
          { x: 294, y: 159, label: "CHANGED", color: accent },
          { x: 366, y: 118, label: "NOW", color: secondary },
        ].map((event) => (
          <g key={event.label} className="ppd-blog-artwork__signal">
            <circle cx={event.x} cy={event.y} r="12" fill={event.color} opacity=".18" />
            <circle cx={event.x} cy={event.y} r="5" fill={event.color} />
            <text x={event.x} y={event.y + (event.y > 140 ? 27 : -16)} textAnchor="middle" fill="#243d68" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="700">{event.label}</text>
          </g>
        ))}
        <rect x="101" y="204" width="141" height="15" rx="7.5" fill={accent} opacity=".14" />
        <circle cx="111" cy="211.5" r="3.5" fill={accent} />
        <rect x="250" y="204" width="128" height="15" rx="7.5" fill={secondary} opacity=".14" />
        <circle cx="260" cy="211.5" r="3.5" fill={secondary} />
      </>
    );
  }

  if (type === "b2bPlatforms") {
    const signals = [
      { x: 145, y: 102, label: "CONTACTS", color: accent },
      { x: 240, y: 77, label: "INTENT", color: secondary },
      { x: 335, y: 102, label: "TECH", color: accent },
      { x: 177, y: 176, label: "BUYERS", color: secondary },
      { x: 303, y: 176, label: "TIMING", color: accent },
    ];

    return (
      <>
        <rect x="76" y="37" width="328" height="196" rx="19" fill="#fff" />
        {signals.map((signal) => (
          <path key={`link-${signal.label}`} d={`M${signal.x} ${signal.y} 240 139`} fill="none" stroke="#d6e0e9" strokeWidth="2" />
        ))}
        <circle cx="240" cy="139" r="33" fill={accent} opacity=".12" />
        <circle cx="240" cy="139" r="23" fill={accent} />
        <text x="240" y="143" textAnchor="middle" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="700">GTM</text>
        {signals.map((signal) => (
          <g key={signal.label} className="ppd-blog-artwork__signal">
            <rect x={signal.x - 39} y={signal.y - 13} width="78" height="27" rx="13.5" fill="#f7f9fc" stroke="#e3eaf1" />
            <circle cx={signal.x - 25} cy={signal.y} r="4" fill={signal.color} />
            <text x={signal.x + 5} y={signal.y + 3} textAnchor="middle" fill="#243d68" fontFamily="Arial, Helvetica, sans-serif" fontSize="8" fontWeight="700">{signal.label}</text>
          </g>
        ))}
      </>
    );
  }

  if (type === "trends") {
    const trendSignals = [
      { x: 240, y: 58, color: accent },
      { x: 296, y: 72, color: secondary },
      { x: 339, y: 112, color: accent },
      { x: 341, y: 161, color: secondary },
      { x: 300, y: 198, color: accent },
      { x: 240, y: 211, color: secondary },
      { x: 180, y: 198, color: accent },
      { x: 139, y: 161, color: secondary },
      { x: 141, y: 112, color: accent },
      { x: 184, y: 72, color: secondary },
    ];

    return (
      <>
        <circle cx="240" cy="135" r="103" fill="#fff" opacity=".82" />
        <circle cx="240" cy="135" r="81" fill="none" stroke="#fff" strokeWidth="17" opacity=".72" />
        <circle cx="240" cy="135" r="82" fill="none" stroke="#19365b" strokeOpacity=".12" strokeWidth="1.5" strokeDasharray="3 7" />
        <path d="M240 54v162M159 135h162M182 77l116 116M298 77 182 193" stroke="#19365b" strokeOpacity=".09" strokeWidth="1" />
        <circle cx="240" cy="135" r="52" fill="#fff" stroke="#dce8e7" strokeWidth="2" />
        <text x="240" y="132" textAnchor="middle" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2">GTM</text>
        <text x="240" y="161" textAnchor="middle" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="700">2027</text>
        {trendSignals.map((signal, index) => (
          <g key={`trend-${index}`} className={index % 2 === 0 ? "ppd-blog-artwork__signal" : undefined}>
            <circle cx={signal.x} cy={signal.y} r="15" fill={signal.color} opacity=".17" />
            <circle cx={signal.x} cy={signal.y} r="7" fill={signal.color} />
            <circle cx={signal.x} cy={signal.y} r="2.5" fill="#fff" />
          </g>
        ))}
        <path d="M240 32v14m77 32-10 10m45 67h-14m-21 75-10-10m-67 36v-14m-78-11 10-10m-47-67h14m22-75 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".9" />
      </>
    );
  }

  if (type === "planning") {
    const milestones = [
      { x: 112, y: 164, quarter: "Q1", color: accent, mark: "1" },
      { x: 195, y: 111, quarter: "Q2", color: secondary, mark: "2" },
      { x: 282, y: 163, quarter: "Q3", color: accent, mark: "3" },
      { x: 365, y: 107, quarter: "Q4", color: secondary, mark: "4" },
    ];

    return (
      <>
        <rect x="84" y="47" width="312" height="178" rx="24" fill="#fff" opacity=".88" />
        <path d="M112 164c0-47 83-47 83-53s-8-30 87-30 83 29 83 26" fill="none" stroke="#d9e3ed" strokeWidth="19" strokeLinecap="round" />
        <path d="M112 164c0-47 83-47 83-53s-8-30 87-30 83 29 83 26" fill="none" stroke="#fff" strokeWidth="11" strokeLinecap="round" />
        <path d="M112 164c0-47 83-47 83-53s-8-30 87-30 83 29 83 26" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="3 9" strokeLinecap="round" />
        {milestones.map((milestone, index) => (
          <g key={milestone.quarter} className={index === 3 ? "ppd-blog-artwork__signal" : undefined}>
            <circle cx={milestone.x} cy={milestone.y} r="22" fill={milestone.color} opacity=".15" />
            <circle cx={milestone.x} cy={milestone.y} r="13" fill="#fff" stroke={milestone.color} strokeWidth="3" />
            <text x={milestone.x} y={milestone.y + 4} textAnchor="middle" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700">{milestone.mark}</text>
            <rect x={milestone.x - 24} y={milestone.y + 26} width="48" height="19" rx="9.5" fill="#fff" />
            <text x={milestone.x} y={milestone.y + 39} textAnchor="middle" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700">{milestone.quarter}</text>
          </g>
        ))}
        <path d="m357 99 10 8-11 8" fill="none" stroke={secondary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="106" y="202" width="141" height="9" rx="4.5" fill={accent} opacity=".14" />
        <rect x="106" y="202" width="86" height="9" rx="4.5" fill={accent} opacity=".72" />
        <circle cx="259" cy="206.5" r="4" fill={secondary} />
        <text x="273" y="211" fill="#173454" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="700">REVIEW &amp; ADAPT</text>
      </>
    );
  }

  if (type === "opportunity") {
    return (
      <>
        <rect x="76" y="37" width="328" height="196" rx="19" fill="#fff" />
        <rect x="101" y="60" width="106" height="8" rx="4" fill="#243d68" opacity=".8" />
        <rect x="101" y="77" width="68" height="6" rx="3" fill="#d9e3f1" />
        <path d="M104 187h275M104 157h275M104 127h275" stroke="#e8edf5" />
        <path d="M130 191v-10M179 191v-28M228 191v-47M277 191v-71M326 191v-93" stroke={accent} strokeWidth="13" strokeLinecap="round" opacity=".27" />
        <path className="ppd-blog-artwork__chart-line" d="M106 181c37-2 42-19 71-17s32-22 60-22 37-29 66-32 39-26 77-37" fill="none" stroke={accent} strokeLinecap="round" strokeWidth="5" />
        <circle className="ppd-blog-artwork__signal" cx="237" cy="142" r="6" fill={secondary} />
        <circle className="ppd-blog-artwork__signal" cx="303" cy="110" r="6" fill={accent} />
        <circle className="ppd-blog-artwork__signal" cx="380" cy="73" r="7" fill={secondary} />
        <circle cx="380" cy="73" r="15" fill={secondary} opacity=".14" />
        <path d="M348 57a37 37 0 0 1 36-20" fill="none" stroke="#cbd8e8" strokeWidth="2" strokeDasharray="3 5" />
        <path d="m379 31 7 6-7 6" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }

  if (type === "predictive" || type === "forecast") {
    return (
      <>
        <rect x="76" y="37" width="328" height="196" rx="19" fill="#fff" />
        <rect x="101" y="62" width="112" height="9" rx="4.5" fill="#243d68" opacity=".8" />
        <rect x="101" y="80" width="67" height="6" rx="3" fill="#d9e3f1" />
        {[114, 147, 180, 213, 246, 279, 312, 345].map((x) => (
          <path key={x} d={`M${x} 111v87`} stroke="#e8edf5" strokeWidth="1" />
        ))}
        {[126, 153, 180].map((y) => (
          <path key={y} d={`M101 ${y}h278`} stroke="#e8edf5" strokeWidth="1" />
        ))}
        <path d="M104 184C133 180 139 156 168 165s37-28 66-21 34-17 58-13 42-31 85-39v107H104Z" fill={accent} opacity=".13" />
        <path className="ppd-blog-artwork__chart-line" d="M104 184C133 180 139 156 168 165s37-28 66-21 34-17 58-13 42-31 85-39" fill="none" stroke={accent} strokeLinecap="round" strokeWidth="5" />
        {[168, 234, 292, 377].map((x, i) => (
          <circle key={x} className="ppd-blog-artwork__signal" cx={x} cy={[165, 144, 131, 92][i]} r="6" fill={i === 3 ? secondary : accent} />
        ))}
      </>
    );
  }

  if (type === "intent") {
    return (
      <>
        <rect x="78" y="39" width="324" height="192" rx="20" fill="#fff" />
        <circle cx="216" cy="134" r="72" fill="none" stroke="#e8eef8" strokeWidth="1.5" />
        <circle cx="216" cy="134" r="51" fill="none" stroke={accent} strokeOpacity=".22" strokeWidth="1.5" />
        <circle cx="216" cy="134" r="29" fill="none" stroke={accent} strokeOpacity=".42" strokeWidth="1.5" />
        <path d="M216 134 268 88A69 69 0 0 1 285 132Z" fill={accent} opacity=".16" />
        <circle className="ppd-blog-artwork__signal" cx="265" cy="101" r="7" fill={accent} />
        <circle className="ppd-blog-artwork__signal" cx="185" cy="109" r="5" fill={secondary} />
        <circle className="ppd-blog-artwork__signal" cx="231" cy="168" r="5" fill={secondary} />
        <rect x="309" y="84" width="66" height="100" rx="12" fill="#f7f9fc" />
        <rect x="323" y="99" width="34" height="6" rx="3" fill="#b9c9de" />
        <rect x="323" y="116" width="39" height="28" rx="7" fill={accent} opacity=".16" />
        <path d="m329 137 9-10 7 6 11-13" fill="none" stroke={accent} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <rect x="323" y="155" width="39" height="5" rx="2.5" fill="#dce5f1" />
        <rect x="323" y="166" width="28" height="5" rx="2.5" fill="#dce5f1" />
      </>
    );
  }

  if (type === "expansion" || type === "arr") {
    return (
      <>
        <rect x="75" y="39" width="330" height="192" rx="20" fill="#fff" />
        <rect x="99" y="63" width="118" height="8" rx="4" fill="#243d68" opacity=".8" />
        <rect x="99" y="80" width="75" height="6" rx="3" fill="#d9e3f1" />
        <path d="M105 193h272M105 158h272M105 123h272" stroke="#e8edf5" />
        <rect x="130" y="151" width="31" height="42" rx="7" fill={accent} opacity=".7" />
        <rect x="181" y="134" width="31" height="59" rx="7" fill={secondary} opacity=".72" />
        <rect x="232" y="117" width="31" height="76" rx="7" fill={accent} opacity=".82" />
        <rect x="283" y="96" width="31" height="97" rx="7" fill={secondary} />
        <path className="ppd-blog-artwork__chart-line" d="m119 145 53-19 42 5 53-34 47-19" fill="none" stroke="#243d68" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <path d="M300 78h17v17" fill="none" stroke="#243d68" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </>
    );
  }

  if (type === "audience") {
    return (
      <>
        <rect x="73" y="36" width="334" height="198" rx="20" fill="#fff" />
        <path d="m132 94 102 39 104-42M132 94l17 91 85-52 97 55 7-97M149 185l155 3" fill="none" stroke="#d4e0f0" strokeWidth="3" />
        {[[132, 94, accent], [336, 91, secondary], [149, 185, secondary], [304, 188, accent]].map(([cx, cy, fill]) => (
          <g key={`${cx}-${cy}`} className="ppd-blog-artwork__signal">
            <circle cx={cx} cy={cy} r="18" fill={fill} opacity=".13" />
            <circle cx={cx} cy={cy} r="8" fill={fill} />
            <circle cx={cx} cy={cy - 2} r="3" fill="#fff" />
          </g>
        ))}
        <circle cx="234" cy="132" r="31" fill={accent} opacity=".15" />
        <circle cx="234" cy="132" r="19" fill={accent} />
        <circle cx="234" cy="127" r="6" fill="#fff" />
        <path d="M223 145c2-7 6-10 11-10s10 3 12 10" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <rect x="185" y="195" width="98" height="8" rx="4" fill="#e1e9f4" />
      </>
    );
  }

  if (type === "stack" || type === "competitiveStack") {
    return (
      <>
        <rect x="75" y="38" width="330" height="194" rx="20" fill="#fff" />
        <rect x="101" y="60" width="123" height="8" rx="4" fill="#243d68" opacity=".8" />
        <rect x="101" y="78" width="73" height="6" rx="3" fill="#d9e3f1" />
        <g className="ppd-blog-artwork__float">
          <rect x="106" y="108" width="112" height="31" rx="9" fill="#f2f6fd" stroke="#e1e9f4" />
          <circle cx="124" cy="123" r="7" fill={accent} />
          <rect x="140" y="119" width="60" height="7" rx="3.5" fill="#aebed3" />
        </g>
        <g className="ppd-blog-artwork__float ppd-blog-artwork__float--delay">
          <rect x="106" y="149" width="112" height="31" rx="9" fill="#f2f6fd" stroke="#e1e9f4" />
          <circle cx="124" cy="164" r="7" fill={secondary} />
          <rect x="140" y="160" width="49" height="7" rx="3.5" fill="#aebed3" />
        </g>
        <path d="M231 145h36" stroke={accent} strokeWidth="3" strokeDasharray="4 5" />
        <rect x="273" y="92" width="99" height="111" rx="13" fill="#f8fafc" stroke="#e3eaf3" />
        <rect x="289" y="110" width="67" height="12" rx="6" fill={accent} opacity=".2" />
        <rect x="289" y="134" width="67" height="12" rx="6" fill={secondary} opacity=".2" />
        <rect x="289" y="158" width="67" height="12" rx="6" fill={accent} opacity=".2" />
        <circle cx="299" cy="116" r="4" fill={accent} />
        <circle cx="299" cy="140" r="4" fill={secondary} />
        <circle cx="299" cy="164" r="4" fill={accent} />
      </>
    );
  }

  if (type === "displacement") {
    return (
      <>
        <rect x="72" y="38" width="336" height="194" rx="20" fill="#fff" />
        <circle cx="153" cy="134" r="47" fill={accent} opacity=".12" />
        <circle cx="153" cy="134" r="29" fill="#fff" stroke={accent} strokeWidth="3" />
        <path d="M143 134h20M153 124v20" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        <path d="M184 134h83" stroke="#b8c9df" strokeWidth="3" strokeDasharray="5 6" />
        <path d="m251 122 14 12-14 12" fill="none" stroke="#b8c9df" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="278" y="81" width="93" height="105" rx="14" fill="#f5f8fc" stroke="#e2eaf5" />
        <rect x="295" y="100" width="58" height="9" rx="4.5" fill={secondary} opacity=".35" />
        <rect x="295" y="120" width="58" height="9" rx="4.5" fill={accent} opacity=".32" />
        <rect x="295" y="140" width="42" height="9" rx="4.5" fill={secondary} opacity=".35" />
        <circle className="ppd-blog-artwork__signal" cx="350" cy="168" r="6" fill={accent} />
      </>
    );
  }

  if (type === "customerHealth") {
    return (
      <>
        <rect x="74" y="38" width="332" height="194" rx="20" fill="#fff" />
        <circle cx="171" cy="133" r="56" fill="none" stroke="#e8edf5" strokeWidth="12" />
        <circle cx="171" cy="133" r="56" fill="none" stroke={accent} strokeWidth="12" strokeLinecap="round" strokeDasharray="235 352" transform="rotate(-90 171 133)" />
        <circle cx="171" cy="133" r="37" fill="#f7fafc" />
        <path d="M155 135h11l7-14 9 27 7-13h12" fill="none" stroke={secondary} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="253" y="86" width="111" height="15" rx="7.5" fill="#eaf0f7" />
        <rect x="253" y="86" width="83" height="15" rx="7.5" fill={accent} opacity=".8" />
        <rect x="253" y="119" width="111" height="9" rx="4.5" fill="#eaf0f7" />
        <rect x="253" y="119" width="61" height="9" rx="4.5" fill={secondary} opacity=".8" />
        <rect x="253" y="143" width="111" height="9" rx="4.5" fill="#eaf0f7" />
        <rect x="253" y="143" width="93" height="9" rx="4.5" fill={accent} opacity=".62" />
        <circle className="ppd-blog-artwork__signal" cx="359" cy="177" r="6" fill={secondary} />
      </>
    );
  }

  if (type === "timing") {
    return (
      <>
        <rect x="73" y="39" width="334" height="192" rx="20" fill="#fff" />
        <circle cx="183" cy="132" r="60" fill={accent} opacity=".1" />
        <circle cx="183" cy="132" r="45" fill="#fff" stroke="#e4eaf3" strokeWidth="8" />
        <circle cx="183" cy="132" r="45" fill="none" stroke={accent} strokeWidth="8" strokeLinecap="round" strokeDasharray="165 283" transform="rotate(-90 183 132)" />
        <path d="M183 105v28l21 13" fill="none" stroke="#243d68" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="267" y="83" width="95" height="100" rx="13" fill="#f7f9fc" stroke="#e5ebf3" />
        <rect x="267" y="83" width="95" height="25" rx="13" fill={secondary} />
        <rect x="267" y="97" width="95" height="11" fill={secondary} />
        <path d="M286 121v43M310 121v43M334 121v43M278 135h73M278 151h73" stroke="#dfe7f1" strokeWidth="2" />
        <circle className="ppd-blog-artwork__signal" cx="286" cy="135" r="4" fill={accent} />
        <circle className="ppd-blog-artwork__signal" cx="334" cy="151" r="4" fill={accent} />
      </>
    );
  }

  if (type === "strategy") {
    return (
      <>
        <rect x="71" y="38" width="338" height="194" rx="20" fill="#fff" />
        <rect x="93" y="59" width="294" height="25" rx="8" fill="#f4f7fb" />
        <circle cx="110" cy="71" r="5" fill={accent} />
        <rect x="123" y="67" width="83" height="7" rx="3.5" fill="#c1ccdc" />
        <rect x="93" y="97" width="137" height="112" rx="12" fill="#f7f9fc" />
        <path d="M111 182h102M111 157h102M111 132h102" stroke="#e6ebf2" />
        <path d="m115 177 24-19 21 9 23-38 25-15" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="247" y="97" width="140" height="48" rx="11" fill="#f7f9fc" />
        <circle cx="268" cy="121" r="10" fill={secondary} opacity=".24" />
        <circle cx="268" cy="121" r="4" fill={secondary} />
        <rect x="287" y="115" width="78" height="7" rx="3.5" fill="#b9c7d9" />
        <rect x="287" y="128" width="52" height="6" rx="3" fill="#e0e7f0" />
        <rect x="247" y="159" width="140" height="50" rx="11" fill="#f7f9fc" />
        <rect x="262" y="174" width="19" height="22" rx="4" fill={accent} opacity=".75" />
        <rect x="289" y="166" width="19" height="30" rx="4" fill={secondary} opacity=".8" />
        <rect x="316" y="170" width="19" height="26" rx="4" fill={accent} opacity=".55" />
        <rect x="343" y="161" width="19" height="35" rx="4" fill={secondary} />
      </>
    );
  }

  if (type === "connectivity") {
    return (
      <>
        <rect x="73" y="39" width="334" height="192" rx="20" fill="#fff" />
        <path d="M240 132 137 90M240 132l103-42M240 132l-85 72M240 132l91 72" stroke="#d7e3f1" strokeWidth="3" />
        <circle cx="240" cy="132" r="43" fill={accent} opacity=".13" />
        <circle cx="240" cy="132" r="24" fill={accent} />
        <circle cx="240" cy="132" r="8" fill="#fff" />
        {[[137, 90], [343, 90], [155, 204], [331, 204]].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`} className="ppd-blog-artwork__signal">
            <circle cx={cx} cy={cy} r="20" fill={index % 2 ? secondary : accent} opacity=".16" />
            <circle cx={cx} cy={cy} r="9" fill={index % 2 ? secondary : accent} />
          </g>
        ))}
        <circle cx="137" cy="90" r="3" fill="#fff" />
        <circle cx="343" cy="90" r="3" fill="#fff" />
        <circle cx="155" cy="204" r="3" fill="#fff" />
        <circle cx="331" cy="204" r="3" fill="#fff" />
      </>
    );
  }

  if (type === "industrial") {
    return (
      <>
        <rect x="72" y="39" width="336" height="192" rx="20" fill="#fff" />
        <path d="M105 188v-44l40 23v-30l43 28v-22l43 26v43H105Z" fill={secondary} opacity=".82" />
        <path d="M113 144v-25h20v36M277 212v-81l38-24 39 24v81" fill="#eaf0f7" stroke="#cbd8e8" strokeWidth="3" />
        <rect x="291" y="150" width="16" height="25" rx="3" fill={accent} opacity=".7" />
        <rect x="318" y="150" width="16" height="25" rx="3" fill={secondary} opacity=".7" />
        <path d="M282 119h65" stroke="#cbd8e8" strokeWidth="3" />
        <path d="M100 213h264" stroke="#bfcde0" strokeWidth="3" strokeLinecap="round" />
        <path d="M144 98h31M144 111h19" stroke={accent} strokeWidth="5" strokeLinecap="round" />
        <circle className="ppd-blog-artwork__signal" cx="355" cy="91" r="7" fill={accent} />
      </>
    );
  }

  if (type === "cloud") {
    return (
      <>
        <rect x="72" y="39" width="336" height="192" rx="20" fill="#fff" />
        <path d="M137 153a32 32 0 0 1 31-37 47 47 0 0 1 88-5 38 38 0 0 1 41 37 31 31 0 0 1-31 31H167a30 30 0 0 1-30-26Z" fill="#e9f1fc" stroke={accent} strokeWidth="4" />
        <rect x="171" y="160" width="94" height="47" rx="9" fill="#fff" stroke="#cbd8e8" strokeWidth="2" />
        <path d="M171 176h94M187 183v15M218 183v15M249 183v15" stroke="#cbd8e8" strokeWidth="2" />
        <circle cx="184" cy="168" r="3" fill={secondary} />
        <circle cx="195" cy="168" r="3" fill={accent} />
        <path d="M123 205h234" stroke="#d8e2ef" strokeWidth="3" strokeLinecap="round" />
        <circle className="ppd-blog-artwork__signal" cx="309" cy="111" r="7" fill={secondary} />
      </>
    );
  }

  return (
    <>
      <rect x="72" y="39" width="336" height="192" rx="20" fill="#fff" />
      <circle cx="240" cy="134" r="68" fill="none" stroke="#e4eaf3" strokeWidth="2" />
      <ellipse cx="240" cy="134" rx="31" ry="68" fill="none" stroke={accent} strokeOpacity=".65" strokeWidth="2" />
      <path d="M173 134h134M184 105h112M184 163h112" stroke="#d6e0ed" strokeWidth="2" />
      <path d="M192 87a68 68 0 0 0 0 94M288 87a68 68 0 0 1 0 94" fill="none" stroke={secondary} strokeOpacity=".55" strokeWidth="2" />
      {[[197, 110], [282, 91], [265, 163], [212, 175], [306, 136]].map(([cx, cy], index) => (
        <circle key={`${cx}-${cy}`} className="ppd-blog-artwork__signal" cx={cx} cy={cy} r="5" fill={index % 2 ? secondary : accent} />
      ))}
    </>
  );
}

export default function BlogArtwork({ type, title }) {
  const [background, accent, secondary] = artworkThemes[type] || artworkThemes.strategy;
  const label = artworkLabels[type] || artworkLabels.strategy;

  return (
    <svg
      className="ppd-blog-artwork"
      viewBox="0 0 480 270"
      role="img"
      aria-label={`Illustration for ${title}`}
      focusable="false"
    >
      <rect width="480" height="270" fill={background} />
      <circle cx="401" cy="35" r="128" fill={accent} opacity=".07" />
      <circle cx="60" cy="243" r="105" fill={secondary} opacity=".07" />
      <path d="M-25 164C61 105 93 79 178 98s131 71 225 19 111-40 122-32" fill="none" stroke={secondary} strokeOpacity=".43" strokeWidth="1.5" />
      <path d="M-28 188C62 129 103 107 181 126s129 70 220 20 101-39 121-31" fill="none" stroke={secondary} strokeOpacity=".17" strokeWidth="1" />
      <ArtworkScene type={type} accent={accent} secondary={secondary} />
      <g className="ppd-blog-artwork__label">
        <rect x="28" y="239" width="252" height="25" rx="12.5" fill="#152b50" />
        <circle cx="45" cy="251.5" r="5" fill={accent} />
        <circle cx="45" cy="251.5" r="9" fill={accent} opacity=".2" />
        <text
          x="59"
          y="256"
          fill="#fff"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing=".15"
        >
          {label}
        </text>
      </g>
    </svg>
  );
}
