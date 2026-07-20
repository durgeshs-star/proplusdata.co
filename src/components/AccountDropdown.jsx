import React from "react";

export default function AccountDropdown({ clients, onSelect }) {
  return (
    <div>
      <label className="block font-medium mb-1">Account Name</label>
      <select onChange={(e) => onSelect(e.target.value)} className="w-full p-2 border rounded">
        {clients.map((name, index) => (
          <option key={index} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}
