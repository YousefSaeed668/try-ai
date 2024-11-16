import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Pencil, Trash2, Check } from 'lucide-react';

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export const TaskDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data - in a real app, this would come from an API or state management
  const task = {
    id,
    title: 'Design Dashboard',
    category: 'Work',
    priority: 'High',
    description: 'Create a modern dashboard design for the task management system. Include statistics, recent tasks, and user profile section.',
    progress: 75,
    createdBy: 'John Doe',
    createdDate: 'Nov 15, 2024',
    dueDate: 'Nov 20, 2024',
    lastUpdated: '2 hours ago',
    subtasks: [
      { id: '1', title: 'Design Header Section', completed: true },
      { id: '2', title: 'Create Statistics Cards', completed: true },
      { id: '3', title: 'Design Task List View', completed: false },
    ] as Subtask[],
  };

  const [subtasks, setSubtasks] = useState<Subtask[]>(task.subtasks);

  const toggleSubtask = (id: string) => {
    setSubtasks(prev =>
      prev.map(subtask =>
        subtask.id === id
          ? { ...subtask, completed: !subtask.completed }
          : subtask
      )
    );
  };

  const handleDelete = () => {
    // Handle task deletion
    navigate('/tasks');
  };

  return (
    <div className="min-h-screen bg-[#1a1e2e] pt-16 pl-64">
      <main className="p-8">
        {/* Breadcrumb */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center text-sm">
            <Link to="/tasks" className="text-gray-400 hover:text-gray-300">
              My Tasks
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-white">{task.title}</span>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate(`/tasks/${id}/edit`)}
              className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity flex items-center"
            >
              <Pencil className="w-4 h-4 mr-2" />
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </button>
          </div>
        </div>

        {/* Task Details Card */}
        <div className="card-dark rounded-xl p-6 mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">{task.title}</h1>
          
          <div className="flex space-x-4 mb-6">
            <span className="px-3 py-1 rounded-full text-sm font-medium gradient-green text-white">
              {task.category}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium gradient-orange text-white">
              {task.priority} Priority
            </span>
          </div>
          
          <p className="text-gray-300 mb-6">{task.description}</p>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="gradient-blue rounded-full h-2 transition-all duration-300"
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
            <span className="text-gray-400">{task.progress}% Complete</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Subtasks */}
          <div className="card-dark rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Subtasks</h2>
            <div className="space-y-4">
              {subtasks.map((subtask) => (
                <div
                  key={subtask.id}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#1a1e2e] border border-gray-700"
                >
                  <button
                    onClick={() => toggleSubtask(subtask.id)}
                    className={`w-5 h-5 rounded flex items-center justify-center border ${
                      subtask.completed
                        ? 'gradient-blue border-transparent'
                        : 'border-gray-600'
                    }`}
                  >
                    {subtask.completed && <Check className="w-3 h-3 text-white" />}
                  </button>
                  <span className={`text-gray-300 ${subtask.completed ? 'line-through' : ''}`}>
                    {subtask.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="card-dark rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Details</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Created by</p>
                <p className="text-white">{task.createdBy}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Created Date</p>
                <p className="text-white">{task.createdDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Due Date</p>
                <p className="text-white">{task.dueDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Last Updated</p>
                <p className="text-white">{task.lastUpdated}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};