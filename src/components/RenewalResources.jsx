import React from "react";
import "font-awesome/css/font-awesome.min.css";

const blogData = [
  {
    image: "/assets/images/renewal-blog.png",
    title: "The five devices you need to work anytime",
    link: "/blog-details",
  },
  {
    image: "/assets/images/renewals-arr.webp",
    title: "How to learn PHP 10 tips to get you started",
    link: "/blog-details",
  },
  {
    image: "/assets/images/renewal-intelligence-win-against-the-odd.webp",
    title: "The five devices you need to work anytime",
    link: "/blog-details",
  },
  {
    image: "/assets/images/competitors-growth.webp",
    title: "The five devices you need to work anytime",
    link: "/blog-details",
  },
];

const RenewalResources = () => {
  return (
    <div className="blog_area pt-35 pb-65">
      <div className="container">

        {/* Section Header */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-3">

              

              <div className="section_main_title">
                <h1>Resources</h1>
                
              </div>

              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>

            </div>
          </div>

         
        </div>

        {/* Blog Cards */}
        <div className="row">
          {blogData.map((blog, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="single_blog mb-4">

                <div className="single_blog_thumb pb-4">
                  <a href={blog.link}>
                    <img src={blog.image} alt={blog.title} />
                  </a>
                </div>

                <div className="single_blog_content pl-4 pr-4">


                  <div className="blog_page_title pb-1">
                    <h3>
                      <a href={blog.link}>{blog.title}</a>
                    </h3>
                  </div>



                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RenewalResources;
