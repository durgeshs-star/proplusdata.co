import React from "react";


const DataEnables = () => {
  const processes = [
    {
      id: 1,
      title: "Strategic Planning",
      img: "assets/images/new/Strategic Planning.png",
      description: "Craft targeted strategies based on real-time insights, ensuring your business is always aligned with market demands.",
      alt:"strategic planning",
    },
    {
      id: 2,
      title: "Increased ROI",
      img: "assets/images/new/ROI.png",
      description: "Invest wisely by focusing resources on accounts showing intent, maximizing the probability of successful tech adoption.",
      alt:"increased roi",
    },
    {
      id: 3,
      title: "Competitive Edge",
      img: "assets/images/new/competitive-edge.png",
      description: "Stay ahead of competitors with a proactive approach to tech trends, positioning your offerings as the top choice for intent-driven accounts.",
      alt:"competitive edge",
    },
    {
      id: 4,
      title: "Resource Allocation",
      img: "assets/images/new/resource-allocation-1.png",
      description: "Streamline your sales and marketing efforts by prioritizing accounts with a high propensity for tech adoption, optimizing resource allocation.",
      alt:"resource allocation",
    },
  ];

  return (
    <div className="process_area pt-40 pb-70 bg_color2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-90 mt-3">
              
              <div className="section_main_title">
                <h2>
                Intent Data  <span>Enables You With</span>
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {processes.map((process) => (
            <div className="col-lg-3 col-sm-6 col-xs-12" key={process.id}>
              <div className="single_process">
                <div className="single_process_thumb">
                  <img src={process.img} alt={process.alt} />
                </div>
                <div className="single_process_number">
                  <div className="single_process_number_inner">
                    <span>{process.id}</span>
                  </div>
                </div>
                <div className="single_process_content">
                  <h2>{process.title}</h2>
                  <p>{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataEnables;
