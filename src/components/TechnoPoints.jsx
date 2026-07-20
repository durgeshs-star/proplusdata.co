import React from "react";


const solutionsData = [
  {
    image: "/assets/images/icon/target.png",
    title: "Identify the Right Accounts",
    description:
      "Target companies that are most likely to buy based on current tech, gaps, and switching cycles.",
    alt: "right accounts",
    },
  {
    image: "/assets/images/icon/campaign.png",
    title: " Power Up GTM | ABM Campaigns",
    description:
      "Get ultra-personal with your outreach by tailoring it to the actual tech stack of each account.",
    alt: "abm campaigns",
    },
  {
    image: "/assets/images/icon/upsell-opportunities.png",
    title: " Find Cross-Sell & Upsell Opportunities",
    description:
      "Know what tools they already use and where your solution fits perfectly.",
    alt: "upsell opportunities",
  },
  {
    image: "/assets/images/icon/competitor-landscape.png",
    title: "Competitor Landscape",
    description:
      " Track competitor technologies and gain an edge by showing up where they’re falling short.",
    alt: "competitor landscape",
  },
];

const TechnoPoints = () => {
  return (
    <div className="service_area  pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-1">
             
              <div className="section_main_title">
                <h2>Why Choose <span>Technographics?</span>
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {solutionsData.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-sm-12">
              <div className="service_style_seven pt-3 pb-3 pl-4 pr-3 mb-30 d-flex">
                <div className="service_style_seven_icon pt-3 mr-3">
                  <img
                    src={service.image}
                    alt={service.alt}
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <div className="service_style_seven_content">
                  <div className="service_style_seven_title pb-3 text-left">
                    <h4>{service.title}</h4>
                  </div>
                  <div className="service_style_seven_text text-left">
                    <p>{service.description}</p>
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

export default TechnoPoints;
