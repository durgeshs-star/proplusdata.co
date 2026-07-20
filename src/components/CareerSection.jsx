import React from "react";

export default function CareerSection() {
  return (
    <div className="feature_area bg_color2 pt-80 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-55">
              <div className="section_main_title">
                <h2>
                  Career <span> Openings</span>
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Feature Box 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="feature_style_four mb-30">
              <div className="feature_style_four_icon mb-20">
               
              </div>
              <div className="feature_style_four_title">
                <h4>Voice Specialist</h4>
              </div>
              <div className="feature_style_four_text pt-15">
               
              </div>
              <div className="feature_style_four_button pt-25">
                <a href="/voice-specialist">
                  Read More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Feature Box 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="feature_style_four mb-30">
              <div className="feature_style_four_icon mb-20">
               
              </div>
              <div className="feature_style_four_title">
                <h4>Web / Tech Researcher</h4>
              </div>
              <div className="feature_style_four_text pt-15">
               
              </div>
              <div className="feature_style_four_button pt-25">
                <a href="/web-tech-researcher">
                  Read More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="feature_style_four mb-30">
              <div className="feature_style_four_icon mb-20">
               
              </div>
              <div className="feature_style_four_title">
                <h4>Email Marketing Specialist</h4>
              </div>
              <div className="feature_style_four_text pt-15">
              
              </div>
              <div className="feature_style_four_button pt-25">
                <a href="/email-marketing-specialist">
                  Read More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div> 
        </div>

        <div className="row">
          {/* Feature Box 1 */}
          {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="feature_style_four mb-30">
              <div className="feature_style_four_icon mb-20">
               
              </div>
              <div className="feature_style_four_title">
                <h4>Admin Executive</h4>
              </div>
              <div className="feature_style_four_text pt-15">
               
              </div>
              <div className="feature_style_four_button pt-25">
                <a href="/admin-executive">
                  Read More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
