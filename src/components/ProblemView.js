import React, { useState } from 'react';
import { Clock, Database, AlertCircle, CheckCircle, TrendingUp, Zap } from 'lucide-react';
import { problemsData } from '../data/problems';
import ComplexityBadge from './ComplexityBadge';
import CodeExample from './CodeExample';

const ProblemView = ({ selectedProblem, onBackToPattern }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const currentProblemData = problemsData[selectedProblem];

  if (!currentProblemData) {
    return (
      <div className="flex-1 overflow-y-auto flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem Not Found</h2>
          <button
            onClick={onBackToPattern}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Pattern
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-6xl mx-auto p-8">
        {/* Problem Description */}
        <div id="problem-description" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem Description</h2>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <p className="text-gray-700 leading-relaxed">{currentProblemData.description}</p>
          </div>
        </div>

        {/* Examples */}
        <div id="examples" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Examples</h2>
          <div className="space-y-4">
            {currentProblemData.examples.map((example, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Example {index + 1}</h3>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium text-gray-700">Input: </span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">{example.input}</code>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Output: </span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">{example.output}</code>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Explanation: </span>
                    <span className="text-gray-600">{example.explanation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Constraints */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Constraints</h2>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <ul className="space-y-2">
              {currentProblemData.constraints.map((constraint, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <code className="text-sm text-gray-700">{constraint}</code>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub-optimal Solution */}
        <div id="sub-optimal" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 text-orange-500 mr-2" />
            Sub-optimal Solution
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentProblemData.subOptimalSolution.approach}</h3>
              <p className="text-gray-700 mb-4">{currentProblemData.subOptimalSolution.explanation}</p>
              
              <div className="flex gap-4 mb-4">
                <ComplexityBadge
                  icon={Clock}
                  label="Time"
                  complexity={currentProblemData.subOptimalSolution.timeComplexity}
                  explanation={currentProblemData.subOptimalSolution.timeComplexityExplanation}
                  color="red"
                />
                <ComplexityBadge
                  icon={Database}
                  label="Space"
                  complexity={currentProblemData.subOptimalSolution.spaceComplexity}
                  explanation={currentProblemData.subOptimalSolution.spaceComplexityExplanation}
                  color="red"
                />
              </div>
            </div>

            <CodeExample
              title="Sub-optimal Implementation"
              codeExamples={currentProblemData.subOptimalSolution.codes}
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              icon={Zap}
              iconColor="orange"
              badgeText="Sub-optimal"
            />
          </div>
        </div>

        {/* Optimal Solution */}
        <div id="optimal" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
            Optimal Solution
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentProblemData.optimalSolution.approach}</h3>
              <p className="text-gray-700 mb-4">{currentProblemData.optimalSolution.explanation}</p>
              
              <div className="flex gap-4 mb-4">
                <ComplexityBadge
                  icon={Clock}
                  label="Time"
                  complexity={currentProblemData.optimalSolution.timeComplexity}
                  explanation={currentProblemData.optimalSolution.timeComplexityExplanation}
                  color="green"
                />
                <ComplexityBadge
                  icon={Database}
                  label="Space"
                  complexity={currentProblemData.optimalSolution.spaceComplexity}
                  explanation={currentProblemData.optimalSolution.spaceComplexityExplanation}
                  color="green"
                />
              </div>
            </div>

            <CodeExample
              title="Optimal Implementation"
              codeExamples={currentProblemData.optimalSolution.codes}
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              icon={CheckCircle}
              iconColor="green"
              badgeText="Optimal"
            />
          </div>
        </div>

        {/* Approach Comparison */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Approach Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-medium text-orange-800 mb-2 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                Sub-optimal Approach
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Time: {currentProblemData.subOptimalSolution.timeComplexity}</li>
                <li>• Space: {currentProblemData.subOptimalSolution.spaceComplexity}</li>
                <li>• Easy to understand and implement</li>
                <li>• May timeout on large inputs</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800 mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Optimal Approach
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Time: {currentProblemData.optimalSolution.timeComplexity}</li>
                <li>• Space: {currentProblemData.optimalSolution.spaceComplexity}</li>
                <li>• Scales well with large inputs</li>
                <li>• Industry-standard solution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemView;