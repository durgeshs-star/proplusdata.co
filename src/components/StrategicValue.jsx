import React from 'react';

const StrategicValue = () => {
  return (
    <div className="feature-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section_title text_center mb-60 mt-3 wow fadeInDown"
              data-wow-delay=".4"
            >
             
             
            </div>
          </div>
        </div>

        <div className="row">
          {/* Team Brainstorming Box */}
          <div className="col-md-6 col-lg-6">
            <div className="em-feature-single-box wow fadeInLeft" data-wow-delay=".5">
              <div className="feature-single-box-inner">
                <div className="em-feature-title">
                  <h2>The Strategic Value of <br/>Renewal Intelligence
                  </h2>
                  <p>
                  <strong>  Timely access to renewal data empowers organizations to: </strong> 

                  </p>
                  <ul className="feature-bullets ">
                    <li>● Identify expiring contracts across current & target accounts.</li>
                    <li>● Reach out at right time to have relevant messagesing & conversations.</li>
                    <li>● Stay ahead of churn by decoding renewal patterns early.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Business Collaboration Box */}
          <div className="col-md-6 col-lg-6">
            <div className="em-feature-single-box wow fadeInRight" data-wow-delay=".4">
              <div className="feature-single-box-inner1">
                <div className="em-feature-title">
                  <h2>Renewal Cycle Intelligence: <br/>Predict the Right Moment</h2>
                  <p>
                 <strong> Adoption sequence & insights that reveals renewal & forecast cycles.</strong>
                  </p>
                  <ul className="feature-bullets ">
                    <li>● Predict renewals accurately.</li>
                    <li>● Align outreach strategies with customer contract milestones.
                    </li>
                    <li>● Engage consistently before renewals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicValue;
