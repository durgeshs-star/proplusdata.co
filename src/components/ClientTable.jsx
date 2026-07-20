import React from "react";

export default function ClientTable({ people }) {
  return (
    <div className="bg-white shadow rounded p-4 overflow-auto">
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Last Name</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, index) => (
            <tr key={index}>
              <td className="p-2 border">{p["First Name"]}</td>
              <td className="p-2 border">{p["Last Name"]}</td>
              <td className="p-2 border">{p["Email"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
