import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomPieChart = ({ percentage }) => {

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

  const COLORS = ["#05aded", "#e5e7eb"];

  return (

    <div className="mt-5">

      <h3 className="text-center mb-4">
        GTM Readiness Overview
      </h3>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >

            {data.map((entry, index) => (

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

  );

};

export default CustomPieChart;