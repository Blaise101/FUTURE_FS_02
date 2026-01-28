export default function StatCard({ label, value, trend, change }) {
  return (
    <div
      key={label}
      className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
    >
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <span
          className={`text-xs font-semibold ${trend === "up" ? "text-green-600" : "text-blue-600"}`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
