import React from "react";

export default function OrgChartViewer({ image }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-semibold mb-2">Org Chart</h2>
      <img src={image} alt="Org Chart" className="w-full rounded" />
    </div>
  );
}
