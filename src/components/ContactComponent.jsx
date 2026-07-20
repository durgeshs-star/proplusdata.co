import React from "react";

export default function ContactComponent() {
  return (
    <div className="about_area pt-45">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Empower <br/>Your Business Strategy <br/> with   
              
                <span> Contact Data</span>
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
                  Behind every successful engagement is verified, high-quality contact data. At ProPlus Data, we don’t just serve up names and numbers; we deliver a game-changing trifecta of precision, relevance, and pinpoint accuracy. The holistic edge ensures you’re not just reaching out, but connecting with the right players, supercharging your odds of impactful interactions and sealed deals.

                  </p>
                  <p>
                  As the business landscape twists and turns, ProPlus Data stands as your unshakable partner, arming you with real contact insights to dominate the field. Lets revolutionize your outreach, spark game-changing relationships, and propel your success to new heights!

                  </p>
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="assets/images/slider/contact-data.webp" alt="contact insights" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
