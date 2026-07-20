import React from "react";

export default function PricingComparisonTable() {
  const features = [
    {
      category: "Plan Access",
      items: [
        ["Users", "1", "Up to 5", "Unlimited"],
        ["Credits", "10 / month", "Up to 1,000 / month", "Custom"],
        ["Rollover / Additional Credits", false, true, true],
      ],
    },
    {
      category: "Data",
      items: [
        ["Contact & Company Info", true, true, true],
        ["Firmographics", true, true, true],
        ["Keyword Search", true, true, true],
        ["Advanced Filters", false, true, true],
        ["GDPR & Global Compliance", true, true, true],
      ],
    },
    {
      category: "Signals",
      items: [
        ["Technographics", false, true, true],
        ["Company Growth Signals", false, false, true],
        ["Intent Data", false, true, true],
        ["Job Changes", false, true, true],
      ],
    },
    {
      category: "APIs",
      items: [
        ["Enrich API", false, false, true],
        ["Discover API", false, false, true],
        ["Signals API", false, false, true],
        ["Agents", false, false, true],
      ],
    },
  ];

  const renderCell = (value) => {
    if (value === true)
      return <span className="tick">✓</span>;

    if (value === false)
      return <span className="cross">✕</span>;

    return value;
  };

  return (
    <section className="pricing-table-section">
      <div className="container">
        <div className="table-responsive">
          <table className="pricing-table">
            <thead>
              <tr>
                <th className="feature-col">Features</th>
                <th>
                  <div className="plan-box free">
                    <h3>Free</h3>
                    <p>Perfect for trying with your team</p>
                  </div>
                </th>

                <th>
                  <div className="plan-box pro">
                    <h3>Pro</h3>
                    <p>Ideal for scaling teams</p>
                  </div>
                </th>

                <th>
                  <div className="plan-box enterprise">
                    <h3>Enterprise</h3>
                    <p>Advanced enterprise solutions</p>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((section, index) => (
                <React.Fragment key={index}>
                  <tr className="category-row">
                    <td colSpan="4">{section.category}</td>
                  </tr>

                  {section.items.map((item, i) => (
                    <tr key={i}>
                      <td className="feature-name">{item[0]}</td>
                      <td>{renderCell(item[1])}</td>
                      <td>{renderCell(item[2])}</td>
                      <td>{renderCell(item[3])}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .pricing-table-section {
          padding: 80px 0;
          background: #f8fafc;
        }

        .pricing-table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .pricing-table th,
        .pricing-table td {
          border: 1px solid #e5e7eb;
          padding: 18px 20px;
          text-align: center;
        }

        .pricing-table thead th {
          background: #ffffff;
        }

        .feature-col {
          min-width: 280px;
          text-align: left !important;
          font-size: 18px;
          font-weight: 700;
        }

        .feature-name {
          text-align: left;
          font-weight: 600;
          color: #374151;
        }

        .plan-box {
          padding: 24px 15px;
          border-radius: 16px;
        }

        .plan-box h3 {
          margin-bottom: 8px;
          font-size: 24px;
          font-weight: 700;
        }

        .plan-box p {
          margin: 0;
          font-size: 14px;
          color: #6b7280;
        }

        .free {
          background: #f3f4f6;
        }

        .pro {
          background: #e0f2fe;
          border: 2px solid #0ea5e9;
        }

        .enterprise {
          background: #ede9fe;
        }

        .category-row td {
          background: #f9fafb;
          font-size: 16px;
          font-weight: 700;
          text-align: left;
          color: #111827;
        }

        .tick {
          color: #16a34a;
          font-size: 22px;
          font-weight: bold;
        }

        .cross {
          color: #dc2626;
          font-size: 22px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .pricing-table th,
          .pricing-table td {
            padding: 14px 10px;
            font-size: 14px;
          }

          .plan-box h3 {
            font-size: 20px;
          }

          .plan-box p {
            font-size: 12px;
          }

          .feature-col {
            min-width: 220px;
          }
        }
      `}</style>
    </section>
  );
}