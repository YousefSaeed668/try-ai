import React, { useState } from 'react';
import { Search, Plus, Users, CheckSquare, CheckCircle, Settings, MoreVertical, UserPlus } from 'lucide-react';
import { TeamDialog } from './TeamDialog';

interface Team {
  id: number;
  name: string;
  description: string;
  members: number;
  activeTasks: number;
  completedTasks: number;
  role: 'admin' | 'member';
  lastActive: string;
}

const mockTeams: Team[] = [
  {
    id: 1,
    name: 'Development Team',
    description: 'Main development team for the project',
    members: 8,
    activeTasks: 12,
    completedTasks: 45,
    role: 'admin',
    lastActive: '2 hours ago'
  },
  {
    id: 2,
    name: 'Marketing Team',
    description: 'Marketing and promotion team',
    members: 5,
    activeTasks: 8,
    completedTasks: 23,
    role: 'member',
    lastActive: '1 day ago'
  },
  {
    id: 3,
    name: 'Design Team',
    description: 'UI/UX design team',
    members: 6,
    activeTasks: 15,
    completedTasks: 67,
    role: 'member',
    lastActive: '3 hours ago'
  }
];

export const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showInviteDialog, setShowInviteDialog] = useState(false);

  const stats = [
    {
      title: 'Total Teams',
      value: mockTeams.length,
      icon: Users,
      gradient: 'gradient-blue'
    },
    {
      title: 'Active Tasks',
      value: mockTeams.reduce((sum, team) => sum + team.activeTasks, 0),
      icon: CheckSquare,
      gradient: 'gradient-green'
    },
    {
      title: 'Completed Tasks',
      value: mockTeams.reduce((sum, team) => sum + team.completedTasks, 0),
      icon: CheckCircle,
      gradient: 'gradient-orange'
    }
  ];

  const filteredTeams = mockTeams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1a1e2e] pt-16 pl-64">
      <main className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Teams</h1>
          <button
            onClick={() => setShowCreateTeam(true)}
            className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Team
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`${stat.gradient} rounded-xl p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/80">{stat.title}</p>
                    <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Teams List */}
          <div className="lg:col-span-1">
            <div className="card-dark rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Your Teams</h2>
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search teams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#1a1e2e] text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Teams List */}
              <div className="space-y-4">
                {filteredTeams.map((team) => (
                  <div
                    key={team.id}
                    onClick={() => setSelectedTeam(team)}
                    className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                      selectedTeam?.id === team.id
                        ? 'border-blue-500 bg-[#1a1e2e]'
                        : 'border-gray-700 hover:border-gray-600 bg-[#1a1e2e]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-medium">{team.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs ${
                        team.role === 'admin' ? 'gradient-blue' : 'bg-gray-700'
                      } text-white`}>
                        {team.role}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{team.description}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{team.members} members</span>
                      <span className="mx-2">•</span>
                      <span>Active {team.lastActive}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Details */}
          <div className="lg:col-span-2">
            {selectedTeam ? (
              <div className="card-dark rounded-xl p-6">
                {/* Team Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">{selectedTeam.name}</h2>
                    <p className="text-gray-400">{selectedTeam.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {selectedTeam.role === 'admin' && (
                      <>
                        <button
                          onClick={() => setShowInviteDialog(true)}
                          className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity flex items-center"
                        >
                          <UserPlus className="w-4 h-4 mr-2" />
                          Invite
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors">
                          <Settings className="w-5 h-5" />
                        </button>
                      </>
                    )}
                    <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Team Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#1a1e2e] p-4 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-400 mb-1">Members</p>
                    <p className="text-2xl font-bold text-white">{selectedTeam.members}</p>
                  </div>
                  <div className="bg-[#1a1e2e] p-4 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-400 mb-1">Active Tasks</p>
                    <p className="text-2xl font-bold text-white">{selectedTeam.activeTasks}</p>
                  </div>
                  <div className="bg-[#1a1e2e] p-4 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-400 mb-1">Completed</p>
                    <p className="text-2xl font-bold text-white">{selectedTeam.completedTasks}</p>
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Team Members</h3>
                  <div className="space-y-4">
                    {/* Mock team members - in a real app, this would be fetched from an API */}
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-[#1a1e2e] rounded-lg border border-gray-700"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center">
                            <span className="text-white font-medium">
                              {index === 0 ? 'JD' : index === 1 ? 'AS' : 'RK'}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-white font-medium">
                              {index === 0 ? 'John Doe' : index === 1 ? 'Alice Smith' : 'Robert King'}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {index === 0 ? 'Team Lead' : 'Member'}
                            </p>
                          </div>
                        </div>
                        {selectedTeam.role === 'admin' && (
                          <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="card-dark rounded-xl p-8 text-center">
                <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Select a Team</h3>
                <p className="text-gray-400">
                  Choose a team from the list to view details and manage team members
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Create Team Dialog */}
      <TeamDialog
        isOpen={showCreateTeam}
        onClose={() => setShowCreateTeam(false)}
        title="Create New Team"
      />

      {/* Invite Members Dialog */}
      <TeamDialog
        isOpen={showInviteDialog}
        onClose={() => setShowInviteDialog(false)}
        title="Invite Team Members"
        mode="invite"
      />
    </div>
  );
};