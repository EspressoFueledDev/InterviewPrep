import React from "react";
import { Play } from "lucide-react";
import { problemsData } from "../data/problems";

const ProblemButton = ({ problem, onProblemSelect }) => {
  const handleClick = () => {
    if (problemsData[problem.id]) {
      onProblemSelect(problem.id);
    } else {
      alert("Problem details coming soon!");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group px-4 lg:px-6 py-3 lg:py-4 bg-blue-50 hover:bg-blue-500 text-blue-700 hover:text-white rounded-2xl text-sm lg:text-base font-semibold transition-all duration-300 flex items-center border border-blue-200/50 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
    >
      <span>{problem.name}</span>
      <Play className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
    </button>
  );
};

export default ProblemButton;
