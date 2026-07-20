import React from "react";

export default function AboutComponent() {
  return (
    <div className="about_area pt-45">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>About<span> Us</span></h1>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
             
            </div>

            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
               
                  <p>
                  ProPlus Data is a premier prospect intelligence and insights company, empowering businesses to drive precision in customer acquisition and engagement. Our proprietary, cutting-edge framework leverages advanced analytics to uncover authentic buyer signals, enabling clients to prioritize high-impact opportunities with confidence. By integrating deep domain expertise with unparalleled analytical rigor, ProPlus Data equips marketing & sales teams to navigate complex markets, align GTM strategies, and achieve measurable growth. 

                  </p>
                  <p>ProPlus Data provides <a href="https://proplusdata.co/technographics">Technographics</a> to map your prospects’ tech stack, <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase®</a> to forecast their next tech investments, and <a href="https://proplusdata.co/renewal-intelligence">Renewal Intelligence</a> to identify contracts approaching renewal. ProPlus’s <a href="https://proplusdata.co/buying-group">Buying Group</a> is an essential guide for fostering meaningful engagement with high-potential clients, while <a href="https://proplusdata.co/intent-data">Intent Data</a> and <a href="https://proplusdata.co/contact-data">Contact Data</a> equip your teams to engage the right people at the right time. Every solution is designed to turn raw data into decisive action,fast.
</p>
                  <div className="singel_about_left_inner">
      <div className="button two">
        <a href="/contact-us">Know More</a>
      </div>
    </div>
                </div>
               
              </div>
             
              
            </div>
           
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb about-page ml-4">
              <img src="/assets/images/about/about.webp" alt="Data Intelligence Company" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
