import React from 'react';
import { Clock, MoreVertical } from 'lucide-react';

type TaskCardProps = {
  category: string;
  gradient: string;
  title: string;
  dueDate: string;
  progress: number;
};

export const TaskCard = ({ category, gradient, title, dueDate, progress }: TaskCardProps) => {
  return (
    <div className="card-dark rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${gradient} text-white`}>
          {category}
        </span>
        <button className="text-gray-400 hover:text-gray-200">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      
      <div className="flex items-center text-sm text-gray-400 mb-4">
        <Clock className="w-4 h-4 mr-2" />
        {dueDate}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="font-medium text-white">{progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`${gradient} rounded-full h-2 transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};