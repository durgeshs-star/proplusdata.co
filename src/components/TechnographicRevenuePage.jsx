import React, { useEffect, useRef, useState } from "react";

const workflow = [
  {
    number: "01",
    title: "Map technology installations",
    text: "Identify technology installations across millions of company websites and assemble a clear view of each account's stack.",
    tags: ["Salesforce", "AWS", "Microsoft 365", "Slack"],
  },
  {
    number: "02",
    title: "Build a 360-degree technology profile",
    text: "See what an account uses, when each technology was first detected, and how its environment changes over time.",
    tags: ["Stack profile", "First detected", "Company details"],
  },
  {
    number: "03",
    title: "Find your best-fit accounts",
    text: "Create focused segments from technology combinations and adoption patterns that match your ideal customer profile.",
    tags: ["Technology", "Industry", "Company size"],
  },
  {
    number: "04",
    title: "Refresh and track changes",
    text: "Review refreshed technology data every 45 days and follow new installations, removals, and other changes across target accounts.",
    tags: ["Added", "Removed", "No change"],
  },
];

const opportunities = [
  ["Find accounts worth more", "Prioritize companies whose technology environment creates a strong fit for your products and solutions."],
  ["Grow existing accounts", "Spot stack expansion that could open up cross-sell, upsell, and add-on conversations."],
  ["Take share from competitors", "Find accounts using competing technologies and identify potential displacement opportunities."],
  ["Get ahead of new spend", "See technology additions and changes that may signal a new investment cycle."],
];

const signals = [
  "Technology stack and vendor intelligence",
  "Product-level technology detection",
  "Detection dates and timelines",
  "Technology additions and removals",
  "Adoption and stack-change signals",
  "Competitive technology intelligence",
  "Expansion and cross-sell opportunities",
];

const outcomes = [
  ["Technology detection", "Detect technology installations within 24 hours of deployment across company websites."],
  ["CRM integration", "Bring technology intelligence into Salesforce, HubSpot, and other major CRM platforms."],
  ["Custom segments", "Create account segments using technology combinations and categories."],
  ["Change alerts", "Follow important additions and removals from target account stacks."],
];

const journey = [
  ["Technology stack", "See the systems and vendors already present in an account.", "Your team already uses Salesforce. How does that fit with the growth plans you're prioritizing this quarter?", "Salesforce detected", "A clear view of the tools already powering the account.", ["Salesforce", "AWS", "Microsoft 365"]],
  ["Technology change", "Track when technologies appear, disappear, or change.", "We noticed a recent change in your technology stack. Is improving this part of your workflow a priority?", "New technology detected", "A recent addition could point to a new initiative or investment.", ["Added: Snowflake", "Salesforce", "AWS"]],
  ["Commercial signal", "Connect a stack pattern or change to a relevant business need.", "Teams with a setup like yours often look for ways to make these tools work better together. Is that on your roadmap?", "Integration opportunity", "A compatible stack can create a natural opening to discuss fit.", ["Salesforce", "HubSpot", "Integration fit"]],
  ["Sales opportunity", "Give sales a timely, specific reason to start a conversation.", "Would it be useful to compare notes on how your current stack could support your next stage of growth?", "Ready for outreach", "Give your team a specific, timely reason to reach out.", ["High-fit account", "Recent signal", "Talk track ready"]],
];

function Eyebrow({ children }) {
  return <p className="ppd-revtech__eyebrow"><span aria-hidden="true" />{children}</p>;
}

