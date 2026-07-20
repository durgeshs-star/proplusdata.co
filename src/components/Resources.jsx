import React from "react";

const Resources = () => {
  return (
    <section id="features-2" className="features-2 section mt-5">
      <h2>Resources</h2>

      <div className="container">
        <div className="row g-4 mt-3">
          {/* Resource 1 */}
          <div className="col-lg-3">
            <div className="feature-image">
              <a href="https://proplusdata.co/strategic-imperative-of-renewal-timings-mastering-the-100-day-advantage">
                <img
                  src="/assets/images/renewal-blog.png"
                  alt="Dashboard Interface"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>
            <h5 className="mt-3">Mastering the 100-Day Advantage</h5>
          </div>

          {/* Resource 2 */}
          <div className="col-lg-3">
            <div className="feature-image">
              <a href="https://proplusdata.co/renewal-are-the-arr-4-smart-ways-to-build-drive-growth-with-renewal-intelligence">
                <img
                  src="/assets/images/renewals-arr.webp"
                  alt="Dashboard Interface"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>
            <h5 className="mt-3">
              4 Smart Ways to Build Predictable Growth Using Renewal Intelligence
            </h5>
          </div>

          {/* Resource 3 */}
          <div className="col-lg-3">
            <div className="feature-image">
              <a href="https://proplusdata.co/how-renewal-intelligence-win-against-the-odd">
                <img
                  src="/assets/images/renewal-intelligence-win-against-the-odd.webp"
                  alt="Analytics Tools"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>
            <h5 className="mt-3">
              How Renewal Intelligence Wins Against the Odds
            </h5>
          </div>

          {/* Resource 4 */}
          <div className="col-lg-3">
            <div className="feature-image">
              <a href="https://proplusdata.co/turning-your-competitors-customers-into-your-growth-engine">
                <img
                  src="/assets/images/competitors-growth.webp"
                  alt="Security Features"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>
            <h5 className="mt-3">
              Turning Your Competitor’s Customers into Your Growth Engine
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
