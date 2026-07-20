import React from "react";


const processItems = [
  {
    id: 1,
   
    title: "Precision",
    desc: "We apply advanced data intelligence to uncover real opportunities and maximize return, without wasted effort.  ",
  },
  {
    id: 2,
   
    title: "Relevance",
    desc: (
        <>
          Our insights are tailored to your industry and GTM context, ensuring accuracy where it matters most.

          <br /><br />
        </>
      ),
  },
  {
    id: 3,
   
    title: "Integrity ",
    desc: (
        <>
          Quality, accuracy, and trust are built into every dataset we deliver.

          <br /><br /><br />
        </>
      ),
   
  },
  {
    id: 4,
   
    title: "Impact ",
    desc: (
        <>
        We measure success by outcomes achieved, not data volume delivered.  <br /><br /><br />
        </>
    ),
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <div className="process_area work_process pt-30 pb-30">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-lg-12">
            <div className="section_title text_center mb-90 mt-3">
              
              <div className="section_main_title">
                <h2>What Makes us 
                <span> Different  </span>
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
                  <div className="single_it_work_content_desc text-center ">
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

export default WhatMakesUsDifferent;
