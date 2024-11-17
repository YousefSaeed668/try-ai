import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CategoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (category: { name: string; color: string }) => void;
  initialData?: {
    name: string;
    color: string;
  };
  title: string;
}

const colorOptions = [
  { name: 'Green', hex: '#00b894' },
  { name: 'Blue', hex: '#0984e3' },
  { name: 'Orange', hex: '#ff9f43' },
  { name: 'Red', hex: '#ff6b6b' },
  { name: 'Purple', hex: '#a55eea' },
  { name: 'Pink', hex: '#fd79a8' },
];

export const CategoryDialog: React.FC<CategoryDialogProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  title,
}) => {
  const [name, setName] = useState(initialData?.name || '');
  const [selectedColor, setSelectedColor] = useState(initialData?.color || colorOptions[0].hex);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, color: selectedColor });
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
          {/* Category Name */}
          <div>
            <label htmlFor="categoryName" className="block text-sm font-medium text-gray-400 mb-2">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter category name"
              required
            />
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Category Color
            </label>
            <div className="flex items-center space-x-4 mb-4">
              {colorOptions.map((color) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => setSelectedColor(color.hex)}
                  className={`w-8 h-8 rounded-full transition-transform ${
                    selectedColor === color.hex ? 'scale-110 ring-2 ring-blue-500 ring-offset-2 ring-offset-[#242837]' : ''
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Color Code */}
          <div>
            <label htmlFor="colorCode" className="block text-sm font-medium text-gray-400 mb-2">
              Color Code
            </label>
            <input
              type="text"
              id="colorCode"
              value={selectedColor}
              readOnly
              className="w-full bg-[#1a1e2e] text-gray-300 px-4 py-2 rounded-lg border border-gray-700"
            />
          </div>

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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};