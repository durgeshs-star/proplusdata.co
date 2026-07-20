import React, { useState } from "react";

export default function PricingSection() {
  const [selectedCredits, setSelectedCredits] = useState({});
  const [selectedAddon, setSelectedAddon] = useState({});

  const creditOptions = [
    { label: "100 Credits - $10", value: "100" },
    { label: "500 Credits - $40", value: "500" },
    { label: "1000 Credits - $70", value: "1000" }
  ];

  const addonOptions = [
    { label: "Add 100 Credits - $8", value: "100" },
    { label: "Add 500 Credits - $35", value: "500" },
    { label: "Add 1000 Credits - $60", value: "1000" }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      desc: "Perfect for trying Nexora with your entire team",
      note: "No credit card required",
      button: "Try for Free Today"
    },
    {
      name: "Pro",
      price: "$79",
      desc: "Ideal for teams ready to scale without per-seat costs.",
      button: "Start Pro in Minutes"
    },
    {
      name: "Enterprise",
      price: "$10,000",
      desc: "Designed for large enterprises with advanced requirements.",
      button: "Contact Sales"
    }
  ];

  return (
    <div className="pricing_area pt-60 pb-50">
      <div className="container">
        <div className="row justify-content-center gx-4 gy-4">

          {plans.map((plan, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center"
              key={index}
            >
              <div className="pricing-card">

                {/* Plan Name */}
                <h3>{plan.name}</h3>

                {/* Price */}
                <h2>
                  {plan.price} <span>/month</span>
                </h2>

                {/* Description */}
                <p className="plan-desc">{plan.desc}</p>

                {/* Credits Dropdown */}
                {plan.name !== "Free" ? (
                  <div className="select-group">

                    <label className="select-label">
                      {plan.name === "Enterprise"
                        ? "Credits :"
                        : "Monthly Credits :"}
                    </label>

                    <select
                      className="pricing-select"
                      value={selectedCredits[index] || ""}
                      onChange={(e) =>
                        setSelectedCredits({
                          ...selectedCredits,
                          [index]: e.target.value
                        })
                      }
                    >
                      <option value="">Select Credits</option>

                      {creditOptions.map((opt, i) => (
                        <option key={i} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                  </div>
                ) : (
                  <div
                    style={{
                      height: "63px",
                      marginBottom: "15px"
                    }}
                  ></div>
                )}

                {/* Add-On Credits */}
                {plan.name === "Pro" ? (
                  <div className="select-group">

                    <label className="select-label">
                      Add-On Credits :
                    </label>

                    <select
                      className="pricing-select"
                      value={selectedAddon[index] || ""}
                      onChange={(e) =>
                        setSelectedAddon({
                          ...selectedAddon,
                          [index]: e.target.value
                        })
                      }
                    >
                      <option value="">Select Add-On</option>

                      {addonOptions.map((opt, i) => (
                        <option key={i} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                  </div>
                ) : (
                  <div
                    style={{
                      height: "63px",
                      marginBottom: "15px"
                    }}
                  ></div>
                )}

                {/* Free Note */}
                {plan.note ? (
                  <p className="note-text">{plan.note}</p>
                ) : (
                  <div
                    style={{
                      height: "24px",
                      marginBottom: "15px"
                    }}
                  ></div>
                )}

                {/* Email Input */}
                {plan.name !== "Enterprise" ? (
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="pricing-input"
                  />
                ) : (
                  <div
                    style={{
                      height: "48px",
                      marginBottom: "20px"
                    }}
                  ></div>
                )}

                {/* Button */}
                <button className="pricing-btn">
                  {plan.button}
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        .pricing_area {
          background:
            radial-gradient(circle at top left, #dbeafe, transparent 25%),
            radial-gradient(circle at bottom right, #ede9fe, transparent 25%),
            #f8fafc;
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);

          padding: 40px;
          border-radius: 30px;

          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);

          text-align: center;

          height: 100%;
          display: flex;
          flex-direction: column;

          max-width: 420px;
          width: 100%;

          transition: all 0.3s ease;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .pricing-card h3 {
          font-size: 38px;
          // font-weight: 700;
          margin-bottom: 15px;
          text-align: left;
        }

        .pricing-card h2 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: left;
        }

        .pricing-card h2 span {
          font-size: 18px;
          color: #6b7280;
        }

        .plan-desc {
          color: #111;
          margin-bottom: 25px;
          line-height: 1.4;
          min-height: 60px;
          font-size: 20px;
          text-align: left;
        }

        .select-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .select-label {
          min-width: 140px;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0;
          text-align: left;
        }

        .pricing-select {
          flex: 1;
          width: 100%;
          height: 48px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          padding: 0 15px;
          outline: none;
          font-size: 18px;
          background: #fff;
        }

        .pricing-input {
          width: 100%;
          height: 48px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          padding: 0 15px;
          margin-bottom: 20px;
          outline: none;
          font-size: 15px;
        }

        .pricing-btn {
          width: 100%;
          height: 50px;
          border: none;
          border-radius: 10px;
          background: #2f337a;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .pricing-btn:hover {
          background: #0b5ed7;
        }

        .note-text {
          color: #111;
          font-size: 18px;
          margin-bottom: 15px;
          text-align: left;
        }

        @media (max-width: 991px) {
          .pricing-card {
            margin-bottom: 30px;
          }

          .pricing-card h3 {
            font-size: 30px;
          }

          .pricing-card h2 {
            font-size: 34px;
          }
        }

        @media (max-width: 576px) {
          .select-group {
            flex-direction: column;
            align-items: flex-start;
          }

          .select-label {
            min-width: auto;
          }

          .pricing-select {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}