import React from 'react';
import { CheckCircle, Clock, ListTodo, AlertCircle } from 'lucide-react';
import { StatCard } from './StatCard';
import { TaskCard } from './TaskCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line } from 'recharts';

const stats = [
  { title: 'Total Tasks', value: 24, icon: ListTodo, gradient: 'gradient-blue' },
  { title: 'In Progress', value: 8, icon: Clock, gradient: 'gradient-orange' },
  { title: 'Completed', value: 12, icon: CheckCircle, gradient: 'gradient-green' },
  { title: 'Overdue', value: 4, icon: AlertCircle, gradient: 'gradient-orange' },
];

const tasks = [
  {
    category: 'Work',
    gradient: 'gradient-green',
    title: 'Design Dashboard',
    dueDate: 'Due Today',
    progress: 75,
  },
  {
    category: 'Personal',
    gradient: 'gradient-blue',
    title: 'Grocery Shopping',
    dueDate: 'Tomorrow',
    progress: 40,
  },
  {
    category: 'High Priority',
    gradient: 'gradient-orange',
    title: 'Project Meeting',
    dueDate: 'In 2 Days',
    progress: 20,
  },
  {
    category: 'Work',
    gradient: 'gradient-green',
    title: 'Code Review',
    dueDate: 'Next Week',
    progress: 60,
  },
  {
    category: 'Personal',
    gradient: 'gradient-blue',
    title: 'Gym Session',
    dueDate: 'Today',
    progress: 90,
  },
  {
    category: 'High Priority',
    gradient: 'gradient-orange',
    title: 'Client Call',
    dueDate: 'In 3 Days',
    progress: 35,
  },
];

const weeklyData = [
  { name: 'Mon', tasks: 4 },
  { name: 'Tue', tasks: 6 },
  { name: 'Wed', tasks: 8 },
  { name: 'Thu', tasks: 5 },
  { name: 'Fri', tasks: 7 },
  { name: 'Sat', tasks: 3 },
  { name: 'Sun', tasks: 2 },
];

const categoryData = [
  { name: 'Work', value: 10, color: '#00b894' },
  { name: 'Personal', value: 8, color: '#0984e3' },
  { name: 'Shopping', value: 6, color: '#ff9f43' },
];

const priorityData = [
  { date: '1', high: 4, medium: 3, low: 2 },
  { date: '2', high: 3, medium: 4, low: 3 },
  { date: '3', high: 5, medium: 2, low: 4 },
  { date: '4', high: 2, medium: 5, low: 3 },
  { date: '5', high: 4, medium: 3, low: 2 },
  { date: '6', high: 3, medium: 4, low: 5 },
  { date: '7', high: 5, medium: 3, low: 2 },
];

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#1a1e2e] pt-16 pl-64">
      <main className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <button className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity flex items-center">
            <span className="mr-2">Add Task</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Weekly Tasks Chart */}
          <div className="card-dark rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Weekly Tasks</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#242837',
                    border: 'none',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="tasks" fill="url(#gradient-blue)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div className="card-dark rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Category Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#242837',
                    border: 'none',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {categoryData.map((category) => (
                <div key={category.name} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm text-gray-400">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Priority Trends */}
          <div className="card-dark rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Priority Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priorityData}>
                <XAxis dataKey="date" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#242837',
                    border: 'none',
                    borderRadius: '8px',
                  }}
                />
                <Line type="monotone" dataKey="high" stroke="#ff6b6b" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="medium" stroke="#0984e3" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="low" stroke="#00b894" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-[#ff6b6b]" />
                <span className="text-sm text-gray-400">High</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-[#0984e3]" />
                <span className="text-sm text-gray-400">Medium</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-[#00b894]" />
                <span className="text-sm text-gray-400">Low</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskCard key={task.title} {...task} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};