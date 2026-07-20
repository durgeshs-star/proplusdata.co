import React from "react";

const StatsSection = () => {
  return (
    <section id="stats" className="stats section mt-5">
      <div className="container">

        {/* Logo */}
        <div className="footer text-center mb-4">
          <a href="https://proplusdata.co/">
            <img
              src="/assets/images/logo.png"
              alt="ProPlus Data"
              className="img-fluid"
            />
          </a>
        </div>

        {/* Content */}
        <div className="row">
          <div className="col-lg-10 mx-auto text-center footer-text mb-5">
            <h3 className="main-headline">
              Your competitor&apos;s account hits 100 days, want to be ready to win it?
            </h3>

            <p className="main-description">
              Turn every expiring contract into a growth opportunity.
            </p>

            <div className="achievement-badge">
              <div className="achievement-content">
                <div className="achievement-details">
                  <div className="achievement-title button btn-primary">
                    <a href="https://proplusdata.co/contact-us">
                      Let&apos;s Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
