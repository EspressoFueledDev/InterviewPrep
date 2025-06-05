import React, { useState } from "react";
import MobileSidebar from "./components/MobileSidebar";
import PatternView from "./components/PatternView";
import ProblemView from "./components/ProblemView";
import { patterns } from "./data/patterns";
import { Menu, X } from "lucide-react";

const App = () => {
  const [selectedPattern, setSelectedPattern] = useState("two-pointers");
  const [currentView, setCurrentView] = useState("pattern");
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePatternSelect = (patternId) => {
    setSelectedPattern(patternId);
    setCurrentView("pattern");
    setSelectedProblem(null);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const handleProblemSelect = (problemId) => {
    setSelectedProblem(problemId);
    setCurrentView("problem");
  };

  const handleBackToPattern = () => {
    setCurrentView("pattern");
    setSelectedProblem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-system">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white/90 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200 active:scale-95"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            {currentView === "pattern"
              ? patterns.find((p) => p.id === selectedPattern)?.name ||
                "Coding Patterns"
              : "Problem Solution"}
          </h1>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <MobileSidebar
            patterns={patterns}
            selectedPattern={selectedPattern}
            onPatternSelect={handlePatternSelect}
            currentView={currentView}
            selectedProblem={selectedProblem}
            onBackToPattern={handleBackToPattern}
            sidebarOpen={true}
            setSidebarOpen={() => {}}
            isDesktop={true}
          />
        </div>

        {/* Mobile Sidebar Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 h-full w-80 transform transition-transform duration-300 ease-out ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <MobileSidebar
              patterns={patterns}
              selectedPattern={selectedPattern}
              onPatternSelect={handlePatternSelect}
              currentView={currentView}
              selectedProblem={selectedProblem}
              onBackToPattern={handleBackToPattern}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              isDesktop={false}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {currentView === "pattern" ? (
            <PatternView
              selectedPattern={selectedPattern}
              onProblemSelect={handleProblemSelect}
            />
          ) : (
            <ProblemView
              selectedProblem={selectedProblem}
              onBackToPattern={handleBackToPattern}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
