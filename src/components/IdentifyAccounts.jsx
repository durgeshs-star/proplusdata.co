import { useState } from "react";

const IdentifyAccounts= () => {
  const data = [
    {
      id: 1,
      title: "Intent Accounts & Buying Propensity",
      content:
        "We assess a broad set of buyer intent signals to categorize accounts into four propensity levels: High, Medium, Low, and Greenfield. This helps you prioritize outreach and tailor strategies based on actual buying readiness.",
      image:
        "https://www.proplusdata.co/assets/images/portfolio/account-segment.webp",
    },
    {
      id: 2,
      title: "Advanced Account Segmentation",
      content:
        "Our segmentation goes beyond surface-level data. We analyze accounts at the product level to identify those using competing solutions or undergoing digital transformation without adopting the target products. This allows you to identify accounts in transition and position your solutions more effectively.",
      image:
        "https://www.proplusdata.co/assets/images/portfolio/product-level.webp",
    },
    {
      id: 3,
      title: "Identifying Buying Groups",
      content:
        "We identify key buyer groups and personas within target accounts by analyzing organizational structures and influence patterns. This enables focused, omnichannel campaigns that reach the right stakeholders and improve engagement.",
      image:
        "https://www.proplusdata.co/buying-groups.png",
    },
  ];

  // ✅ First accordion open by default
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="row mb-5">
           <div className="col-lg-12">
            <div className="section_title text_center mt-5">
              <div className="section_main_title">
                <h2>
                  Identifying High Propensity Accounts for 
                  <span> GTM | ABM</span>
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        
      </div>
        
        {/* LEFT IMAGE */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={data[activeIndex].image}
            alt="Accordion Visual"
            className="img-fluid rounded accordion-image"
          />
        </div>

        {/* RIGHT ACCORDION */}
        <div className="col-lg-6">
          <div className="accordion" id="accordionExample">
            {data.map((item, index) => (
              <div className="accordion-item mb-3" key={item.id}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex === index ? "" : "collapsed"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={activeIndex === index}
                    aria-controls={`collapse${index}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                  </button>
                </h2>

                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    activeIndex === index ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-left">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default IdentifyAccounts;
