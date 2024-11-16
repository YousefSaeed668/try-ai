import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
  gradient: string;
};

export const StatCard = ({ title, value, icon: Icon, gradient }: StatCardProps) => {
  return (
    <div className={`rounded-xl p-6 ${gradient} text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white/80">{title}</p>
          <p className="mt-2 text-3xl font-bold">{value}</p>
        </div>
        <div className="p-3 rounded-lg bg-white/10">
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};