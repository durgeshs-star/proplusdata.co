import React from "react";


const flipboxData = [
  {
    
    title: " Cutting-Edge Strategies ",
    description: "We leverage advanced data intelligence to uncover new business opportunities and maximize ROI."
  },
  {
   
    title: "Data-Driven Success",
    description: "Transform raw data into a strategic asset, guiding your business toward sustainable growth."
  },
  {
    
    title: " Unmatched Expertise",
    description: "Our team delivers precision, relevance, and high-value insights tailored to your industry needs."
  },
  {
   
    title: " Commitment to Excellence ",
    description: "With intelligence, accuracy, and innovation at our core, we drive measurable success for our partners."
  }
  
 
  
];

const ProspectFlipbox = () => {
    return (
      <div className="flipbox_area top_feature">
        <div className="container">
          <div className="row nagative_margin">
            {flipboxData.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6" key={index}>
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      
                      <div className="flipbox_title prospect">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default ProspectFlipbox;
