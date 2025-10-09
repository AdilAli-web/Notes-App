import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <NavLink
            to="/Home"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Notes
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to={'/Home'} className="text-gray-300 hover:text-white">Home</Link>
          <Link to={'/Paste'} className="text-gray-300 hover:text-white">List</Link>
          <Link to={'/Home'} className="text-gray-300 hover:text-white">Contact</Link>
          <Link to={'/Pastes/:id'} className="text-gray-300 hover:text-white">View</Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
