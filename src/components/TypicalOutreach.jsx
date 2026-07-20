import React from "react";

const statsData = [
  {
    value: "2–3%",
    description: "Typical outreach win rate",
  },
  {
    value: "9%",
    description: "With Renewal Intelligence",
  },
];

const TypicalOutreach = () => {
  return (
    <div
      className="pt-60 pb-60"
      style={{
        background: "linear-gradient(90deg, #4facfe, #2f337a)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          {statsData.map((item, index) => (
            <div className="col-lg-6 col-md-6 mb-4" key={index}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "25px",
                  padding: "35px 20px",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#0b1b3f",
                  }}
                >
                  {item.value}
                </h1>

                <h4
                  style={{
                    marginTop: "15px",
                    color: "#1c2d3a",
                  }}
                >
                  {item.description}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="row mt-5 align-items-center">
          <div className="col-lg-8">
            <h2
              style={{
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Backed by real use cases. Happy to show you how it works.
            </h2>
          </div>

          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
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
              Let’s Talk</a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypicalOutreach;
