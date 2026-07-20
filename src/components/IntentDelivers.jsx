import React from "react";

const solutionsData = [
  {
    image: "/assets/images/icon/cloud-data-collection.png",
    title: "Technographics or Technographic Data",
    description:
      "Gain comprehensive visibility into the technology environments of prospects. From software to hardware, understand their tech preferences, integration ecosystems, and deployment cycles to perfectly align your offerings.",
    alt: "cloud data collection",
  },
  {
    image: "/assets/images/icon/insight.png",
    title: "Forecast Tech Demand with Precision",
    description:
      "Identify accounts likely to invest in technology soon. Using advanced behavioral analysis, these forecasts help you engage proactively and stay ahead of competitors.",
    alt: "forecast tech demand",
  },
];

const IntentDelivers = () => {
  return (
    <div className="service_area pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-1">
              <div className="section_main_title">
                <h2>
                  What We Deliver Through <span>Intent Data</span>
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
                <div className="service_style_seven_icon mr-3">
                  <img
                    src={service.image}
                    alt={service.alt} // Using alt for image
                    className="service-image"
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

export default IntentDelivers;
