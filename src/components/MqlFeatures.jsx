import React from "react";


const processItems = [
  {
    id: 1,
   
    title: "Targeted Lead Acquisition",
    desc: "Access a carefully curated pool of prospects actively interacting with pertinent content or offers, ensuring outreach efforts prioritize those most inclined to engage and convert.  ",
  },
  {
    id: 2,
   
    title: "Behavioral and Engagement Analytics",
    desc: (
        <>
          Track real buying signals and engagement patterns to identify in-market accounts and prioritize outreach that drives pipeline.
          <br /><br />
        </>
      ),
  },
  {
    id: 3,
   
    title: "Structured Multi-Touch Campaigns ",
    desc: "Implement a proven three-touch engagement sequence designed to heighten responsiveness and cultivate intent, building trust and encouraging deeper consideration.  ",
  },
  {
    id: 4,
   
    title: "A/B Testing for Ongoing Refinement ",
    desc: (
        <>
        Evaluate subject lines, content structures, & calls to action in real time. Data-backed adjustments pinpoint the most impactful formats for sustained engagement.<br/>
        </>
    ),
  },
];

const MqlFeatures = () => {
  return (
    <div className="process_area work_process pt-30 pb-30">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-lg-12">
            <div className="section_title text_center mb-90 mt-3">
              
              <div className="section_main_title">
                <h2>Key   
                <span> Features</span>
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Cards */}
        <div className="row">
          {processItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="single_process_work">
                <div className="single_it_work_content">
                 
                  <div className="single_work_content_title pt-1">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="single_it_work_content_desc text-left">
                    <p>{item.desc}</p>
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

export default MqlFeatures;
