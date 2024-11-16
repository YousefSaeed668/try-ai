import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, User, LogOut } from 'lucide-react';

export const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-[#242837] border-b border-gray-800 fixed top-0 right-0 left-64 z-30">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">Task Manager</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-300">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-300">
            <Settings className="w-5 h-5" />
          </button>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 hover:bg-gray-800 rounded-lg px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-300">John Doe</span>
              <div className="flex items-center justify-center w-8 h-8 rounded-full gradient-blue">
                <User className="w-5 h-5 text-white" />
              </div>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-[#242837] border border-gray-800 shadow-lg py-1">
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                >
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </Link>
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};