import { MdOutlineDashboard } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import Me from "../assets/me.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const menuBtns = [
    { name: "Dashboard", icon: MdOutlineDashboard, goto: "/" },
    { name: "Leads", icon: SlPeople, goto: "/leads" },
    { name: "Settings", icon: IoSettingsOutline, goto: "/settings" },
  ];

  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname.replace("/", "") || "Dashboard",
  );
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div className="p-8 flex">
        <div className="w-8 h-8 bg-indigo-600 mr-2 rounded-lg flex items-center justify-center text-white font-bold">
          A
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          AbcCRM
        </h1>
      </div>
      <div className="mt-3">
        <div className="block px-8">
          {menuBtns.map((menuBtn) => (
            <button
              onClick={() => {
                setActive(menuBtn.name);
                navigate(menuBtn.goto);
              }}
              className={` my-3 w-full flex ${active == menuBtn.name ? "bg-blue-100" : ""} items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors`}
            >
              <menuBtn.icon size={21} /> {menuBtn.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-auto p-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={Me}
            className="w-10 h-10 rounded-full border border-gray-200"
            alt="Profile"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">Blaise Kamali</p>
            <p className="text-xs text-gray-500">Business Owner</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
