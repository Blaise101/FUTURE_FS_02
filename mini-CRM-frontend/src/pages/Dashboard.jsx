import StatCard from "../partials/StatCard";
import { StatusColors } from "../assets/constants";
import StatChart from "../partials/StatChart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  const [recentLeads, setRecentLeads] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("https://future-fs-02-backend-i014.onrender.com/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setRecentLeads(data.leads);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://future-fs-02-backend-i014.onrender.com/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats([
          {
            label: "Total Leads",
            value: data.totalLeads,
            change: "+12%",
            trend: "up",
          },
          {
            label: "Conversion Rate",
            value: data.conversionRate,
            change: data.conversionChange,
            trend: data.conversionTrend,
          },
          {
            label: "Response Time",
            value: data.responseTime,
            change: "-15%",
            trend: "down",
          },
          {
            label: "Overall Notes",
            value: data.overallNotes.toLocaleString(),
            change: "+5%",
            trend: "up",
          },
        ]);
      });
  }, []);

  return (
    <>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome back, Blaise
          </h2>
          <p className="text-gray-500">
            Here's what's happening with your leads today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard
              label={stat.label}
              value={stat.value}
              trend={stat.trend}
              change={stat.change}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Recent Leads</h3>
              <button
                onClick={() => {
                  navigate("/leads");
                }}
                className="text-sm text-indigo-600 font-medium hover:underline"
              >
                View all
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {recentLeads.slice(0, 5).map((lead) => (
                <div
                  key={lead._id}
                  className="px-6 py-4 flex items-center transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold mr-4">
                    {lead.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {lead.name}
                    </p>
                    <p className="text-xs text-gray-500">{lead.company}</p>
                  </div>
                  <div className="px-3 py-1 text-xs font-medium rounded-full border mr-8 hidden sm:block">
                    {lead.source}
                  </div>
                  <div
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${StatusColors[lead.status]}`}
                  >
                    {lead.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl bg-white">
            <StatChart />
          </div>
        </div>
      </div>
    </>
  );
}
