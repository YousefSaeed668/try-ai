import React, { useState } from 'react';
import { X, Users, Mail } from 'lucide-react';

interface TeamDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  mode?: 'create' | 'invite';
}

export const TeamDialog: React.FC<TeamDialogProps> = ({
  isOpen,
  onClose,
  title,
  mode = 'create'
}) => {
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [emails, setEmails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#242837] rounded-xl w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {mode === 'create' ? (
            <>
              {/* Team Name */}
              <div>
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-400 mb-2">
                  Team Name
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full bg-[#1a1e2e] text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Enter team name"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 h-32 resize-none"
                  placeholder="Enter team description"
                />
              </div>
            </>
          ) : (
            <>
              {/* Invite Members */}
              <div>
                <label htmlFor="emails" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Addresses
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    id="emails"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                    className="w-full bg-[#1a1e2e] text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 h-32 resize-none"
                    placeholder="Enter email addresses (one per line)"
                    required
                  />
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  Enter email addresses of team members you want to invite, one per line
                </p>
              </div>
            </>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              {mode === 'create' ? 'Create Team' : 'Send Invites'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};