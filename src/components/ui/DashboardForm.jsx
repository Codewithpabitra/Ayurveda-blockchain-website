import React, { useEffect, useState } from "react";
import api from "../../api/axios.js";

const DashboardForm = () => {
  const [registrations, setRegistrations] = useState([]);
  const [stats, setStats] = useState({ totalHarvests: 0, speciesGrown: 0 });

  // Example: Fetching data from backend
  useEffect(() => {
    const fetchData = async () => {
        try {
            const regRes = await api.get("/registrations"); 
            const statsRes = await api.get("/stats");

            setRegistrations(Array.isArray(regRes.data) ? regRes.data : regRes.data.registrations || []);
            setStats(statsRes.data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    fetchData();
    }, []);

  return (
    <div className="p-6 space-y-6 my-20 w-1/2">
      {/* Recent Registrations */}
      <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-green-600">⏱</span> Recent Registrations
        </h2>
        <div className="mt-4 space-y-3">
          {registrations.map((reg, index) => (
            <div
              key={reg.id}
              className="flex items-center justify-between bg-green-50 border border-green-100 rounded-lg p-3"
            >
              <div className="flex items-center gap-3">
                <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                  #{index + 1}
                </span>
                <div>
                  <p className="font-medium text-gray-800">{reg.title}</p>
                  <p className="text-sm text-gray-500">{reg.time}</p>
                </div>
              </div>
              <span className="text-green-600 font-semibold">{reg.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-800">Dashboard Stats</h2>
        <div className="grid grid-cols-2 gap-4 text-center mt-4">
          <div>
            <p className="text-green-600 text-2xl font-bold">
              {stats.totalHarvests}
            </p>
            <p className="text-gray-600 text-sm">Total Harvests</p>
          </div>
          <div>
            <p className="text-green-600 text-2xl font-bold">
              {stats.speciesGrown}
            </p>
            <p className="text-gray-600 text-sm">Species Grown</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DashboardForm;