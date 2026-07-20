import React from "react";

export default function PastEventComponent() {
  return (
    <div className="about_area pt-45">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Proud Sponsor.<br/> Proven Innovator.<br/> Future-Driven.
              
                
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
                At ProPlus Data, we believe in the power of intelligent data to drive transformative outcomes. As a proud sponsor of the Forrester B2B Summit 2025, Denver - North America, we had the opportunity to engage with the brightest minds in B2B, showcase our cutting-edge solutions, and spark conversations that shape the future of data-driven decision-making.
                </p>
                  <p>
                  Held amidst a vibrant confluence of global B2B leaders, the summit provided a powerful platform for us to demonstrate how our intelligence-first approach empowers enterprises to unlock the full potential of their data ecosystems. From real-time customer intelligence to performance-focused analytics, our technology resonated with one consistent theme: precision that drives business impact.
                  </p>
                 
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="/assets/images/forrester.webp" alt="forrester event" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
