import React from "react";

export default function IntentComponent() {
  return (
    <div className="about_area pt-45">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Unlock the Power of  <br/>
              
                <span> Intent with Precision</span>
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
                  When prospects start researching solutions, they leave clues, digital footprints that show they’re ready to buy. ProPlus Data’s Intent Intelligence reads these signals and turns them into clear, actionable steps to help you make smarter business moves.
                  </p>
                  {/* <p>
                  From cloud platforms and cybersecurity tools to CRM systems and firewalls, our Technographics Data shows you who’s using what — and when they might need you next!
                  </p> */}
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="/assets/images/intent-data.gif" alt="intent with precision" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
