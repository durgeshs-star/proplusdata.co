
import React from "react";

export default function SubscriptionComponent() {
  return (
    <div className="about_area">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 renewal">
            <div className="about_thumb mb-40 mr-6">
              <img src="assets/images/Renewal.webp" alt="renewal cycle insights" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-10 mt-3">
              
              <div className="section_main_title text-left">
                <h2>Revenue Forecast with 
                <span> Precision </span>
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
              
            </div>

            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
                  
                  <p>
                  ProPlus Data empowers you with comprehensive account intelligence and renewal cycle insights that will help you map your forecast. By leveraging tailored outreach strategies informed by customer behavior and lifecycle trends, you can optimize opportunities for upselling and cross-selling, and foster enduring partnerships.
                  </p>
                 
                </div>
              </div>

              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

