import StatCard from "../partials/StatCard";
import { leads as recentLeads, StatusColors } from "../assets/constants";
import StatChart from "../partials/StatChart";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const stats = [
    { label: "Total Leads", value: 27, change: "+12%", trend: "up" },
    { label: "Conversion Rate", value: "18.4%", change: "+2.1%", trend: "up" },
    { label: "Response Time", value: "2.4h", change: "-15%", trend: "down" },
    { label: "Pipeline Value", value: "$45,200", change: "+5%", trend: "up" },
  ];
  const navigate = useNavigate();

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
                  key={lead.id}
                  className="px-6 py-4 flex items-center hover:bg-gray-50 cursor-pointer transition-colors"
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

          <div className="border border-gray-200 rounded-xl bg-white flex flex-col">
            <StatChart />
          </div>
        </div>
      </div>
    </>
  );
}
