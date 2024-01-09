"use client"
// Navbar.tsx
import React from 'react';
import { Search, Menu } from '@mui/icons-material';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
            />
            <Search className="text-white ml-2" />
          </div>
          <div className="lg:hidden">
            <Menu className="h-6 w-6 cursor-pointer" />
          </div>
          <div className="lg:flex items-center hidden">
            <span className="text-sm font-medium mr-2">John Doe</span>
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

