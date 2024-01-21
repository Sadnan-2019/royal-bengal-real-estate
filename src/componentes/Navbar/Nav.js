import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
     return (
          <div>
        <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-lg font-bold">
          Your App Name
        </NavLink>
        <div className="space-x-4">
          <NavLink
            to="/"
            className="text-white hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            About
          </NavLink>
          {/* Add more NavLink components for other pages */}
        </div>
      </div>
    </nav>
          </div>
     );
};

export default Nav;