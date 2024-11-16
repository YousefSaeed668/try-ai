import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, AlertCircle, FolderOpen, Plus, X } from 'lucide-react';

type Priority = 'high' | 'medium' | 'low';
type Category = 'Work' | 'Personal' | 'Shopping';

interface Subtask {
  id: string;
  title: string;
}

export const AddTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [category, setCategory] = useState<Category>('Work');
  const [newSubtask, setNewSubtask] = useState('');
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleAddSubtask = () => {
    if (newSubtask.trim()) {
      setSubtasks([...subtasks, { id: Date.now().toString(), title: newSubtask.trim() }]);
      setNewSubtask('');
    }
  };

  const handleRemoveSubtask = (id: string) => {
    setSubtasks(subtasks.filter(subtask => subtask.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/tasks');
  };

  const getPriorityColor = (p: Priority) => {
    switch (p) {
      case 'high': return 'gradient-orange';
      case 'medium': return 'gradient-blue';
      case 'low': return 'gradient-green';
    }
  };

  const getCategoryColor = (c: Category) => {
    switch (c) {
      case 'Work': return 'gradient-green';
      case 'Personal': return 'gradient-blue';
      case 'Shopping': return 'gradient-orange';
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1e2e] pt-16 pl-64">
      <main className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Add New Task</h1>
        </div>

        <form onSubmit={handleSubmit} className="card-dark rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Task Title */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Task Title*
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                  placeholder="Enter task title"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 h-32 resize-none"
                  placeholder="Enter task description"
                  maxLength={500}
                />
                <p className="text-sm text-gray-500 mt-1">
                  {description.length}/500 characters
                </p>
              </div>

              {/* Subtasks */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subtasks
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newSubtask}
                    onChange={(e) => setNewSubtask(e.target.value)}
                    className="flex-1 bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Add a subtask"
                  />
                  <button
                    type="button"
                    onClick={handleAddSubtask}
                    className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  {subtasks.map((subtask) => (
                    <div
                      key={subtask.id}
                      className="flex items-center justify-between bg-[#1a1e2e] px-4 py-2 rounded-lg"
                    >
                      <span className="text-gray-300">{subtask.title}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSubtask(subtask.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Due Date*
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full bg-[#1a1e2e] text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Priority */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Priority*
                </label>
                <button
                  type="button"
                  onClick={() => setShowPriorityDropdown(!showPriorityDropdown)}
                  className="w-full flex items-center justify-between bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                  </div>
                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(priority)}`} />
                </button>
                {showPriorityDropdown && (
                  <div className="absolute z-10 w-full mt-2 bg-[#242837] rounded-lg border border-gray-700 shadow-lg">
                    {(['high', 'medium', 'low'] as Priority[]).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setPriority(p);
                          setShowPriorityDropdown(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-[#1a1e2e]"
                      >
                        <span>{p.charAt(0).toUpperCase() + p.slice(1)} Priority</span>
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(p)}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Category*
                </label>
                <button
                  type="button"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="w-full flex items-center justify-between bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center">
                    <FolderOpen className="w-5 h-5 mr-2" />
                    {category}
                  </div>
                  <div className={`w-2 h-2 rounded-full ${getCategoryColor(category)}`} />
                </button>
                {showCategoryDropdown && (
                  <div className="absolute z-10 w-full mt-2 bg-[#242837] rounded-lg border border-gray-700 shadow-lg">
                    {(['Work', 'Personal', 'Shopping'] as Category[]).map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => {
                          setCategory(c);
                          setShowCategoryDropdown(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-[#1a1e2e]"
                      >
                        <span>{c}</span>
                        <div className={`w-2 h-2 rounded-full ${getCategoryColor(c)}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mt-8">
            <button
              type="button"
              onClick={() => navigate('/tasks')}
              className="px-6 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Create Task
            </button>
            <button
              type="button"
              className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};