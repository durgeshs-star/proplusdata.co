import React from "react";
import { Link } from "react-router-dom";

const usecases = [
  {
    img: "assets/images/siemens-case-study.webp",
    title: "How a Fortune 500 Manufacturer Transformed GTM with ProPlus",
    description:
      "ProPlus enabled a Fortune 500 manufacturer to boost pipeline precision across 11 regions and 10+ industries, driving 2.8x engagement and 43% GTM efficiency gains.",
    link: "/how-a-fortune-500-manufacturer-transformed-gtm-with-proplus",
    alt: "fortune500-gtm-case-study",
  },
  {
    img: "assets/images/renewal-intelligence-use-case.svg",
    title:
      "ProPlus' Renewal Intelligence Fuel 3X Pipeline Velocity for Leading Cloud Enterprise",
    description:
      "ProPlus Data enabled a global cloud leader to accelerate demand and pipeline velocity by leveraging renewal, technographic...",
    link: "/proplus-renewal-intelligence-boosts-cloud-enterprise-pipeline-3x",
    alt: "proplus-renewal-intelligence-boosts-cloud-enterprise-pipeline-3x",
  },
  {
    img: "assets/images/use-case1.webp",
    title:
      "Cracking The Code: APAC CX Transformation Success Unveiled !",
    description:
      "Our Client, a global tech solution provider of Cloud-based Customer Experience (CX) driven by the transformative capabilities of CX One, sought to address key pain points in the APAC region.",
    link: "https://proplusdata.co/cracking-the-code-apac-transformation-success-unveiled.pdf",
    alt: "apac-cx-transformation-success",
  },
  {
    img: "assets/images/use-case5.webp",
    title:
      "How ProPlus Data Accelerated ASEAN Market penetration Of A Western Market Leader IN Cyber Security?",
    description:
      "In the cybersecurity sector, our client is a standout leader, renowned for pioneering solutions in the...",
    link: "https://proplusdata.co/how-proplus-data-accelerated-asean-market-penetration-of-a-westren-market-leader-in-cybersecurity.pdf",
    alt: "accelerating-asean-market-penetration",
  },
  {
    img: "assets/images/use-case4.webp",
    title:
      "How ProPlus Data's Dashboard Resonates Powerful Message Than An Aggregated Tool?",
    description:
      "Our client empowers companies of all sizes with the tools and technologies to bring ideas from concept to creation faster and more efficiently.",
    link: "https://proplusdata.co/how-proplus-data's-dashboard-resonates-powerful-message-than-an-aggregated-tool.pdf",
    alt: "the-power-of-proplus-data-dashboard",
  },
  {
    img: "assets/images/use-case3.webp",
    title:
      "How ProPlus Data Helped Cloud Computing Giant Find Hidden Gems in a Sea of Accounts.",
    description:
      "Our client, a cloud computing giant, struggled to identify high-value customers among their massive user base. ProPlus Data helped them solve this...",
    link: "https://proplusdata.co/how-proplus-data-helped-cloud-computing-giant-find-hidden-gems-in-a-sea-of-accounts.pdf",
    alt: "proplus-data-cloud-success",
  },
];

// 🔥 Smart Link Component (handles both internal + external)
const SmartLink = ({ link, children, className }) => {
  const isExternal = link.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={link} className={className}>
      {children}
    </Link>
  );
};

const UseCasesComponent = () => {
  return (
    <>
      <section className="ppd-usecases-hero">
        <div className="ppd-usecases-shell">
          <span className="ppd-usecases-eyebrow">
            CASE STUDIES
          </span>
          <h1>Real-World Success Stories</h1>
          <div className="ppd-usecases-rule"></div>
          <p>Discover how leading organizations leverage ProPlus Data to transform their GTM strategies and achieve remarkable results across industries.</p>
        </div>
      </section>

      <section className="ppd-usecases-content">
        <div className="ppd-usecases-grid">
          {usecases.map((blog, index) => (
            <article className="ppd-usecase-card" key={index}>
              <div className="ppd-usecase-image">
                <SmartLink link={blog.link} className="ppd-usecase-image-link">
                  <img src={blog.img} alt={blog.alt} />
                </SmartLink>
              </div>

              <div className="ppd-usecase-content">
                <h2 className="ppd-usecase-title">
                  <SmartLink link={blog.link}>
                    {blog.title}
                  </SmartLink>
                </h2>

                {blog.description && (
                  <p className="ppd-usecase-description">{blog.description}</p>
                )}

                {blog.description && (
                  <div className="ppd-usecase-action">
                    <SmartLink link={blog.link} className="ppd-usecase-link">
                      Read More
                      <svg
                        className="ppd-usecase-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793L9.146 4.354a.5.5 0 1 1 .708-.708l4.5 4.5a.498.498 0 0 1 .146.35.498.498 0 0 1-.146.35l-4.5 4.5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </SmartLink>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default UseCasesComponent;