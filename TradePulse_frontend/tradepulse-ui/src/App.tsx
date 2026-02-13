import './App.css'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="w-64 bg-slate-900 text-white p-6">
          Sidebar
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 p-8">
          Dashboard Content
        </div>

      </div>

    </div>
  );
}

export default App;
