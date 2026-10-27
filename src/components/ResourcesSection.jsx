import React from "react";
import "./ResourcesSection.css";

const blogs = [

    {
    img: "assets/images/competitors-growth.webp",
    title: " Turning Your Competitor's Customers into Your Growth Engine",
    link: "/turning-your-competitors-customers-into-your-growth-engine",
    alt:"turning-your-competitors-customers-into-your-growth-engine",
  },
  {
    img: "assets/images/renewal-intelligence-win-against-the-odd.webp",
    title: " How Renewal Intelligence Wins Against the Odds",
    link: "/how-renewal-intelligence-win-against-the-odd",
    alt:"renewal intelligence win against the odd",
  },
   {
    img: "assets/images/renewals-arr.webp",
    title: " 4 Smart Ways to Build Predictable Growth Using Renewal Intelligence",
    link: "/renewal-are-the-arr-4-smart-ways-to-build-drive-growth-with-renewal-intelligence",
    alt:"renewal annual recurring revenue",
  },
  {
    img: "assets/images/renewal-blog.png",
    title: " Mastering the 100-Day Advantage",
    link: "/strategic-imperative-of-renewal-timings-mastering-the-100-day-advantage",
    alt:"strategic imperative of renewal timing",
  },

];

const ResourcesSection = () => {
  return (
    <div className="ppd-gtm-resources">
      <div className="container">
        <div className="ppd-gtm-resources-header">
          <span className="ppd-gtm-resources-eyebrow">
            INSIGHTS & INTELLIGENCE
          </span>
          <h2 className="ppd-gtm-resources-title">
            GTM Resources
          </h2>
        </div>
        <div className="ppd-gtm-resources-grid">
          {blogs.map((blog, index) => (
            <a
              href={blog.link}
              className="ppd-gtm-resource-card"
              key={index}
            >
              <div className="ppd-gtm-resource-image-wrap">
                <img
                  className="ppd-gtm-resource-image"
                  src={blog.img}
                  alt={blog.alt}
                />
              </div>
              <div className="ppd-gtm-resource-content">
                <h3 className="ppd-gtm-resource-title">
                  {blog.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
