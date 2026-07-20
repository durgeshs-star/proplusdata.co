import React from "react";

import CustomPieChart from "./CustomPieChart";
import CustomRadarChart from "./CustomRadarChart";

export default function ResultDashboard({
  score,
}) {

  // RESULT LABEL

  const getResult = () => {

    if (score >= 80) {
      return "Excellent GTM Readiness";
    }

    if (score >= 60) {
      return "Strong GTM Foundation";
    }

    if (score >= 40) {
      return "Moderate GTM Readiness";
    }

    return "Needs Improvement";

  };

  // RADAR DATA

  const radarData = [

    {
      category: "Strategy",
      score: 4,
    },

    {
      category: "Data",
      score: 5,
    },

    {
      category: "Execution",
      score: 3,
    },

    {
      category: "Optimization",
      score: 4,
    },

    {
      category: "Infrastructure",
      score: 2,
    },

  ];

  return (

    <div className="result-dashboard">

      {/* HEADER */}

      <div className="result-header">

        <h1 className="result-title">
          Your GTM Assessment Result
        </h1>

        <h2 className="score-number">
          {score}%
        </h2>

        <p className="result-text">
          {getResult()}
        </p>

      </div>

      {/* CHARTS */}

      <div className="charts-wrapper">

        {/* PIE CHART */}

        <div className="chart-card">

          <CustomPieChart
            percentage={score}
          />

        </div>

        {/* RADAR CHART */}

        <div className="chart-card">

          <CustomRadarChart
            radarData={radarData}
          />

        </div>

      </div>

      {/* SUMMARY */}

      <div className="summary-box">

        <h3>
          Assessment Summary
        </h3>

        <p>
          Your GTM assessment indicates your
          current maturity level across strategy,
          data, execution, optimization, and
          infrastructure.
        </p>

      </div>

    </div>

  );
}