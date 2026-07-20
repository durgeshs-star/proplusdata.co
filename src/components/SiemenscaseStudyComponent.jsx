import React from 'react';

const SiemensCaseStudyComponent = () => {
  return (
    <div className="container-fluid min-vh-100 case-study-component p-0 mt-5">
      <div
        className="row g-0"
        style={{
          background: 'linear-gradient(357deg, rgba(47, 51, 122, 1) 0%, rgba(0, 0, 0, 1) 75%)',
        }}
      >
        {/* Left Side - Text */}
        <div
          className="col-md-7 d-flex flex-column justify-content-center text-white px-5"
          style={{
            paddingTop: '100px',
            paddingBottom: '80px',
          }}
        >
          <h2 className="display-4 fw-bold text-left siemens-section">
            How a Fortune 500 Manufacturing Conglomerate Fixed GTM Across 11 Regions and 10+ Industries with ProPlus
          </h2>
        </div>

        {/* Right Side - 2x2 Grid of Boxes */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-start px-4 py-5">
          <div className="w-100">
            <div className="row g-4">
              {/* Box 1 */}
              <div className="col-6">
                <div
                  className=" px-3 py-3 d-flex flex-column justify-content-center text-center h-100"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    minHeight: '120px',
                    color: '#2f337a',
                    fontWeight: 'bold'
                  }}
                >
                  <div className="fs-1 fw-bold">45%</div>
                  <div className="fs-5">Engagement Rate</div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="col-6">
                <div
                  className=" px-3 py-3 d-flex flex-column justify-content-center text-center h-100"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    minHeight: '120px',
                    color: '#2f337a',
                    fontWeight: 'bold'
                  }}
                >
                  <div className="fs-1 fw-bold">52%</div>
                  <div className="fs-5">Target Account Reach Rate</div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="col-6">
                <div
                  className=" px-3 py-3 d-flex flex-column justify-content-center text-center h-100"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    minHeight: '120px',
                    color: '#2f337a',
                    fontWeight: 'bold'
                  }}
                >
                  <div className="fs-1 fw-bold">31%</div>
                  <div className="fs-5">Response Rate on Verified Outreach</div>
                </div>
              </div>

              {/* Box 4 */}
              <div className="col-6">
                <div
                  className=" px-3 py-3 d-flex flex-column justify-content-center text-center h-100"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    minHeight: '120px',
                    color: '#2f337a',
                    fontWeight: 'bold'
                  }}
                >
                  <div className="fs-1 fw-bold">2.8X</div>
                  <div className="fs-5">Lift in Campaign Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiemensCaseStudyComponent;
