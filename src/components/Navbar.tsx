import { User, Menu, Bell } from "lucide-react";
import { ShiftingDropDown } from "./ShiftingDropDown";
import { Link as RouterLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-700 relative z-50">
      <div className="hidden lg:block">
        <div className="w-full max-w-7xl mx-auto px-4 h-19 flex items-center justify-between">
          <a href="/" className="shrink-0">
            <img src="/logowhite.png" className="w-28" alt="Logo" />
          </a>
          <div className="flex items-center gap-2 xl:gap-4">
            <ShiftingDropDown />
            <RouterLink to="/auth" className="rounded-lg border border-white/60 bg-transparent px-5 py-3 max-xl:text-sm xl:text-base font-medium text-white whitespace-nowrap transition-colors hover:bg-white hover:text-blue-900">
              Login / Sign Up
            </RouterLink>
            <button className="rounded-lg bg-white px-5 py-3 max-xl:text-sm xl:text-base font-medium whitespace-nowrap transition-colors hover:bg-white/90" style={{ color: '#1e3a8a' }}>
              Add Job
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-19 flex items-center justify-between">
          <a href="/" className="shrink-0">
            <img src="/logo.svg" className="w-28" alt="Logo" />
          </a>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <RouterLink to="/auth" className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-6 h-6" />
            </RouterLink>
            <a href="/notfound" className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-6 h-6" />
            </a>
            <a href="/notfound" className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
