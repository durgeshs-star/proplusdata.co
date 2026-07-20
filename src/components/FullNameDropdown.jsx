import React from "react";

export default function FullNameDropdown({ people, onSelectPerson }) {
  return (
    <div>
      <label className="block font-medium mb-1">Full Name</label>
      <select onChange={(e) => onSelectPerson(e.target.value)} className="w-full p-2 border rounded">
        <option value="">All</option>
        {people.map((p, i) => (
          <option key={i} value={`${p["First Name"]} ${p["Last Name"]}`}>
            {p["First Name"]} {p["Last Name"]}
          </option>
        ))}
      </select>
    </div>
  );
}
