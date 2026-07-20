import React from "react";

export default function WhyGtmMatters() {
  return (
    <div className="about_area pt-45 mb-50">
      <div className="container">
        <div className="row">
            {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb about-page gtm-img">
              <img src="/assets/images/about/GTM Readiness Assessment Report.png" alt="GTM Readiness Assessment Report" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 gtm-matters">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Why it Matters</h1>
              </div>
              
             
            </div>

            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
               
                  <p>
                  Most teams run multiple motions without a grounded GTM baseline.
This tool gives you an immediate snapshot of your readiness and helps you benchmark your strengths before you scale budgets, campaigns or teams.
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
