"use client"

// Sidebar.tsx
import React from 'react';
import { Home, Settings } from '@mui/icons-material';

const Sidebar: React.FC<{ isSidebarOpen: boolean }> = ({ isSidebarOpen }) => {
  return (
    <aside className={`bg-gray-200 text-gray-700 md:w-[30] border-r lg:border-r-0 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="p-4">
        <h2 className="text-xl font-semibold hidden lg:block">Menu</h2>
      </div>
      <nav className="p-2">
        <ul>
          <li className="flex items-center mb-2">
            <Home className="mr-2" />
            <span className="">Home</span>
          </li>
          <li className="flex items-center mb-2">
            <Settings className="mr-2" />
            <span className="">Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

