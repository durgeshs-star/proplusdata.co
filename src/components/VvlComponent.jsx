import React from "react";

export default function VvlComponent() {
  return (
    <div className="about_area pt-15 pb-10">
      <div className="container">
        <div className="row">
            {/* Image Section */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 vvl">
            <div className="about_thumb mr-4">
              <img src="/assets/images/Voice Verified.webp" alt="voice verified leads" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h2>Voice Verified Leads  
              
                <span> for Maximum Credibility</span>
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
                  Each lead is rigorously validated through a voice verification process, confirming not just the accuracy of their information but also their genuine intent to connect. This added layer of precision filters out unqualified leads, ensuring that only the most credible and engaged prospects make it into your pipeline, saving your teams time, boosting conversion potential, and driving more meaningful conversations from the start.

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
