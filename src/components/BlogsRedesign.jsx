import React from "react";
import "./BlogsRedesign.css";
import BlogArtwork from "./BlogArtwork";

const blogs = [
    {
     artwork: "opportunity",
     category: "2027 GTM OUTLOOK",
     title: "When Does a Revenue Opportunity Actually Begin?",
     description:
       "A research question for GTM leaders: how much of your next pipeline already exists before it enters your pipeline?",
     link: "/when-does-a-revenue-opportunity-begin",
   },
    {
     artwork: "planning",
     category: "2027 GTM PLANNING",
     title: "The 2027 GTM Planning Guide: What B2B Leaders Should Reassess Before the New Year",
     description:
       "Before locking next year's strategy, revisit your ICP, account timing, revenue-plan assumptions, and the market changes that could shift priorities.",
     link: "/2027-gtm-planning-guide",
   },
    {
     artwork: "trends",
     category: "2027 GTM OUTLOOK",
     title: "10 B2B GTM Trends to Watch in 2027",
     description:
       "From AI-powered decision support to more dynamic account prioritization, explore the shifts likely to shape B2B go-to-market in 2027.",
     link: "/10-b2b-gtm-trends-2027",
   },
    {
     artwork: "b2bPlatforms",
     category: "B2B INTELLIGENCE",
     title: "Beyond Contact Data: 8 B2B Intelligence Platforms Reshaping GTM",
     description:
       "Compare eight platforms across contact, account, intent, technology, buying group, and timing intelligence—and see how each supports a different GTM need.",
     link: "/b2b-intelligence-platforms-reshaping-gtm",
   },
    {
     artwork: "technographicsTimeline",
     category: "TECHNOLOGY INTELLIGENCE",
     title: "What If Your Technographic Data Is Already Outdated?",
     description:
       "Technographic snapshots show what an account uses. Explore why change, detection dates, and technology timelines can reveal a more useful GTM context.",
     link: "/what-if-your-technographic-data-is-already-outdated",
   },
    {
     artwork: "predictive",
     title: "How Predictive Intelligence Is Transforming B2B Demand Generation",
     description:
       "Most B2B demand engines still run on hindsight: past engagement, static ICPs, and delayed signals. That worked when buying cycles were linear.  They're not anymore. What's changing is simple: demand is no longer captured, it's anticipated.",
     link: "/how-predictive-intelligence-is-transforming-b2b-demand-generation",
   },
    {
     artwork: "intent",
     title: "B2B Intent Data vs Traditional Lead Scoring: What Actually Drives Pipeline?",
     description:
       "For more than a decade, B2B revenue teams have relied on traditional lead scoring to decide where sales time should be spent. The logic was simple. If someone opened emails, downloaded content, visited product pages, and attended webinars,",
     link: "/b2b-intent-data-vs-traditional-lead-scoring",
   },
   {
     artwork: "expansion",
     title: "Will Expansion Revenue Overtake Net-New Acquisition in 2026?",
     description:
       "Where will predictable B2B revenue growth come from in 2026? For years, go-to-market strategies relied heavily on net-new customer acquisition, market expansion, and pipeline velocity. That model worked when buying cycles were shorter, and demand generation was easier to influence.",
     link: "/will-expansion-revenue-overtake-net-new-acquisition-in-2026",
   },
   {
     artwork: "audience",
     title: "The New Rules of B2B Audience Penetration for 2026",
     description:
       "For years, audience penetration was treated as a straightforward reach exercise: get in front of the right companies, touch enough contacts, and assume the message would eventually land.That structure no longer holds. Buying groups have expanded, internal influence dynamics have shifted,",
     link: "/the-new-rules-of-b2b-audience-penetration-for-2026",
   },
  {
    artwork: "forecast",
    title: "The 2026 GTM Reset: How Enterprises Will Build Predictable Growth in an Uncertain Market",
    description:
      "As 2026 approaches, enterprises are facing a familiar but sharper challenge: market volatility continues to rise while growth expectations remain firmly intact.Demand signals are inconsistent, buying committees expand without warning, ",
    link: "/how-enterprise-will-build-predictable-growth-in-an-uncertain-market",
  },
  {
    artwork: "stack",
    title: "5 Reasons Why Technographics is the Secret Ingredient to Precision Messaging",
    description:
      "In a market where differentiation is increasingly difficult, the organizations that win are those that understand their prospects at a deeper, more operational level. Demographics and firmographics offer useful context, but they no longer provide ...",
    link: "/why-technographics-is-the-secret-ingredient-to-precision-messaging",
  },
   {
    artwork: "competitiveStack",
    title: "How Technographics Drive Smarter GTM, ABM, and Competitive Advantage",
    description:
      "In enterprise decision-making, the strongest competitive advantages are often created by clarity about markets, customers, and the systems that power them. For many organizations, that clarity increasingly comes from understanding...",
    link: "/how-technographics-drive-smarter-gtm-abm-and-competitive-advantage",
  },
    {
    artwork: "displacement",
    title: "Winning Renewals You Never Had: Turning Your Competitor's Customers into Your Growth Engine",
    description:
      "Every GTM strategy talks about \"net new.\" New leads, new markets, new opportunities. But here's the truth: most new pipeline is wasted. Research shows up to 60% of outbound efforts target buyers still locked into contracts...",
    link: "/turning-your-competitors-customers-into-your-growth-engine",
  },
  {
    artwork: "customerHealth",
    title: "Customer Success Meets Competitive Strategy: How Renewal Intelligence Wins Against the Odds",
    description:
      "Customer Success used to be defined by satisfaction surveys, onboarding checklists, and renewal rates. It was about defense, holding onto what you already had. But in today's B2B landscape, that isn't enough.",
    link: "/how-renewal-intelligence-win-against-the-odd",
  },
   {
    artwork: "arr",
    title: "Renewals Are the New ARR: 4 Smart Ways to Build Predictable Growth Using Renewal Intelligence",
    description:
      "For years, Annual Recurring Revenue (ARR) has been the trophy metric in B2B tech. Land the logo, lock the deal, scale the chart. But here's the thing: real, sustainable growth doesn't come from the next big logo.",
    link: "/renewal-are-the-arr-4-smart-ways-to-build-drive-growth-with-renewal-intelligence",
  },
  {
    artwork: "timing",
    title: "The Strategic Imperative of Renewal Timing: Mastering the 100-Day Advantage",
    description:
      "Businesses unknowingly leave revenue on the table due to misaligned subscription renewals, simultaneously missing prime opportunities to win new business from competitors.  In the high-stakes world of recurring revenue, timing isn't just...",
    link: "/strategic-imperative-of-renewal-timings-mastering-the-100-day-advantage",
  },
  {
    artwork: "strategy",
    title: "Unlocking the Full Potential of Data-Driven Business Strategies",
    date: "7 August, 2024",
    description:
      "In today's hyper-competitive landscape, data is the lifeblood of business success. Companies that effectively harness the power of data are better positioned to innovate, optimize operations, and drive growth.",
    link: "/unlocking-the-full-potential-of-data-driven-business-strategies.pdf",
  },
  {
    artwork: "connectivity",
    title: "How Data Adoption is Shaping the Future of Connectivity.",
    date: "14 August, 2024",
    description:
      "The global telecommunications industry is experiencing a profound transformation, driven by rapid technological advancements, the widespread adoption of smart devices and the growing demand for high-speed internet connectivity.",
    link: "/how-data-adoption-is-shaping-the-future-of-connectivity.pdf",
  },
  {
    artwork: "industrial",
    title: "Why Data-Driven Go-to-Market Innovation Matters for Industrial Companies",
    date: "21 August, 2024",
    description:
      "Industrial companies are at a pivotal moment where they must innovate their traditional go-to-market strategies by embracing digital transformation. The confluence of emerging digital commerce...",
    link: "/why-data-and-tech-enabled-go-to-market-innovation-is-essential-for-industrial-companies.pdf",
  },
  {
    artwork: "cloud",
    title: "Why Companies Are Taking Control of Their Cloud Infrastructure?",
    date: "4 September, 2024",
    description:
      "With the rising complexity of cloud services and evolving business needs, many companies are reconsidering their reliance on public cloud infrastructure and opting for private or hybrid cloud models, including moving to their own cloud data servers.",
    link: "/why-companies-are-taking-control-of-their-cloud-infrastructure.pdf",
  },
  {
    artwork: "transformation",
    title: "The Impact of Data-Driven Transformation in the IT Industry Across all Regions",
    date: "11 September, 2024",
    description:
      "The IT industry is being transformed by the power of data. From cloud computing to artificial intelligence, data-driven technologies are reshaping businesses across the globe. This whitepaper delves into the data-driven transformation...",
    link: "/the-impact-of-data-driven-transformation-in-the-it-industry-across-all-regions.pdf",
  },
];

