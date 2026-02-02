import { StatusColors } from "../assets/constants";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function LeadsDetails({ onBack, lead }) {
  const leadStatuses = [
    "NEW",
    "CONTACTED",
    "QUALIFIED",
    "PROPOSAL",
    "CLOSED",
    "LOST",
  ];

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [currentStatus, setCurrentStatus] = useState(lead?.status || "");

  // Fetch notes when lead changes
  useEffect(() => {
    if (!lead?._id) return;

    fetch(`http://localhost:5001/api/leads/${lead._id}/notes`)
      .then((res) => res.json())
      .then((data) => {
        const notesArray = Array.isArray(data) ? data : data.notes || [];
        setNotes(notesArray);
      })
      .catch((err) => console.error("Error fetching notes:", err));
  }, [lead]);

  // Update status
  const changeStatus = async (leadId, status) => {
    try {
      setCurrentStatus(status); // optimistic UI update

      const res = await fetch(
        `http://localhost:5001/api/leads/${leadId}/status`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error Updating status:", error);
    }
  };

  // Add a new note
  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    try {
      const res = await fetch(
        `http://localhost:5001/api/leads/${lead._id}/notes`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: newNote }),
        },
      );

      const savedNote = await res.json();

      // Add new note to UI immediately
      setNotes((prev) => [savedNote, ...prev]);
      setNewNote("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  if (!lead) {
    return <div className="p-8">No lead selected.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:max-h-[600px] overflow-hidden">
      <div className="w-full lg:w-96 bg-gray-50 border-r p-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 mb-6 font-medium"
        >
          <FaArrowLeft className="w-4 h-4" />
          Back to Leads
        </button>

        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
              {lead.name?.charAt(0)}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{lead.name}</h2>
              <p className="text-gray-500 font-medium">
                {lead.company} • {lead.source}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              Status
            </p>
            <select
              value={currentStatus}
              className={`px-4 py-2 w-full rounded-lg text-sm font-bold border ${
                StatusColors[currentStatus] || ""
              } cursor-pointer outline-none`}
              onChange={(e) => changeStatus(lead._id, e.target.value)}
            >
              {leadStatuses.map((s) => (
                <option
                  key={s}
                  value={s}
                >
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              Email
            </p>
            <p className="text-sm font-medium text-gray-900">{lead.email}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              Phone
            </p>
            <p className="text-sm font-medium text-gray-900">{lead.phone}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              Inquiry Date
            </p>
            <p className="text-sm font-medium text-gray-900">
              {new Date(lead.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <aside className="flex-1 p-8 border-gray-200 overflow-y-auto">
        <div className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Original Inquiry
          </h3>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 text-gray-700 leading-relaxed italic">
            "{lead.message}"
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Activity Timeline
          </h3>

          <form
            className="mb-8"
            onSubmit={handleAddNote}
          >
            <textarea
              placeholder="Add a private note for the team..."
              className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all"
              rows={3}
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-black transition-colors"
              >
                Add Note
              </button>
            </div>
          </form>

          <div className="space-y-6">
            {notes.map((note) => (
              <div
                key={note._id || note.id}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                    {note.author?.charAt(0) || "?"}
                  </div>
                  <div className="w-px flex-1 bg-gray-200 my-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-gray-900">
                      {note.author || "Team"}
                    </span>
                    <span className="text-xs text-gray-400">
                      • {new Date(note.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
