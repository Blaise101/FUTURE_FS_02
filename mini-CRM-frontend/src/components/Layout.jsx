import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-50">
        <Sidebar />

        <main className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-y-auto">Body</div>
        </main>
      </div>
    </>
  );
}
