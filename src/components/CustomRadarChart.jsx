import React from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function CustomRadarChart({
  radarData,
}) {

  return (

    <div className="chart-box">

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

  );

}