import React from "react";

export default function BuyerComponent() {
  return (
    <div className="about_area pt-45 pb-10">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Optimize Decisions with <br/>
              
                <span> Buying Group</span>
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
                  Buying Group is an essential guide for fostering meaningful engagement with high potential clients. By uncovering the motivations, challenges, and decision-making behaviors of your target accounts, these reports help you craft highly relevant strategies that resonate. This deeper understanding builds stronger connections, fosters long-term partnerships, and drives exceptional business outcomes.



                  </p>
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb buyer ml-4">
              <img src="/assets/images/Buyer-Persona.webp" alt="buyer-persona-insights" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
