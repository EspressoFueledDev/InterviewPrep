import React, { useState } from "react";
import {
  Clock,
  Database,
  Target,
  BookOpen,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { patternData } from "../data/patterns";
import ComplexityBadge from "./ComplexityBadge";
import CodeExample from "./CodeExample";
import ProblemButton from "./ProblemButton";

const PatternView = ({ selectedPattern, onProblemSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const currentPattern =
    patternData[selectedPattern] || patternData["two-pointers"];
  const patternInfo = patternData.patterns?.find(
    (p) => p.id === selectedPattern
  ) || { icon: "👉", name: "Two Pointers" };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-6xl mx-auto p-4 lg:p-8 pb-20 lg:pb-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start mb-6 p-6 lg:p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-200/50">
            <span className="text-5xl lg:text-6xl mr-4 lg:mr-6">
              {patternInfo.icon}
            </span>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {currentPattern.title}
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                {currentPattern.description}
              </p>
            </div>
          </div>

          {/* Complexity Badges */}
          <div className="flex flex-col sm:flex-row gap-4">
            <ComplexityBadge
              icon={Clock}
              label="Time"
              complexity={currentPattern.timeComplexity}
              explanation={currentPattern.timeComplexityExplanation}
              color="blue"
            />
            <ComplexityBadge
              icon={Database}
              label="Space"
              complexity={currentPattern.spaceComplexity}
              explanation={currentPattern.spaceComplexityExplanation}
              color="purple"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* When to Use */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-200/50 p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center mr-3">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              When to Use
            </h3>
            <ul className="space-y-4">
              {currentPattern.whenToUse.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recognition Signs */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-200/50 p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center mr-3">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
              Recognition Signs
            </h3>
            <ul className="space-y-4">
              {currentPattern.recognitionSigns.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    "{item}"
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Problems */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-200/50 p-6 lg:p-8 mb-8">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center mr-3">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            Key Problems to Practice
          </h3>
          <div className="flex flex-wrap gap-3">
            {currentPattern.keyProblems.map((problem, index) => (
              <ProblemButton
                key={index}
                problem={problem}
                onProblemSelect={onProblemSelect}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            Click on any problem to see detailed solutions with step-by-step
            explanations
          </p>
        </div>

        {/* Code Examples */}
        <div className="mb-8">
          <CodeExample
            title="Pattern Implementation Template"
            codeExamples={currentPattern.codeExamples}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 lg:p-8 border border-blue-200/50">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6">
            💡 Pro Tips for Interviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Recognition",
                content:
                  "Practice identifying this pattern quickly by looking for the key recognition signs in problem statements.",
              },
              {
                title: "Communication",
                content: `Always explain WHY you're choosing this pattern. Say "This looks like a ${currentPattern.title.toLowerCase()} problem because..."`,
              },
              {
                title: "Edge Cases",
                content:
                  "Consider empty inputs, single elements, and boundary conditions specific to this pattern.",
              },
              {
                title: "Optimization",
                content:
                  "Discuss time/space trade-offs and mention when this pattern might not be optimal.",
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50"
              >
                <h4 className="font-bold text-gray-900 mb-3">{tip.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternView;
