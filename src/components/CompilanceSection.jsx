import React from "react";

const complianceLogos = [
  { src: "assets/images/ccpa-1.png", alt: "CCPA Compliance" },
  { src: "assets/images/gdpr-ready-logo.svg", alt: "GDPR Compliance" },
  { src: "assets/images/ISO9001-2015.svg", alt: "ISO 9001 Certification" },
  { src: "assets/images/ISO27001-2022.svg", alt: "ISO 27001 Certification" },
  { src: "assets/images/SOC_2.svg", alt: "SOC 2 Compliance" }
];

const ComplianceSection = () => {
  return (
    <section id="call-to-action" className="call-to-action section mt-3">
      <div className="container pt-4">
        <div className="row align-items-center">
          
          {/* Logos */}
          <div className="col-lg-5 order-lg-2">
            <div className="d-flex align-items-center justify-content-start flex-wrap gap-3">
              {complianceLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="img-fluid compliance-logo"
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6 offset-lg-1 order-lg-1 text-left">
            <div className="content-area text-left mr-100">
              <h2>Enterprise-Grade Compliance</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
