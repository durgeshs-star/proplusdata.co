import React from 'react'

export default function AboutTab() {
  return (
    <div>
        <div class="tab_area bg_color2 pt-80 pb-100">
            
            <div className="section_main_title">
                <h3>Identifying High Propensity Accounts for<span> GTM | ABM</span></h3>
                
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="tab_content mt-30">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item active">
                  <a class="nav-link" data-toggle="tab" href="#tabs-1" role="tab">Intent Accounts & <br/> Buying Propensity</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Advanced Account <br/> Segmentation</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                  Identifying Buying  <br/> Groups</a>
                </li>
              </ul>
              {/* <!-- Tab panes --> */}
              <div class="tab-content white_bg pt-1 pb-5 mr-100">
                <div class="tab-pane active mt-60" id="tabs-1" role="tabpanel">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="tab_thumb">
                        <img src="assets/images/portfolio/account-segment.webp" alt="account segment"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="tab_content">
                        <div class="tab_content_title pb-4 text-left">
                          <h4>Intent Accounts & Buying Propensity</h4>
                        </div>
                        <div class="tab_content_text text-left mr-80">
                          <p>
                          We evaluate and assess a broad range of buyer <a href='https://proplusdata.co/intent-data'>intent</a> signals to precisely categorize accounts into four distinct propensity levels: High, Medium, Low, or Greenfield. This meticulous categorization enables you to craft highly targeted marketing strategies tailored to each segment's unique needs and characteristics. By leveraging these insights, you can engage with the most promising prospects at the optimal stage of their buying journey, thereby increasing the chances of successful conversion and fostering long-term relationships.


                          </p>

                         
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane mt-60" id="tabs-2" role="tabpanel">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="tab_thumb">
                        <img src="assets/images/portfolio/product-level.webp" alt="product level"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="tab_content">
                        <div class="tab_content_title pb-4 text-left">
                          <h4>Advanced Account Segmentation </h4>
                        </div>
                        <div class="tab_content_text text-left mr-80">
                          <p>
                          Our approach to account segmentation goes beyond surface-level attributes. We conduct an in-depth analysis at the product level, identifying accounts that are currently leveraging competing solutions or those that have undergone significant digital transformation but have yet to adopt any of the target products. <br/>This comprehensive profiling helps you uncover untapped opportunities within organizations that are in transition. Allowing you to position solutions effectively and create tailored engagement strategies for each unique group. By understanding where each account stands in its journey, we can deliver highly relevant and personalized messaging that resonates deeply with decision-makers.



                          </p>

                         
                        </div>
                       
                      
                      </div>
                    </div>
                  </div>
                </div>
               
                <div class="tab-pane mt-60" id="tabs-4" role="tabpanel">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="tab_thumb">
                        <img src="assets/images/portfolio/decision-making.webp" alt="decision making"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="tab_content">
                        <div class="tab_content_title pb-4 text-left">
                          <h4>Identifying Buying Groups</h4>
                        </div>
                        <div class="tab_content_text text-left mr-80">
                          <p>
                          We identify the <a href='https://proplusdata.co/account-intelligence-insights'>key buyer groups and buying personas</a>  within target accounts. Through a detailed understanding of the organizational structure, we pinpoint the individuals who influence or control purchasing decisions. This insight allows you to craft and execute highly effective omnichannel campaigns that speak directly to the concerned personas. <br/> Leveraging the insights gained from this thorough identification, you can create campaigns that engage prospects on multiple levels, ensuring that the outreach resonates across various touchpoints and drives higher engagement and conversions.

                          </p>

                          
                        </div>
                       
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
