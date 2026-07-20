import React from "react";
import "font-awesome/css/font-awesome.min.css";

const servicesData = [
  {
   
    title: "Identify",
    description:
      "Renewal Intelligence flagged the competitor’s contract expiring in October.",
  },
  {
    
    title: "Research",
    description:
      "Signals revealed service gaps and compliance issues.",
  },
  {
   
    title: "Engage",
    description:
      "Outreach in July focused on those exact pain points.",
  },
  {
    
    title: "Nurture",
    description:
      "Procurement explored alternatives in August; demos followed.",
  },
  {
   
    title: "Close",
    description:
      "By October, the competitor lost the account before issuing their renewal offer.",
  },
  
];

const RealWorldWalkthrough = () => {
  return (
    <div className="service_area bg_color2 pt-80 pb-0">
      <div className="container">

        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-5">
              
             

              <div className="section_main_title">
                <h1>
                  Real World <span>Walkthrough</span>
                </h1>
              </div>

              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>

              <div className="col-lg-12 section_content_text pt-4">
                <p>
                  A leading cybersecurity enterprise used Renewal Intelligence to intercept a competitor’s contract with a major financial services firm.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="service_style_three pt-60 pl-30 pr-30 mb-5 text_center">

                {/* <div className="service_style_three_icon mb-35">
                  <i className={`fa ${service.icon}`}></i>
                </div> */}

                <div className="service_style_three_title pb-3">
                  <h4>{service.title}</h4>
                </div>

                <div className="service_style_three_text text-left">
                  <p>{service.description}</p>
                </div>

                {/* <div className="service_style_three_bt_icon pt-30">
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div> */}

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RealWorldWalkthrough;
