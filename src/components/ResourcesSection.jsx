import React from "react";

const blogs = [

    {
    img: "assets/images/competitors-growth.webp",
    title: " Turning Your Competitor’s Customers into Your Growth Engine",
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
    <div className="blog_area pt-85 pb-65">
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
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
                  {/* {blog.description && (
                    <div className="blog_description text-left">
                      <p>{blog.description}</p>
                    </div>
                  )} */}
                  {/* {blog.description && (
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
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
