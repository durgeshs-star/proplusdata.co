import React from "react";

const solutionsData = [
  {
    image: "/assets/images/icon/cloud-data-collection.png",
    alt: "Cloud Data Collection",
    description:(
      <>
      Leveraging <a href="https://proplusdata.co/technographics">technographics</a> & <a href="https://proplusdata.co/intent-data">Intent data</a> , we analyze the past, present, and anticipated technology adoption of your prospective clients, enabling contextually relevant and strategically aligned engagement.
      </>
  )
    },
  {
    image: "/assets/images/icon/accountable.png",
    alt: "Accountable Data",
    description: (
      <>
        Utilize a meticulously curated, data-driven selection of in-market accounts to engage exclusively with those actively planning new technology investments.
        <br />
        <br />
      </>
    ),
  },
];

const NtpFeatures = () => {
  return (
    <div className="service_area  pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-1">
              <div className="section_main_title">
                <h2>
                  Key Features of <span>Next Tech Purchase<sup>&reg;</sup></span>
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

export default NtpFeatures;
