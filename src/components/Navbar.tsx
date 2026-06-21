import { User, Menu, Bell } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-19 flex items-center justify-between">
        <a href="#" className="shrink-0">
          <img src="/logo.svg" className="w-28" alt="Logo" />
        </a>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <a href="#" className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </a>
        </div>
      </div>
      

    </nav>
  );
};

export default Navbar;
