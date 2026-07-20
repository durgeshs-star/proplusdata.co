import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CustomPieChart({
  percentage,
}) {

  const data = [
    {
      name: "Completed",
      value: percentage,
    },
    {
      name: "Remaining",
      value: 100 - percentage,
    },
  ];

  return (
    <div className="chart-box">

      <h3>Overall GTM Score</h3>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            dataKey="value"
          >

            <Cell fill="#05aded" />
            <Cell fill="#e5e7eb" />

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}