const BlogsRedesign = () => {
  return (
    <main className="ppd-blogs-page">
      <section className="ppd-blogs-hero">
        <div className="ppd-blogs-hero-inner">
          <span className="ppd-blogs-eyebrow">
            INSIGHTS & ANALYSIS
          </span>
          <h1 className="ppd-blogs-title">
            Insights & Analysis
          </h1>
          <div className="ppd-blogs-rule"></div>
          <p className="ppd-blogs-lead">
            Expert insights, industry trends, and data-driven strategies to help you lead with intelligence in your GTM and ABM journey.
          </p>
        </div>
      </section>

      <section className="ppd-blogs-body-section">
        <div className="ppd-blogs-grid">
          {blogs.map((blog, index) => (
            <article className="ppd-blog-card" key={index}>
              <div className="ppd-blog-image-wrap">
                <a href={blog.link} aria-label={`Read ${blog.title}`}>
                  <BlogArtwork type={blog.artwork} title={blog.title} />
                </a>
              </div>
              <div className="ppd-blog-content">
                {(blog.category || blog.date) && (
                  <div className="ppd-blog-meta">
                    <span>{blog.category || blog.date}</span>
                  </div>
                )}
                <h2 className="ppd-blog-card-title">
                  <a href={blog.link}>
                    {blog.title}
                  </a>
                </h2>
                {blog.description && (
                  <p className="ppd-blog-description">
                    {blog.description}
                  </p>
                )}
                {blog.description && (
                  <a
                    href={blog.link}
                    className="ppd-blog-read-more"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793L9.146 4.354a.5.5 0 1 1 .708-.708l4.5 4.5a.498.498 0 0 1 .146.35.498.498 0 0 1-.146.35l-4.5 4.5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogsRedesign;
