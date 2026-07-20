// OrgChartPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const SHEET_ID = "1fii60jULGjkuXxrdytbwi7yHTTBPC_8fBcbYJAW-aNY"; // your sheet ID
const API_KEY = "AIzaSyB7TcqPOQ6J_ZpsHyS9GxFLebboCZf85AE"; // replace with your actual API key
const CONTACTS_TAB = "contacts";
const IMAGE_TAB = "OrgChart1";

export default function OrgChartPage() {
  const [clients, setClients] = useState({});
  const [imageMap, setImageMap] = useState({});
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Fetch both sheets
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch contact data
        const contactRes = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CONTACTS_TAB}?key=${API_KEY}`
        );
        const contactRows = contactRes.data.values;
        const contactHeaders = contactRows[0];
        const contactData = contactRows.slice(1).map((row) =>
          Object.fromEntries(contactHeaders.map((h, i) => [h, row[i] || ""]))
        );

        // Group contact data by Account Name
        const grouped = {};
        contactData.forEach((item) => {
          const key = item["Company"];
          if (!grouped[key]) grouped[key] = [];
          grouped[key].push(item);
        });
        setClients(grouped);
        if (Object.keys(grouped).length > 0) {
          setSelectedClient(Object.keys(grouped)[0]);
        }

        // Fetch image mapping
        const imageRes = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${IMAGE_TAB}?key=${API_KEY}`
        );
        const imageRows = imageRes.data.values.slice(1); // Skip headers
        const imageDict = Object.fromEntries(
          imageRows.map(([name, url]) => [name.trim(), url.trim()])
        );
        setImageMap(imageDict);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleClientChange = (e) => {
    setSelectedClient(e.target.value);
    setSelectedPerson(null);
  };

  const handlePersonChange = (e) => {
    setSelectedPerson(e.target.value);
  };

  const people = selectedClient
    ? clients[selectedClient]?.filter((p) => {
        if (!selectedPerson) return true;
        return `${p["First Name"]} ${p["Last Name"]}` === selectedPerson;
      })
    : [];

  const currentImage = imageMap[selectedClient] ||
    "https://via.placeholder.com/600x400?text=No+Org+Chart+Available";

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Org Chart Viewer</h1>
      <div className="flex flex-wrap gap-6">
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow p-4 rounded">
            <h2 className="font-semibold mb-2">Org Chart</h2>
            <img
              src={currentImage}
              alt="Org Chart"
              className="w-full rounded"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/600x400?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="font-medium">Select Account:</label>
            <select
              className="w-full border p-2 rounded"
              value={selectedClient}
              onChange={handleClientChange}
            >
              {Object.keys(clients).map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium">Select Full Name:</label>
            <select
              className="w-full border p-2 rounded"
              value={selectedPerson || ""}
              onChange={handlePersonChange}
            >
              <option value="">All</option>
              {clients[selectedClient]?.map((p, i) => (
                <option
                  key={i}
                  value={`${p["First Name"]} ${p["Last Name"]}`}
                >
                  {p["First Name"]} {p["Last Name"]}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white shadow p-4 rounded">
            <h2 className="font-semibold mb-2">Client Details</h2>
            <table className="w-full text-sm border">
              <thead>
                <tr>
                  <th className="border p-2">First Name</th>
                  <th className="border p-2">Last Name</th>
                  <th className="border p-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {people.map((p, i) => (
                  <tr key={i}>
                    <td className="border p-2">{p["First Name"]}</td>
                    <td className="border p-2">{p["Last Name"]}</td>
                    <td className="border p-2">{p["Email"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
