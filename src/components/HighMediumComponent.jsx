import React from "react";

export default function HighMediumComponent() {
  return (
    <div className="about_area pt-45 hm-component">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
             <div className="section_title text_left pt-50">
              
              <div className="section_main_title text-left">
                <h3>Mapping Opportunity with Precision and Intent </h3>
              </div>
              
             
            </div> 

            <div className="singel_about_left">
              <div className="singel_about_left_inner">
                <div className="singel-about-content text-left">
                
                  <p>
                ProPlus Data redefined the targeting strategy by expanding and enriching the account universe across global markets, driven by data, not guesswork.

                 </p>
                 <p>Using behavioral signals and buying intent, we segmented identified accounts and contacts into a prioritized heatmap: High (H), High-Medium (HM), and Medium (M) propensity tiers. This layered intelligence became the cornerstone for smart engagement, enabling precise content delivery and message alignment where conversion potential was highest.
</p>
                
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="/assets/images/intent-signals.webp" alt="intent-signals" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
