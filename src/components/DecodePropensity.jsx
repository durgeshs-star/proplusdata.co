import React from "react";

export default function DecodePropensity() {
  return (
    <div className="about_area pb-30">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="/assets/images/intent-accounts.png" alt="intelligent-account-segmentation" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h2>Intelligent Account 
              
                <span> Segmentation</span>
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
                  We measure <a href="https://proplusdata.co/technographics">technographic data</a>  to identify intent signals. By capturing these high-value indicators, ProPlus Data identifies accounts with the highest propensity to invest in relevant technologies. The result? Strategic foresight and precise timing!

                  </p>
                <p>
                 The proprietary models assess intensity, context, and behavioral patterns to segment accounts by need, timing, and solution fit. This segmentation is not just about targeting -  it’s about prioritizing the right conversations, at the right time, with the right audience.
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
