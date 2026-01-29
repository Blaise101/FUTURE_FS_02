export default function Settings() {
  return (
    <div className="p-12 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold mb-4">CRM Personalization</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                Business Name
              </label>
              <input
                type="text"
                value="AbcCRM"
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                Lead Sources
              </label>
              <div className="flex flex-wrap gap-2">
                {["Website", "LinkedIn", "Referral", "Google"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
