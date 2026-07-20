import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

export default function GTMAssessmentResult() {

  // GET SCORE

  const percentage =
    Number(localStorage.getItem("gtmScore")) || 0;

  const totalScore =
    Number(localStorage.getItem("gtmTotal")) || 0;

  const maxScore =
    Number(localStorage.getItem("gtmMax")) || 100;

  // LEVEL

  const getLevel = () => {

    if (percentage >= 80) {
      return "Excellent GTM Readiness";
    }

    if (percentage >= 60) {
      return "Strong GTM Foundation";
    }

    if (percentage >= 40) {
      return "Moderate GTM Readiness";
    }

    return "Needs Improvement";

  };

  // PIE DATA

  const pieData = [

    {
      name: "Completed",
      value: percentage,
    },

    {
      name: "Remaining",
      value: 100 - percentage,
    },

  ];

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

  const COLORS = ["#05aded", "#e5e7eb"];

  return (

    <div className="container py-5">

      {/* TITLE */}

      <div className="text-center mb-5">

        <h1 className="mb-3">
          Your GTM Assessment Result
        </h1>

        <h2>
          {percentage}%
        </h2>

        <h4>
          {getLevel()}
        </h4>

        <p>
          Total Score:
          {totalScore} / {maxScore}
        </p>

      </div>

      {/* PIE CHART */}

      <div className="card p-4 mb-5">

        <h3 className="text-center mb-4">
          GTM Readiness Overview
        </h3>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <PieChart>

            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
            >

              {pieData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* RADAR CHART */}

      <div className="card p-4 mb-5">

        <h3 className="text-center mb-4">
          GTM Capability Breakdown
        </h3>

        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <RadarChart data={radarData}>

            <PolarGrid />

            <PolarAngleAxis
              dataKey="category"
            />

            <PolarRadiusAxis />

            <Radar
              name="Score"
              dataKey="score"
              stroke="#05aded"
              fill="#05aded"
              fillOpacity={0.6}
            />

          </RadarChart>

        </ResponsiveContainer>

      </div>

      {/* RECOMMENDATIONS */}

      <div className="card p-4">

        <h3 className="mb-4">
          Recommendations
        </h3>

        {percentage >= 80 && (

          <p>
            Your GTM engine is highly mature.
            Focus on scaling automation,
            predictive analytics, and
            expansion strategies.
          </p>

        )}

        {percentage >= 60 &&
          percentage < 80 && (

          <p>
            Your GTM foundation is strong,
            but optimization opportunities
            exist in alignment and
            execution workflows.
          </p>

        )}

        {percentage >= 40 &&
          percentage < 60 && (

          <p>
            Your GTM motion shows promise,
            but gaps exist in data quality,
            activation, and operational
            consistency.
          </p>

        )}

        {percentage < 40 && (

          <p>
            Your GTM strategy requires
            significant improvement in
            planning, execution, and
            measurement capabilities.
          </p>

        )}

      </div>

    </div>

  );

}