import React, { useState } from 'react';
import { Camera, Moon, Bell } from 'lucide-react';

export const Profile = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-[#1a1e2e] pt-16 pl-64">
      <main className="p-8">
        <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>

        {/* Profile Section */}
        <div className="card-dark rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-36 h-36 rounded-full gradient-blue flex items-center justify-center text-3xl font-bold text-white">
                  JD
                </div>
                <button className="absolute bottom-0 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <button className="px-4 py-2 gradient-blue text-white text-sm rounded-lg hover:opacity-90 transition-opacity">
                Change Photo
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">
                  Job Title
                </label>
                <input
                  type="text"
                  defaultValue="Product Designer"
                  className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">
                  Location
                </label>
                <input
                  type="text"
                  defaultValue="San Francisco, CA"
                  className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <h2 className="text-xl font-bold text-white mb-4">Security</h2>
        <div className="card-dark rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">
                Current Password
              </label>
              <input
                type="password"
                className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">
                New Password
              </label>
              <input
                type="password"
                className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <h2 className="text-xl font-bold text-white mb-4">Preferences</h2>
        <div className="card-dark rounded-xl p-8">
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <Moon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-300">Dark Mode</p>
                  <p className="text-xs text-gray-400">
                    Toggle dark mode appearance
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-blue-500' : 'bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <Bell className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-300">
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-400">
                    Receive email notifications
                  </p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-blue-500' : 'bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <button className="px-6 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
};