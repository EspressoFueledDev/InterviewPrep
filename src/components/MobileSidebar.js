import React from "react";
import { ChevronRight, ArrowLeft, X } from "lucide-react";
import { getDifficultyColor } from "../utils/helpers";
import { problemsData } from "../data/problems";

const MobileSidebar = ({
  patterns,
  selectedPattern,
  onPatternSelect,
  currentView,
  selectedProblem,
  onBackToPattern,
  sidebarOpen,
  setSidebarOpen,
  isDesktop = false,
}) => {
  const sidebarClasses = isDesktop ? "w-80 h-screen" : "w-80 h-full";

  if (
    currentView === "problem" &&
    selectedProblem &&
    problemsData[selectedProblem]
  ) {
    const currentProblemData = problemsData[selectedProblem];

    return (
      <div
        className={`${sidebarClasses} bg-white/95 backdrop-blur-xl shadow-xl lg:shadow-none overflow-y-auto`}
      >
        {/* Mobile close button */}
        {!isDesktop && (
          <div className="flex justify-end p-4 pb-0">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200 active:scale-95"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}

        <div className="p-6 border-b border-gray-200/50">
          <button
            onClick={onBackToPattern}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-all duration-200 p-2 -ml-2 rounded-xl hover:bg-blue-50 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-medium">Back to Pattern</span>
          </button>
          <h1 className="text-xl font-bold text-gray-900 leading-tight">
            {currentProblemData.title}
          </h1>
          <div
            className={`inline-block px-3 py-1.5 rounded-full text-sm font-semibold mt-3 ${getDifficultyColor(
              currentProblemData.difficulty
            )}`}
          >
            {currentProblemData.difficulty}
          </div>
        </div>

        <nav className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                Quick Navigation
              </h3>
              <div className="space-y-2">
                {[
                  {
                    href: "#problem-description",
                    label: "Problem Description",
                  },
                  { href: "#examples", label: "Examples" },
                  { href: "#sub-optimal", label: "Sub-optimal Solution" },
                  { href: "#optimal", label: "Optimal Solution" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 active:scale-95"
                    onClick={() => !isDesktop && setSidebarOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div
      className={`${sidebarClasses} bg-white/95 backdrop-blur-xl shadow-xl lg:shadow-none overflow-y-auto`}
    >
      {/* Mobile close button */}
      {!isDesktop && (
        <div className="flex justify-end p-4 pb-0">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200 active:scale-95"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      )}

      <div className="p-6 border-b border-gray-200/50">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Coding Patterns
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Master the 14 essential patterns for coding interviews
        </p>
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          {patterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => onPatternSelect(pattern.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all duration-200 active:scale-95 ${
                selectedPattern === pattern.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{pattern.icon}</span>
                  <div>
                    <div className="font-semibold text-sm">{pattern.name}</div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                        selectedPattern === pattern.id
                          ? "bg-white/20 text-white"
                          : getDifficultyColor(pattern.difficulty)
                      }`}
                    >
                      {pattern.difficulty}
                    </div>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    selectedPattern === pattern.id ? "rotate-90" : ""
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileSidebar;
