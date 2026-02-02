import { useState } from "react";
import { StatusColors } from "../assets/constants";
import { FaArrowRight } from "react-icons/fa";

export default function LeadsList({ leads = [], onSelect }) {
  const leadStatuses = [
    { label: "All", name: "All" },
    { label: "NEW", name: "New" },
    { label: "CONTACTED", name: "Contacted" },
    { label: "QUALIFIED", name: "Qualified" },
    { label: "PROPOSAL", name: "Proposal" },
    { label: "CLOSED", name: "Closed" },
    { label: "LOST", name: "Lost" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredLeads =
    filter === "All"
      ? leads
      : Array.isArray(leads)
        ? leads.filter((l) => l.status === filter)
        : [];

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Leads</h2>
          <p className="text-gray-500">
            Manage and track your incoming prospects.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {leadStatuses.map((s) => (
            <button
              key={s.name}
              onClick={() => setFilter(s.label)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                filter === s.label
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-600"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Lead Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Source</th>
                <th className="px-6 py-4">Created At</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredLeads.map((lead) => (
                <tr
                  key={lead._id}
                  onClick={() => onSelect(lead)}
                  className="hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 capitalize rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs mr-3">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {lead.name}
                        </p>
                        <p className="text-xs text-gray-500">{lead.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${StatusColors[lead.status]}`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {lead.source}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {lead.company}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors opacity-0 group-hover:opacity-100">
                      <FaArrowRight />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLeads.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-gray-500">No leads found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
