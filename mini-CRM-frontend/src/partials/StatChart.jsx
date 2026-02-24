import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";

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
      // fetch("http://localhost:5001/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data.leads))
      .catch((err) => console.error(err));
  }, []);

  const dataValues = statuses.map(
    (status) => leads.filter((lead) => lead.status === status).length,
  );

  const chartData = {
    labels: statuses,
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          "#6366F1", // indigo
          "#A855F7", // purple
          "#FACC15", // yellow
          "#3B82F6", // blue
          "#22C55E", // green
          "#EF4444", // red
        ],
        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 12,
        spacing: 1, // space between slices
        borderRadius: 5, // rounded edges 🔥
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 6,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151",
          font: {
            size: 13,
            family: "Inter, sans-serif",
            weight: "500",
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#fff",
        bodyColor: "#d1d5db",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="w-full max-w-md mx-auto h-full shadow-lg p-6">
      <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
        Overall Leads
      </h2>

      <div className="h-[280px]">
        <Pie
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
}
