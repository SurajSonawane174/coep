import { useState } from "react";
import { Menu, ChevronDown, LogIn } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [impLinksDropdown, setImpLinksDropdown] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Leftmost Icon */}
      <div className="flex items-center space-x-2">
        <Menu className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        <span className="font-bold text-lg">MySite</span>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        
        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setServicesDropdown(true)}
          onMouseLeave={() => setServicesDropdown(false)}
        >
          <button className="flex items-center space-x-1 hover:text-gray-400">
            <span>Services</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${servicesDropdown ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {servicesDropdown && (
            <div className="absolute left-0 mt-0 w-40 bg-gray-900 text-white rounded-lg shadow-md py-2 border border-gray-700 z-50">
              <Link to="/web-development" className="block px-4 py-2 hover:bg-gray-800">Web Development</Link>
              <Link to="/app-development" className="block px-4 py-2 hover:bg-gray-800">App Development</Link>
              <Link to="/seo-optimization" className="block px-4 py-2 hover:bg-gray-800">SEO Optimization</Link>
            </div>
          )}
        </div>

        <Link to="/hackathon" className="hover:text-gray-400">Hackathons</Link>
        <Link to="/notice" className="hover:text-gray-400">Notices</Link>
        <Link to="/events" className="hover:text-gray-400">Events</Link>

        {/* Important Links Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setImpLinksDropdown(true)}
          onMouseLeave={() => setImpLinksDropdown(false)}
        >
          <button className="flex items-center space-x-1 hover:text-gray-400">
            <span>Important Links</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${impLinksDropdown ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {impLinksDropdown && (
            <div className="absolute left-0 mt-0 w-40 bg-gray-900 text-white rounded-lg shadow-md py-2 border border-gray-700 z-50">
              <Link to="/moodle" className="block px-4 py-2 hover:bg-gray-800">Moodle</Link>
              <Link to="/mis" className="block px-4 py-2 hover:bg-gray-800">MIS</Link>
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-800">Login</Link>
            </div>
          )}
        </div>
      </div>

      {/* Rightmost Login Icon */}  
      <div>
        <Link to="/login">
          <LogIn className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
