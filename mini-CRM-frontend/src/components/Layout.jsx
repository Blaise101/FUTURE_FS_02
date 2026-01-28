import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Leads, Settings } from "../pages/pages";

export default function Layout() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-gray-50">
        <Sidebar />

        <main className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
              />
              <Route
                path="/leads"
                element={<Leads />}
              />
              <Route
                path="/settings"
                element={<Settings />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
