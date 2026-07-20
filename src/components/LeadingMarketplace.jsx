import React from "react";

const LeadingMarketplace = () => {
  return (
    <section id="clients" className="clients section mt-5">
      <h2 className="marketplace">Available on Leading Marketplaces</h2>

      <div className="container mt-4">
        <div className="row align-items-center text-center">
          <div className="col-6 col-md-4 col-lg-2">
            <img src="assets/images/brand/SAP Marketplace.png" className="img-fluid" alt="SAP" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src="assets/images/brand/Datarade logo.png" className="img-fluid" alt="Datarade" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src="assets/images/brand/Databricks Logo.png" className="img-fluid" alt="Databricks" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src="assets/images/brand/NEUDATA.png" className="img-fluid" alt="Neudata" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src="assets/images/brand/Google Hub.png" className="img-fluid" alt="Google Hub" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingMarketplace;
