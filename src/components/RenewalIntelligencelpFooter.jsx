import React from "react";

const RenewalIntelligenceLpFooter = () => {
  return (
    <div
      className="pt-60 pb-60"
      style={{
        background: "linear-gradient(90deg, #4facfe, #2f337a)",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* Text Section */}
          <div className="col-lg-9 text-center text-lg-start">
            <h3
              style={{
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Your competitor's account hits 100 days, want to be ready to win it?<br/><br/>
            
              Turn every expiring contract into a growth opportunity.
            </h3>
          </div>

          {/* Button Section */}
          <div className="col-lg-3 text-center text-lg-end mt-4 mt-lg-0">
            <a href="https://proplusdata.co/contact-us"
              style={{
                background: "#fff",
                color: "#0b1b3f",
                padding: "12px 30px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "600",
              }}
            >
              Let’s Talk </a>
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default RenewalIntelligenceLpFooter;
