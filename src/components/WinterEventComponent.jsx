import React from "react";

export default function WinterEventComponent() {
  return (
    <div className="about_area pt-45">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Neudata Summit 2025: Where Alternative Data Becomes Predictive
                </h1>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
             
            </div>

            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
                    <p>Most alternative data conversations still revolve around observation. What people consume. What markets react to. What signals appear after momentum has already formed?</p>
                <p>
                At <a href="https://www.neudata.co/">Neudata</a> Summit 2025, ProPlus Data made a clear case for something more actionable.
                </p>
                  <p>
                 Technology decisions are not background noise. They are one of the strongest alternative data signals available today.</p>
                 <p>And when captured correctly, they tell you what buyers will do next.</p>
                 
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="/assets/images/new-york-winter-data-summit.png" alt="Winter Data Summit event" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
