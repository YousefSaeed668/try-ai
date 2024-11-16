import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
  color: string;
  tasks: number;
};

const categories: Category[] = [
  { id: 1, name: 'Work', color: '#00b894', tasks: 10 },
  { id: 2, name: 'Personal', color: '#0984e3', tasks: 8 },
  { id: 3, name: 'Shopping', color: '#ff9f43', tasks: 6 },
  { id: 4, name: 'Health', color: '#ff6b6b', tasks: 4 },
  { id: 5, name: 'Education', color: '#a55eea', tasks: 3 },
  { id: 6, name: 'Finance', color: '#26de81', tasks: 5 },
];

export const Categories = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCategories = filteredCategories.slice(startIndex, startIndex + itemsPerPage);

  const stats = [
    {
      title: 'Total Categories',
      value: categories.length,
      gradient: 'gradient-blue',
    },
    {
      title: 'Total Tasks',
      value: categories.reduce((sum, cat) => sum + cat.tasks, 0),
      gradient: 'gradient-green',
    },
    {
      title: 'Most Used',
      value: categories.reduce((prev, current) => 
        prev.tasks > current.tasks ? prev : current
      ).name,
      gradient: 'gradient-orange',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1e2e] pt-16 pl-64">
      <main className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Categories</h1>
          <button className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Add Category
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.gradient} rounded-xl p-6`}>
              <p className="text-sm font-medium text-white/80">{stat.title}</p>
              <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Categories Table */}
        <div className="card-dark rounded-xl overflow-hidden">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 bg-[#1a1e2e] text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 text-gray-400 text-sm">
            <div className="col-span-4">CATEGORY NAME</div>
            <div className="col-span-3">COLOR</div>
            <div className="col-span-3">TASKS</div>
            <div className="col-span-2">ACTIONS</div>
          </div>

          {/* Table Body */}
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 hover:bg-[#2a2f3f] transition-colors items-center cursor-pointer"
              onClick={() => navigate(`/tasks/${category.id}`)}
            >
              <div className="col-span-4 text-white font-medium">{category.name}</div>
              <div className="col-span-3 flex items-center space-x-2">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-gray-400">{category.color}</span>
              </div>
              <div className="col-span-3 text-gray-400">{category.tasks} tasks</div>
              <div className="col-span-2 flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle edit
                  }}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle delete
                  }}
                  className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-900/20 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-4 flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 text-gray-400 hover:text-white disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    currentPage === page
                      ? 'gradient-blue text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-400 hover:text-white disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};