import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, FolderKanban, User, Plus } from 'lucide-react';

type Category = {
  name: string;
  gradient: string;
};

const categories: Category[] = [
  { name: 'Work', gradient: 'gradient-green' },
  { name: 'Personal', gradient: 'gradient-blue' },
  { name: 'Shopping', gradient: 'gradient-orange' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-[#242837] border-r border-gray-800 fixed left-0 top-0">
      <div className="p-4">
        <div className="space-y-2">
          <Link
            to="/"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
              location.pathname === '/'
                ? 'gradient-blue text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/tasks"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
              location.pathname === '/tasks'
                ? 'gradient-blue text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <CheckSquare className="w-5 h-5 mr-3" />
            My Tasks
          </Link>
          <Link
            to="/profile"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
              location.pathname === '/profile'
                ? 'gradient-blue text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <User className="w-5 h-5 mr-3" />
            Profile
          </Link>
          <Link
            to="/categories"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
          >
            <FolderKanban className="w-5 h-5 mr-3" />
            Categories
          </Link>
        </div>

        <div className="mt-8">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Categories
          </h3>
          <div className="mt-4 space-y-1">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
              >
                <span className={`w-3 h-3 rounded-full ${category.gradient} mr-3`} />
                {category.name}
              </a>
            ))}
            <button className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800 w-full">
              <Plus className="w-4 h-4 mr-3" />
              Add Category
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};