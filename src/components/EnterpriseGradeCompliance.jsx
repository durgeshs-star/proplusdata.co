import React from "react";

const isoImages = [
  "/assets/images/gdpr-ready-logo 2.svg",
  "/assets/images/ccpa-1.png",
  "/assets/images/ISO9001-2015.svg",
  "/assets/images/ISO27001-2022.svg",
  "/assets/images/SOC_2.svg",
];

const EnterpriseGradeCompliance = () => {
  return (
    <div className="about_area enterprise-compilance pb-100">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side - Title Only */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="section_title text_left mb-40 mt-3">

             

              <div className="section_main_title text-left">
                <h1>Enterprise-Grade Compliance</h1>
                {/* <h1>& Business <span>Agency.</span></h1> */}
              </div>

             

            </div>
          </div>

          {/* Right Side - ISO Images */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "right",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
           
              {isoImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`ISO ${index + 1}`}
                  style={{
                    maxHeight: "90px",
                    objectFit: "contain",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EnterpriseGradeCompliance;
