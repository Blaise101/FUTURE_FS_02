import { useState } from "react";

export default function CreateLeadModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("New Lead:", form);

    // Later: send this to backend
    await fetch("http://localhost:5001/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create New Lead</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <input
            name="source"
            placeholder="Lead Source (e.g. Website, Referral)"
            value={form.source}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Message / Details"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg h-24"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Create Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
