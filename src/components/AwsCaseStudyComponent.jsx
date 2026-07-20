import React from 'react';

const AwsCaseStudyComponent = () => {
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
            paddingBottom: '100px',
          }}
        >
          <h1 className="display-4 fw-bold text-left aws-section">
            Global Cloud Leader Triples Pipeline Speed Across APAC with
            ProPlus Data’s
            Precision GTM
          </h1>
        </div>

        {/* Right Side - Same Size Blue Boxes */}
        <div
          className="col-md-5 d-flex flex-column justify-content-center align-items-start px-4 py-5"
        >
          {/* Box Wrapper to enforce equal height */}
          <div className="w-60 d-flex flex-column gap-5">
            {/* Blue Box 1 */}
            <div
              className="text-white px-4 py-3 d-flex flex-column justify-content-center text-center"
              style={{
                backgroundColor: '#007BFF',
                borderRadius: '10px',
                minHeight: '120px',
              }}
            >
              <div className="fs-1 fw-bold">2X</div>
              <div className="fs-4">Engagement Rate</div>
            </div>

            {/* Blue Box 2 */}
            <div
              className="text-white px-4 py-3 d-flex flex-column justify-content-center text-center"
              style={{
                backgroundColor: '#007BFF',
                borderRadius: '10px',
                minHeight: '120px',
              }}
            >
              <div className="fs-1 fw-bold">3X</div>
              <div className="fs-4">Faster Pipeline Activation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwsCaseStudyComponent;