export default function TechnographicRevenuePage() {
  const [activeStep, setActiveStep] = useState(0);
  const pageRef = useRef(null);
  const activeJourney = journey[activeStep];

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const targets = page.querySelectorAll(
      ".ppd-revtech__hero-copy, .ppd-revtech__dashboard, .ppd-revtech__signal-row > div, .ppd-revtech__signal-row aside, .ppd-revtech__blindspot-layout > div, .ppd-revtech__blindspot-layout > ul > li, .ppd-revtech__workflow-heading, .ppd-revtech__step, .ppd-revtech__opportunities-heading, .ppd-revtech__opportunity, .ppd-revtech__signals-heading, .ppd-revtech__signal-list li, .ppd-revtech__journey-layout > .ppd-revtech__eyebrow, .ppd-revtech__journey-title, .ppd-revtech__journey-intro, .ppd-revtech__journey-board, .ppd-revtech__outcome-grid article, .ppd-revtech__results-layout > div, .ppd-revtech__cta .ppd-revtech__shell"
    );
    page.classList.add("ppd-revtech--motion-ready");
    targets.forEach((target) => target.setAttribute("data-scroll-reveal", ""));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ppd-revtech" ref={pageRef}>
      <section className="ppd-revtech__hero">
        <div className="ppd-revtech__hero-grid" aria-hidden="true" />
        <div className="ppd-revtech__shell ppd-revtech__hero-layout">
          <div className="ppd-revtech__hero-copy ppd-revtech__reveal">
            <Eyebrow>Technographics</Eyebrow>
            <h1>Your <em>next revenue opportunity</em> is already in their tech stack.</h1>
            <p>See the technologies your target accounts use, how their stacks change, and where those signals can open a revenue conversation.</p>
            <a className="ppd-revtech__button" href="/contact-us">Get started</a>
          </div>
          <div className="ppd-revtech__dashboard ppd-revtech__reveal" aria-label="Illustrative technology intelligence table">
            <div className="ppd-revtech__dashboard-head"><strong>Technographics</strong><span>Account intelligence</span></div>
            <div className="ppd-revtech__filters"><span>Company</span><span>Industry</span><span>Country</span><span>Employee size</span><span>Technology</span></div>
            <div className="ppd-revtech__table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Industry</th><th>Country</th><th>Size</th><th>Technology</th><th>Last detected</th></tr></thead>
                <tbody>
                  <tr><td>Northstar Health</td><td>Healthcare</td><td>United States</td><td>201–500</td><td><b>☁</b> AWS</td><td>Q3 2026</td></tr>
                  <tr><td>Meridian Group</td><td>Business services</td><td>United Kingdom</td><td>501–1,000</td><td><b>◈</b> Salesforce</td><td>Q3 2026</td></tr>
                  <tr><td>Alto Systems</td><td>IT consulting</td><td>India</td><td>201–500</td><td><b>✳</b> Slack</td><td>Q3 2026</td></tr>
                  <tr><td>Harbor Commerce</td><td>Retail</td><td>United States</td><td>1,001–5,000</td><td><b>▦</b> Microsoft 365</td><td>Q3 2026</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ppd-revtech__dashboard-foot"><span><i /> Updated technology signals</span><span>Account view&nbsp; · &nbsp;Change history</span></div>
          </div>
        </div>
      </section>

      <section className="ppd-revtech__intelligence ppd-revtech__section">
        <div className="ppd-revtech__shell">
          <Eyebrow>Technology intelligence</Eyebrow>
          <h2 className="ppd-revtech__section-title">A <em>prospect&apos;s technology stack</em> offers a factual view of the systems behind its business.</h2>
          <div className="ppd-revtech__signal-row">
            <div><Eyebrow>The signal</Eyebrow><p>Understand which technologies are present, when they were detected, and how an account's stack changes. Use those patterns to build technology-based segments and see where your product may fit with the infrastructure already in place.</p></div>
            <aside><Eyebrow>Example</Eyebrow><p>If an account has used Salesforce for several years, you can review its wider stack and assess whether your solution complements, integrates with, or could replace part of that environment.</p><span className="ppd-revtech__spark" aria-hidden="true" /></aside>
          </div>
        </div>
      </section>

      <section className="ppd-revtech__blindspot">
        <div className="ppd-revtech__shell ppd-revtech__blindspot-layout">
          <div><Eyebrow>The blind spot</Eyebrow><strong className="ppd-revtech__stat">73%</strong><p className="ppd-revtech__stat-caption">of sales time is wasted on unqualified prospects</p></div>
          <ul><li>You can't see what is already in an account's stack.</li><li>It is harder to tell which accounts truly fit.</li><li>High-fit prospects can get buried in a broad list.</li><li>Reps may reach out without useful technical context.</li></ul>
        </div>
      </section>

      <section className="ppd-revtech__workflow ppd-revtech__section">
        <div className="ppd-revtech__shell ppd-revtech__workflow-panel">
          <div className="ppd-revtech__workflow-heading">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="ppd-revtech__section-title">From technology discovery to a <em>focused target segment.</em></h2>
            <p>Four simple steps turn the technology landscape into a clearer view of where to focus.</p>
          </div>
          <div className="ppd-revtech__steps">
            {workflow.map((step) => <article className="ppd-revtech__step" key={step.number}>
              <div className="ppd-revtech__step-marker"><span className="ppd-revtech__step-number">{step.number}</span><span>Step {step.number}</span></div>
              <div className="ppd-revtech__step-copy"><h3>{step.title}</h3><p>{step.text}</p></div>
              <ul className="ppd-revtech__step-tags" aria-label={`${step.title} details`}>{step.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>)}
          </div>
        </div>
      </section>

      <section className="ppd-revtech__opportunities ppd-revtech__section">
        <div className="ppd-revtech__shell ppd-revtech__opportunities-layout">
          <div className="ppd-revtech__opportunities-heading">
            <Eyebrow>Revenue opportunities</Eyebrow>
            <h2 className="ppd-revtech__section-title">Turn their technology stack into a <em>sales pipeline.</em></h2>
            <p>Use the technologies already in an account to find a timely, relevant path to growth.</p>
          </div>
          <div className="ppd-revtech__opportunity-list">
            {opportunities.map(([title, text], i) => <article className="ppd-revtech__opportunity" key={title}>
              <span className="ppd-revtech__opportunity-number">0{i + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <span className="ppd-revtech__opportunity-arrow" aria-hidden="true">↗</span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="ppd-revtech__signals ppd-revtech__section">
        <div className="ppd-revtech__shell ppd-revtech__signals-layout">
          <div className="ppd-revtech__signals-heading">
            <Eyebrow>Technology signals</Eyebrow>
            <h2 className="ppd-revtech__section-title">See the technology <em>signals behind revenue.</em></h2>
            <p className="ppd-revtech__section-intro">Go beyond a point-in-time view of an account. See what is installed, what has changed, and where those signals could matter commercially.</p>
            <span className="ppd-revtech__signals-caption"><i aria-hidden="true" />A clearer picture. A smarter next move.</span>
          </div>
          <ul className="ppd-revtech__signal-list">{signals.map((signal, index) => <li key={signal}>
            <span className="ppd-revtech__signal-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="ppd-revtech__signal-name">{signal}</span>
            <span className="ppd-revtech__signal-arrow" aria-hidden="true">↗</span>
          </li>)}</ul>
        </div>
      </section>

      <section className="ppd-revtech__journey ppd-revtech__section">
        <div className="ppd-revtech__shell ppd-revtech__journey-layout">
          <Eyebrow>Signal to action</Eyebrow>
          <h2 className="ppd-revtech__section-title ppd-revtech__journey-title">Connect technology context to a <em>relevant sales conversation.</em></h2>
          <p className="ppd-revtech__journey-intro">Turn real technology signals into a timely, thoughtful opening for your next conversation.</p>
          <div className="ppd-revtech__journey-board">
            <div className="ppd-revtech__journey-tabs" role="tablist" aria-label="Technology signal journey">
              {journey.map(([label], index) => <button key={label} id={`ppd-revtech-journey-tab-${index}`} type="button" role="tab" aria-controls="ppd-revtech-journey-panel" aria-selected={activeStep === index} className={activeStep === index ? "is-active" : ""} onClick={() => setActiveStep(index)}><span>{String(index + 1).padStart(2, "0")}</span>{label}<i aria-hidden="true">↗</i></button>)}
            </div>
            <div id="ppd-revtech-journey-panel" className="ppd-revtech__journey-panel" role="tabpanel" aria-labelledby={`ppd-revtech-journey-tab-${activeStep}`} tabIndex="0">
              <div className="ppd-revtech__journey-panel-content" key={activeStep}>
                <div className="ppd-revtech__journey-step-copy">
                  <span className="ppd-revtech__journey-step-label">Step {String(activeStep + 1).padStart(2, "0")} <i /> 04</span>
                  <h3>{activeJourney[0]}</h3>
                  <p>{activeJourney[1]}</p>
                  <div className="ppd-revtech__journey-insight"><span className="ppd-revtech__journey-insight-dot" />{activeJourney[4]}</div>
                </div>
                <div className="ppd-revtech__journey-preview">
                  <div className="ppd-revtech__journey-preview-body">
                    <div className="ppd-revtech__journey-stack-head"><span>TECHNOLOGY STACK</span><span>{activeJourney[3]}</span></div>
                    <div className="ppd-revtech__journey-stack">{activeJourney[5].map((technology, index) => <span key={technology}><i aria-hidden="true">{index === 0 ? "●" : "○"}</i>{technology}</span>)}</div>
                    <div className="ppd-revtech__conversation-card">
                      <span><i aria-hidden="true" /> Suggested conversation</span>
                      <p>“{activeJourney[2]}”</p>
                    </div>
                  </div>
                  <div className="ppd-revtech__journey-preview-footer"><span><i /> Signal matched to an account</span><span>View account <b aria-hidden="true">↗</b></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ppd-revtech__outcomes ppd-revtech__section">
        <div className="ppd-revtech__shell">
          <Eyebrow>Revenue outcomes</Eyebrow>
          <div className="ppd-revtech__outcome-grid">{outcomes.map(([title, text]) => <article key={title}><span aria-hidden="true">✳</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="ppd-revtech__results">
        <div className="ppd-revtech__shell ppd-revtech__results-layout"><div><Eyebrow>The results</Eyebrow><blockquote>“Technology context helped us focus outbound. We now book more meetings with fewer, more relevant conversations.”</blockquote><p>VP, Sales · TechCorp</p></div><div className="ppd-revtech__results-stat">2.3<span>×</span></div></div>
      </section>

      <section className="ppd-revtech__cta"><div className="ppd-revtech__shell"><Eyebrow>Make the next move</Eyebrow><h2>Find the opportunity already in your market.</h2><a className="ppd-revtech__button" href="/contact-us">Talk to our team</a></div></section>
    </div>
  );
}
