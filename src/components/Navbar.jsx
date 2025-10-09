// import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <NavLink
            to="/"
            className="hover:text-blue-500"
          >
            Notes
          </NavLink>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to={'/'} className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Home</Link>
          <Link to={'/Paste'} className="text-gray-600 hover:text-blue-500 transition-colors duration-300">List</Link>
          <Link to={'/Pastes/:id'} className="text-gray-600 hover:text-blue-500 transition-colors duration-300">View</Link>
          {/* <button onClick={() => setTheme(!theme)} className='toggle-btn'>{theme ? 'light' : 'dark'}</button> */}
        </div>
        <div className="md:hidden">
          <button className="text-gray-800 hover:text-blue-500 focus:outline-none">
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
