import React from "react";

const blogs = [
    {
     img: "assets/images/predivtive-intelligence-transforming.png",
     title: "How Predictive Intelligence Is Transforming B2B Demand Generation",
     description:
       "Most B2B demand engines still run on hindsight: past engagement, static ICPs, and delayed signals. That worked when buying cycles were linear.  They’re not anymore. What’s changing is simple: demand is no longer captured, it’s anticipated.",
     link: "/how-predictive-intelligence-is-transforming-b2b-demand-generation",
     alt:"how-predictive-intelligence-is-transforming-b2b-demand-generation",
   },
    {
     img: "assets/images/what-really-drives-b2b-pipeline.png",
     title: "B2B Intent Data vs Traditional Lead Scoring: What Actually Drives Pipeline?",
     description:
       "For more than a decade, B2B revenue teams have relied on traditional lead scoring to decide where sales time should be spent. The logic was simple. If someone opened emails, downloaded content, visited product pages, and attended webinars,",
     link: "/b2b-intent-data-vs-traditional-lead-scoring",
     alt:"b2b-intent-data-vs-traditional-lead-scoring",
   },
   {
     img: "assets/images/expansion-revenue-overtake-net-new-acquisition.jpg",
     title: "Will Expansion Revenue Overtake Net-New Acquisition in 2026?",
     description:
       "Where will predictable B2B revenue growth come from in 2026? For years, go-to-market strategies relied heavily on net-new customer acquisition, market expansion, and pipeline velocity. That model worked when buying cycles were shorter, and demand generation was easier to influence.",
     link: "/will-expansion-revenue-overtake-net-new-acquisition-in-2026",
     alt:"will-expansion-revenue-overtake-net-new-acquisition-in-2026",
   },
   {
     img: "assets/images/new-rules-of-b2b-audience-penetration.webp",
     title: "The New Rules of B2B Audience Penetration for 2026",
     description:
       "For years, audience penetration was treated as a straightforward reach exercise: get in front of the right companies, touch enough contacts, and assume the message would eventually land.That structure no longer holds. Buying groups have expanded, internal influence dynamics have shifted,",
     link: "/the-new-rules-of-b2b-audience-penetration-for-2026",
     alt:"the-new-rules-of-b2b-audience-penetration-for-2026",
   },
  {
    img: "assets/images/the-2026-gtm-reset.webp",
    title: "The 2026 GTM Reset: How Enterprises Will Build Predictable Growth in an Uncertain Market",
    // date: "7 August, 2024",
    description:
      "As 2026 approaches, enterprises are facing a familiar but sharper challenge: market volatility continues to rise while growth expectations remain firmly intact.Demand signals are inconsistent, buying committees expand without warning, ",
    link: "/how-enterprise-will-build-predictable-growth-in-an-uncertain-market",
    alt:"enterprise-will-build-predictable-growth",
  },
  {
    img: "assets/images/technographics-is-the-secret-ingredient-to-precision-messaging.webp",
    title: "5 Reasons Why Technographics is the Secret Ingredient to Precision Messaging",
    // date: "7 August, 2024",
    description:
      "In a market where differentiation is increasingly difficult, the organizations that win are those that understand their prospects at a deeper, more operational level. Demographics and firmographics offer useful context, but they no longer provide ...",
    link: "/why-technographics-is-the-secret-ingredient-to-precision-messaging",
    alt:"Technographics-is-the-secret-ingredient-to-precision-messaging",
  },
   {
    img: "assets/images/how-technographics-drive-smarter-gtm-abm-and-competitive-advantage .webp",
    title: "How Technographics Drive Smarter GTM, ABM, and Competitive Advantage",
    // date: "7 August, 2024",
    description:
      "In enterprise decision-making, the strongest competitive advantages are often created by clarity about markets, customers, and the systems that power them. For many organizations, that clarity increasingly comes from understanding...",
    link: "/how-technographics-drive-smarter-gtm-abm-and-competitive-advantage",
    alt:"how-technographics-drive-smarter-gtm-abm-and-competitive-advantage",
  },
    {
    img: "assets/images/competitors-growth.webp",
    title: "Winning Renewals You Never Had: Turning Your Competitor’s Customers into Your Growth Engine",
    // date: "7 August, 2024",
    description:
      "Every GTM strategy talks about “net new.” New leads, new markets, new opportunities. But here’s the truth: most new pipeline is wasted. Research shows up to 60% of outbound efforts target buyers still locked into contracts...",
    link: "/turning-your-competitors-customers-into-your-growth-engine",
    alt:"turning-your-competitors-customers-into-your-growth-engine",
  },
  {
    img: "assets/images/renewal-intelligence-win-against-the-odd.webp",
    title: "Customer Success Meets Competitive Strategy: How Renewal Intelligence Wins Against the Odds",
    // date: "7 August, 2024",
    description:
      "Customer Success used to be defined by satisfaction surveys, onboarding checklists, and renewal rates. It was about defense, holding onto what you already had. But in today’s B2B landscape, that isn’t enough.",
    link: "/how-renewal-intelligence-win-against-the-odd",
    alt:"renewal ontelligence win against the odd",
  },
   {
    img: "assets/images/renewals-arr.webp",
    title: "Renewals Are the New ARR: 4 Smart Ways to Build Predictable Growth Using Renewal Intelligence",
    // date: "7 August, 2024",
    description:
      "For years, Annual Recurring Revenue (ARR) has been the trophy metric in B2B tech. Land the logo, lock the deal, scale the chart. But here’s the thing: real, sustainable growth doesn’t come from the next big logo.",
    link: "/renewal-are-the-arr-4-smart-ways-to-build-drive-growth-with-renewal-intelligence",
    alt:"renewal annual recurring revenue",
  },
  {
    img: "assets/images/renewal-blog.png",
    title: "The Strategic Imperative of Renewal Timing: Mastering the 100-Day Advantage",
    // date: "7 August, 2024",
    description:
      "Businesses unknowingly leave revenue on the table due to misaligned subscription renewals, simultaneously missing prime opportunities to win new business from competitors.  In the high-stakes world of recurring revenue, timing isn't just...",
    link: "/strategic-imperative-of-renewal-timings-mastering-the-100-day-advantage",
    alt:"strategic imperative of renewal timing",
  },
  {
    img: "assets/images/blog1.webp",
    title: "Unlocking the Full Potential of Data-Driven Business Strategies",
    date: "7 August, 2024",
    description:
      "In today’s hyper-competitive landscape, data is the lifeblood of business success. Companies that effectively harness the power of data are better positioned to innovate, optimize operations, and drive growth.",
    link: "/unlocking-the-full-potential-of-data-driven-business-strategies.pdf",
    alt:"data driven strategies",
  },
  {
    img: "assets/images/blog2.webp",
    title: "How Data Adoption is Shaping the Future of Connectivity.",
    date: "14 August, 2024",
    description:
      "The global telecommunications industry is experiencing a profound transformation, driven by rapid technological advancements, the widespread adoption of smart devices and the growing demand for high-speed internet connectivity.",
    link: "/how-data-adoption-is-shaping-the-future-of-connectivity.pdf",
    alt:"data adoption",
  },
  {
    img: "assets/images/blog5.webp",
    title: "Why Data-Driven Go-to-Market Innovation Matters for Industrial Companies",
    date: "21 August, 2024",
    description:
      "Industrial companies are at a pivotal moment where they must innovate their traditional go-to-market strategies by embracing digital transformation. The confluence of emerging digital commerce...",
    link: "/why-data-and-tech-enabled-go-to-market-innovation-is-essential-for-industrial-companies.pdf",
     alt:"gtm innovation",
  },
  {
    img: "assets/images/blog4.webp",
    title: "Why Companies Are Taking Control of Their Cloud Infrastructure?",
    date: "4 September, 2024",
    description:
      "With the rising complexity of cloud services and evolving business needs, many companies are reconsidering their reliance on public cloud infrastructure and opting for private or hybrid cloud models, including moving to their own cloud data servers.",
    link: "/why-companies-are-taking-control-of-their-cloud-infrastructure.pdf",
     alt:"cloud-infrastructure",
  },
  {
    img: "assets/images/blog6.webp",
    title: "The Impact of Data-Driven Transformation in the IT Industry Across all Regions",
    date: "11 September, 2024",
    description:
      "The IT industry is being transformed by the power of data. From cloud computing to artificial intelligence, data-driven technologies are reshaping businesses across the globe. This whitepaper delves into the data-driven transformation...",
    link: "/the-impact-of-data-driven-transformation-in-the-it-industry-across-all-regions.pdf",
     alt:"data driven transformation",
  },
];

const BlogSection = () => {
  return (
    <div className="blog_area pt-85 pb-65">
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="single_blog mb-30">
                <div className="single_blog_thumb pb-4">
                  <a href={blog.link}>
                    <img src={blog.img} alt={blog.alt} />
                  </a>
                </div>
                <div className="single_blog_content pl-4 pr-4">
                  <div className="techno_blog_meta text-left">
                    <span className="meta-date">{blog.date}</span>
                  </div>
                  <div className="blog_page_title pb-1 pt-4 text-left">
                    <h3>
                      <a href={blog.link}>{blog.title}</a>
                    </h3>
                  </div>
                  {blog.description && (
                    <div className="blog_description text-left">
                      <p>{blog.description}</p>
                    </div>
                  )}
                  {blog.description && (
                    <div className="blog_page_button pb-4 text-left">
                      <a href={blog.link} className="read-more-link">
                        Read More{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          style={{ marginLeft: "5px" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793L9.146 4.354a.5.5 0 1 1 .708-.708l4.5 4.5a.498.498 0 0 1 .146.35.498.498 0 0 1-.146.35l-4.5 4.5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
