import React from "react";

export default function MqlComponent() {
  return (
    <div className="about_area pt-45 pb-10">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Smarter Demand Generation <br/>
              
                <span> for Better Pipeline</span>
                </h1>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
             
            </div>

            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
                
                  <p>
                  Connect with decision-makers who have already shown interest in relevant solutions. Eliminate uncertainty from outbound by focusing only on prospects ready for meaningful engagement.

                  </p>
                  <p>
                  A multi-touch, data-driven approach powered by behavioral insights drives a faster pipeline and stronger conversion. Every lead is voice-verified and validated to ensure accuracy, relevance, and real engagement readiness.


                  </p>
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb mql">
              <img src="/assets/images/demand-gen.jpg" alt="demand gen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
