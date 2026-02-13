import { Bell, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">

      {/* Left Side - Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          T
        </div>
        <h1 className="text-xl font-semibold text-gray-800">
          TradePulse
        </h1>
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center gap-6">

        {/* Notification Icon */}
        <button className="relative text-gray-600 hover:text-blue-600 transition">
          <Bell size={22} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-gray-700 font-medium">
            Vishnu
          </span>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
          <LogOut size={20} />
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;
