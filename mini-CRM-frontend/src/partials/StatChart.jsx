import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatChart() {
  const statuses = [
    "NEW",
    "QUALIFIED",
    "CONTACTED",
    "PROPOSAL",
    "CLOSED",
    "LOST",
  ];

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("https://future-fs-02-backend-i014.onrender.com/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.leads);
      })
      .catch((err) => console.error(err));
  }, []);

  const chartData = {
    labels: statuses,
    datasets: [
      {
        label: "Lead status",
        data: statuses.map(
          (status) => leads.filter((lead) => lead.status === status).length,
        ),
        backgroundColor: [
          "rgba(0, 0, 255, 0.1)",
          "rgba(158, 0, 255, 0.1)",
          "rgba(255, 253, 0, 0.1)",
          "rgba(78, 0, 255, 0.1)",
          "rgba(0, 255, 0, 0.1)",
          "rgba(255, 0, 0, 0.1)",
        ],
        borderColor: [
          "rgba(0, 0, 255, 0.3)",
          "rgba(158, 0, 255, 0.3)",
          "rgba(255, 253, 0, 0.3)",
          "rgba(78, 0, 255, 0.3)",
          "rgba(0, 255, 0, 0.3)",
          "rgba(255, 0, 0, 0.3)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // You can add many options here to customize your chart
    plugins: {
      legend: {
        position: "top",
      },
    },
    maintainAspectRatio: false, // Allows you to control the size with CSS
  };

  return (
    <div className="w-full max-h-[300px]">
      <h2 className="text-center mb-3 py-3 font-bold text-gray-900">
        Overall Leads
      </h2>
      <hr className="mb-6" />
      <Pie
        data={chartData}
        options={options}
      />
    </div>
  );
}
