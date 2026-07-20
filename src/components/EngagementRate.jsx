import React from "react";

const EngagementRate = () => {
  return (
    <div className="feature_area pb-70">
      <div className="container">
        {/* Section Title */}
        <div className="col-lg-12">
          <div className="section_title text_center mb-50 mt-3">
            
          </div>
        </div>

        {/* Features */}
        <div className="row">
          {/* Feature 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="feature_style_eight mb-30 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="feature_style_eight_content">
                <div className="feature_style_eight_icon">
                <span>45<i class="fa fa-percent" aria-hidden="true"></i></span>
                  <div className="anim-icon">
                    <span className="icon icon-1"></span>
                    <span className="icon icon-2"></span>
                    <span className="icon icon-3"></span>
                  </div>
                </div>
                <div className="feature_style_eight_title pt-4">
                  <h4><a href="managed-service.html">Engagement Rate</a></h4>
                </div>
                <div className="feature_style_eight_text pt-15">
                  <p>Signals that contacts interacted with tech-relevant content or triggers.</p>
                </div><br/>
                
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="feature_style_eight mb-30 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="feature_style_eight_content">
                <div className="feature_style_eight_icon">
                  <i className="fa fa-bullseye"></i>
                  <div className="anim-icon">
                    <span className="icon icon-1"></span>
                    <span className="icon icon-2"></span>
                    <span className="icon icon-3"></span>
                  </div>
                </div>
                <div className="feature_style_eight_title pt-4">
                  <h4><a href="industries.html">Target Account Reach Rate</a></h4>
                </div>
                <div className="feature_style_eight_text pt-15">
                  <p>Percentage of ICP accounts touched during the campaign</p>
                </div><br/>
                
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="feature_style_eight mb-30 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="feature_style_eight_content">
                <div className="feature_style_eight_icon">
                  <i className="fa fa-life-ring"></i>
                  <div className="anim-icon">
                    <span className="icon icon-1"></span>
                    <span className="icon icon-2"></span>
                    <span className="icon icon-3"></span>
                  </div>
                </div>
                <div className="feature_style_eight_title pt-4">
                  <h4><a href="business-solution.html">Response Rate on Verified Outreach</a></h4>
                </div>
                <div className="feature_style_eight_text pt-15">
                  <p>Email + human-led response rate across all activations</p>
                </div>
               
              </div>
            </div>
          </div>
        </div> {/* End of row */}
      </div>
    </div>
  );
};

export default EngagementRate;
