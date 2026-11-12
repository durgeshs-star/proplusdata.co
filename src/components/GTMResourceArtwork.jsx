import React from "react";

const resourceThemes = {
  competitor: { base: "#eaf3f2", primary: "#119f8b", secondary: "#ef9e3b", ink: "#19385a" },
  renewal: { base: "#f0effb", primary: "#7868ca", secondary: "#22a68f", ink: "#25395f" },
  growth: { base: "#f8f0e2", primary: "#df9531", secondary: "#1d9e8d", ink: "#263d61" },
  timing: { base: "#eaf1fb", primary: "#3979cf", secondary: "#e9a23c", ink: "#213b62" },
};

function ResourceScene({ type, theme }) {
  if (type === "competitor") {
    return (
      <>
        <circle cx="87" cy="111" r="44" fill="#fff" opacity=".8" />
        <circle cx="87" cy="111" r="28" fill="#d9e2ed" />
        <circle cx="87" cy="111" r="11" fill="#8798ae" />
        <path d="M119 111h73" fill="none" stroke="#9eafc3" strokeWidth="4" strokeDasharray="5 8" />
        <path d="m177 97 17 14-17 14" fill="none" stroke={theme.primary} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="246" cy="111" r="51" fill={theme.primary} opacity=".12" />
        <circle className="ppd-resource-art__pulse" cx="246" cy="111" r="34" fill="#fff" stroke={theme.primary} strokeWidth="3" />
        <circle cx="246" cy="101" r="10" fill={theme.primary} />
        <path d="M227 131c4-13 11-19 19-19s16 6 20 19" fill={theme.primary} />
        <circle className="ppd-resource-art__dot" cx="294" cy="67" r="7" fill={theme.secondary} />
        <circle cx="193" cy="167" r="5" fill={theme.secondary} />
        <circle cx="278" cy="174" r="5" fill={theme.primary} />
        <path d="M193 167c23 13 47 17 85 7M245 77c14-12 27-16 46-10" fill="none" stroke="#8eb8b6" strokeWidth="2" strokeDasharray="3 6" />
        <rect x="57" y="175" width="72" height="8" rx="4" fill="#c6d3e2" />
        <rect x="57" y="191" width="49" height="6" rx="3" fill="#d6e0ea" />
      </>
    );
  }

  if (type === "renewal") {
    return (
      <>
        <rect x="43" y="47" width="126" height="143" rx="15" fill="#fff" stroke="#dce4ef" strokeWidth="2" />
        <path d="M43 76h126" stroke={theme.primary} strokeWidth="24" />
        <path d="M68 41v17M144 41v17" stroke={theme.ink} strokeWidth="6" strokeLinecap="round" />
        {[88, 112, 136].map((x) => (
          <path key={x} d={`M${x} 94v63`} stroke="#e6ebf2" strokeWidth="2" />
        ))}
        {[109, 132, 155].map((y) => (
          <path key={y} d={`M62 ${y}h91`} stroke="#e6ebf2" strokeWidth="2" />
        ))}
        <rect x="62" y="117" width="20" height="14" rx="4" fill={theme.secondary} />
        <rect x="113" y="140" width="20" height="14" rx="4" fill={theme.primary} />
        <circle cx="231" cy="119" r="52" fill="#fff" opacity=".92" />
        <path d="M210 89a37 37 0 0 1 57 13" fill="none" stroke={theme.primary} strokeWidth="8" strokeLinecap="round" />
        <path d="m265 88 4 17-17-2" fill={theme.primary} />
        <path d="M253 151a37 37 0 0 1-57-13" fill="none" stroke={theme.secondary} strokeWidth="8" strokeLinecap="round" />
        <path d="m198 152-4-17 17 2" fill={theme.secondary} />
        <circle cx="231" cy="119" r="13" fill={theme.primary} opacity=".15" />
        <path d="M231 107v13l9 6" fill="none" stroke={theme.ink} strokeWidth="4" strokeLinecap="round" />
        <circle className="ppd-resource-art__dot" cx="291" cy="62" r="7" fill={theme.secondary} />
      </>
    );
  }

  if (type === "growth") {
    return (
      <>
        <path d="M47 186h251M58 157h240M58 126h240M58 95h240" stroke="#dce5ed" strokeWidth="2" />
        <rect x="78" y="143" width="34" height="43" rx="7" fill={theme.primary} opacity=".6" />
        <rect x="132" y="121" width="34" height="65" rx="7" fill={theme.secondary} opacity=".78" />
        <rect x="186" y="98" width="34" height="88" rx="7" fill={theme.primary} opacity=".85" />
        <rect x="240" y="73" width="34" height="113" rx="7" fill={theme.secondary} />
        <path className="ppd-resource-art__chart" d="m66 132 66-29 47 10 54-49 48-18" fill="none" stroke={theme.ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="132" cy="103" r="6" fill={theme.primary} />
        <circle cx="179" cy="113" r="6" fill={theme.secondary} />
        <circle cx="233" cy="64" r="6" fill={theme.primary} />
        <path d="M261 46h20v20" fill="none" stroke={theme.ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="57" y="201" width="120" height="8" rx="4" fill="#cbd7e3" />
        <circle className="ppd-resource-art__dot" cx="285" cy="54" r="6" fill={theme.primary} />
      </>
    );
  }

  return (
    <>
      <circle cx="164" cy="119" r="83" fill="#fff" opacity=".88" />
      <circle cx="164" cy="119" r="62" fill="none" stroke="#e2e9f2" strokeWidth="12" />
      <circle className="ppd-resource-art__progress" cx="164" cy="119" r="62" fill="none" stroke={theme.primary} strokeWidth="12" strokeLinecap="round" strokeDasharray="270 390" transform="rotate(-90 164 119)" />
      <text x="164" y="119" textAnchor="middle" fill={theme.ink} fontFamily="Arial, Helvetica, sans-serif" fontSize="33" fontWeight="700">100</text>
      <text x="164" y="141" textAnchor="middle" fill={theme.ink} fontFamily="Arial, Helvetica, sans-serif" fontSize="12" fontWeight="700" letterSpacing="2">DAYS</text>
      <rect x="240" y="80" width="57" height="78" rx="10" fill="#fff" stroke="#d8e2ee" strokeWidth="2" />
      <path d="M240 101h57" stroke={theme.secondary} strokeWidth="14" />
      <path d="M254 73v15M283 73v15" stroke={theme.ink} strokeWidth="5" strokeLinecap="round" />
      {[258, 274, 290].map((x) => (
        <path key={x} d={`M${x} 115v28`} stroke="#e4eaf2" strokeWidth="2" />
      ))}
      <circle className="ppd-resource-art__dot" cx="267" cy="124" r="5" fill={theme.primary} />
      <path d="M56 185c20 17 41 22 68 17" fill="none" stroke={theme.secondary} strokeWidth="3" strokeLinecap="round" strokeDasharray="3 7" />
    </>
  );
}

export default function GTMResourceArtwork({ type, title }) {
  const theme = resourceThemes[type] || resourceThemes.growth;

  return (
    <svg
      className={`ppd-resource-art ppd-resource-art--${type}`}
      viewBox="0 0 340 240"
      role="img"
      aria-label={`Illustration: ${title}`}
      focusable="false"
    >
      <defs>
        <linearGradient id={`resource-bg-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.base} />
          <stop offset="100%" stopColor="#fff" />
        </linearGradient>
      </defs>
      <rect width="340" height="240" rx="20" fill={`url(#resource-bg-${type})`} />
      <circle cx="307" cy="24" r="74" fill={theme.secondary} opacity=".1" />
      <circle cx="13" cy="222" r="74" fill={theme.primary} opacity=".09" />
      <path d="M-25 168C54 127 77 91 146 107s111 63 188 3 73-36 104-31" fill="none" stroke={theme.primary} strokeOpacity=".22" strokeWidth="2" />
      <ResourceScene type={type} theme={theme} />
    </svg>
  );
}
