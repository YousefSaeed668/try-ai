import React, { useState } from 'react';
import { Search, ChevronDown, LayoutList, Check } from 'lucide-react';

type Task = {
  id: number;
  title: string;
  project: string;
  status: string;
  statusColor: string;
  dueDate: string;
  priority: string;
  priorityColor: string;
  progress: number;
};

const tasks: Task[] = [
  {
    id: 1,
    title: 'Design New Landing Page',
    project: 'Website Redesign Project',
    status: 'In Progress',
    statusColor: 'gradient-blue',
    dueDate: 'Oct 25',
    priority: 'High',
    priorityColor: 'gradient-orange',
    progress: 75,
  },
  {
    id: 2,
    title: 'Content Review',
    project: 'Blog Posts',
    status: 'Completed',
    statusColor: 'gradient-green',
    dueDate: 'Oct 23',
    priority: 'Medium',
    priorityColor: 'gradient-blue',
    progress: 100,
  },
  {
    id: 3,
    title: 'User Research',
    project: 'UX Improvement',
    status: 'Pending',
    statusColor: 'gradient-orange',
    dueDate: 'Oct 27',
    priority: 'Low',
    priorityColor: 'text-gray-400',
    progress: 30,
  },
];

export const MyTasks = () => {
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const toggleTask = (taskId: number) => {
    setSelectedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1e2e] pt-16 pl-64">
      <main className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">My Tasks</h1>
          <button className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity flex items-center">
            <span className="mr-2">Add Task</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="card-dark rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full bg-[#1a1e2e] text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700">
                <span>Status</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <button className="flex items-center space-x-2 bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700">
                <span>Priority</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <button className="flex items-center space-x-2 bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700">
                <span>Due Date</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <button className="flex items-center space-x-2 bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700">
                <LayoutList className="w-4 h-4" />
                <span>List View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tasks Table */}
        <div className="card-dark rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 text-gray-400 text-sm">
            <div className="col-span-5">TASK</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-2">DUE DATE</div>
            <div className="col-span-2">PRIORITY</div>
            <div className="col-span-1">PROGRESS</div>
          </div>

          {tasks.map((task) => (
            <div
              key={task.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 hover:bg-[#2a2f3f] transition-colors"
            >
              <div className="col-span-5 flex items-center space-x-4">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedTasks.includes(task.id)
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-600'
                  }`}
                >
                  {selectedTasks.includes(task.id) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </button>
                <div>
                  <h3 className="text-white font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-400">{task.project}</p>
                </div>
              </div>
              <div className="col-span-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.statusColor} text-white`}>
                  {task.status}
                </span>
              </div>
              <div className="col-span-2 text-gray-400">{task.dueDate}</div>
              <div className="col-span-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.priorityColor}`}>
                  {task.priority}
                </span>
              </div>
              <div className="col-span-1">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`${task.statusColor} rounded-full h-2 transition-all duration-300`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-400 hover:text-white">◀ Previous</button>
            <button className="px-3 py-2 gradient-blue text-white rounded">1</button>
            <button className="px-3 py-2 text-gray-400 hover:text-white">2</button>
            <button className="px-3 py-2 text-gray-400 hover:text-white">3</button>
            <span className="px-3 py-2 text-gray-400">...</span>
            <button className="px-3 py-2 text-gray-400 hover:text-white">12</button>
            <button className="px-3 py-2 text-gray-400 hover:text-white">Next ▶</button>
          </div>
        </div>
      </main>
    </div>
  );
};