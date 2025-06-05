import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getDifficultyColor } from '../utils/helpers';
import { problemsData } from '../data/problems';

const Sidebar = ({ 
  patterns, 
  selectedPattern, 
  onPatternSelect, 
  currentView, 
  selectedProblem, 
  onBackToPattern 
}) => {
  if (currentView === 'problem' && selectedProblem && problemsData[selectedProblem]) {
    const currentProblemData = problemsData[selectedProblem];
    
    return (
      <div className="w-80 bg-white shadow-lg overflow-y-auto">
        <div className="p-6 border-b">
          <button
            onClick={onBackToPattern}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pattern
          </button>
          <h1 className="text-xl font-bold text-gray-900">{currentProblemData.title}</h1>
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getDifficultyColor(currentProblemData.difficulty)}`}>
            {currentProblemData.difficulty}
          </div>
        </div>
        
        <nav className="p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Quick Navigation</h3>
              <div className="space-y-2">
                <a href="#problem-description" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Problem Description</a>
                <a href="#examples" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Examples</a>
                <a href="#sub-optimal" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Sub-optimal Solution</a>
                <a href="#optimal" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Optimal Solution</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white shadow-lg overflow-y-auto">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-900">Coding Patterns</h1>
        <p className="text-sm text-gray-600 mt-2">Master the 14 essential patterns for coding interviews</p>
      </div>
      
      <nav className="p-4">
        {patterns.map((pattern) => (
          <button
            key={pattern.id}
            onClick={() => onPatternSelect(pattern.id)}
            className={`w-full text-left p-4 rounded-lg mb-2 transition-all duration-200 ${
              selectedPattern === pattern.id
                ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{pattern.icon}</span>
                <div>
                  <div className="font-medium text-sm">{pattern.name}</div>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${getDifficultyColor(pattern.difficulty)}`}>
                    {pattern.difficulty}
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${
                selectedPattern === pattern.id ? 'rotate-90' : ''
              }`} />
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;