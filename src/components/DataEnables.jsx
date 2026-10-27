import React from "react";

const DataEnables = () => {
  const processes = [
    {
      id: 1,
      title: "Strategic Planning",
      img: "assets/images/new/Strategic Planning.png",
      description: "Craft targeted strategies based on real-time insights, ensuring your business is always aligned with market demands.",
      alt: "strategic planning",
    },
    {
      id: 2,
      title: "Increased ROI",
      img: "assets/images/new/ROI.png",
      description: "Invest wisely by focusing resources on accounts showing intent, maximizing the probability of successful tech adoption.",
      alt: "increased roi",
    },
    {
      id: 3,
      title: "Competitive Edge",
      img: "assets/images/new/competitive-edge.png",
      description: "Stay ahead of competitors with a proactive approach to tech trends, positioning your offerings as the top choice for intent-driven accounts.",
      alt: "competitive edge",
    },
    {
      id: 4,
      title: "Resource Allocation",
      img: "assets/images/new/resource-allocation-1.png",
      description: "Streamline your sales and marketing efforts by prioritizing accounts with a high propensity for tech adoption, optimizing resource allocation.",
      alt: "resource allocation",
    },
  ];

  return (
    <section className="ppd-intent-enables" aria-labelledby="ppd-intent-enables-title">
      <div className="ppd-solution-shell">
        <header className="ppd-intent-enables-header">
          <h2 className="ppd-intent-enables-title" id="ppd-intent-enables-title">
            Intent Data <span>Enables You With</span>
          </h2>
          <span className="ppd-intent-enables-accent" aria-hidden="true" />
        </header>

        <div className="ppd-intent-enables-list">
          {processes.map((process) => (
            <div className="ppd-intent-enables-item" key={process.id}>
              <span className="ppd-intent-enables-icon">
                <img src={process.img} alt={process.alt} />
              </span>
              <div className="ppd-intent-enables-content">
                <h3 className="ppd-intent-enables-item-title">{process.title}</h3>
                <p className="ppd-intent-enables-item-description">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataEnables;
