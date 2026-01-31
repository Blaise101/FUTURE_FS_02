import { MdSearch } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import CreateLeadModal from "../partials/CreateLeadModal";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex w-full items-center justify-between px-8 z-10">
      <div className="flex items-center gap-4 md:hidden">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
          N
        </div>
      </div>
      <div className="relative max-w-md w-full hidden sm:block">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <MdSearch />
        </div>
        <input
          type="text"
          placeholder="Search leads, companies..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 flex text-gray-400 hover:text-gray-500">
          <FaRegBell className="w-6 h-6" />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <FaPlus />
          New Lead
        </button>
        <CreateLeadModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
}
