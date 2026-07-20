import React from "react";

export default function GartnerComponent() {
  return (
    <div className="about_area pt-45">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Where Vision Meets Velocity: ProPlus Data at the Gartner Marketing Symposium/Xpo™ 2025  
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
                From June 2nd to 4th, <a href="https://proplusdata.co/">ProPlus Data</a> was proud to be part of the <a href="https://www.gartner.com/en">Gartner</a> Marketing Symposium/Xpo™ 2025 at the Gaylord Rockies Resort, Denver — one of the most influential gatherings for martech innovators worldwide.
                </p>
                  <p>
                 As exhibitors at Booth #116, we connected with decision-makers navigating the complexities of modern GTM, and shared how our predictive intelligence platform is helping enterprises move from fragmented data to unified, revenue-driving action.

                  </p>
                 
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="/assets/images/Garnter-Post-Event.webp" alt="Gartner event" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
