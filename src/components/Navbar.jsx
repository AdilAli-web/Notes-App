
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <NavLink
            to="/"
            className="hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Notes
          </NavLink>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to={'/'} className="text-gray-600 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-105">Home</Link>
          <Link to={'/Paste'} className="text-gray-600 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-105">List</Link>
          <Link to={'/Pastes/:id'} className="text-gray-600 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-105">View</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-blue-500 focus:outline-none transition-all duration-300 ease-in-out hover:rotate-90"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={'/'} className="block text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to={'/Paste'} className="block text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">List</Link>
            <Link to={'/Pastes/:id'} className="block text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">View</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
