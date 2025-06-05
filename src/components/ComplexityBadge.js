import React, { useState } from "react";

const ComplexityBadge = ({
  icon: Icon,
  label,
  complexity,
  explanation,
  color,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-700 border-blue-200/50",
      purple: "bg-purple-50 text-purple-700 border-purple-200/50",
      green: "bg-green-50 text-green-700 border-green-200/50",
      red: "bg-red-50 text-red-700 border-red-200/50",
      orange: "bg-orange-50 text-orange-700 border-orange-200/50",
    };
    return colorMap[color] || colorMap.blue;
  };

  const getIconColor = (color) => {
    const colorMap = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600",
      red: "text-red-600",
      orange: "text-orange-600",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div
      className="relative flex-1"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={`flex items-center px-4 lg:px-6 py-3 lg:py-4 rounded-2xl cursor-help border transition-all duration-200 hover:scale-105 active:scale-95 ${getColorClasses(
          color
        )}`}
      >
        <Icon className={`w-5 h-5 mr-3 ${getIconColor(color)}`} />
        <div>
          <div className="text-xs font-semibold opacity-75 uppercase tracking-wider">
            {label}
          </div>
          <div className="text-lg font-bold">{complexity}</div>
        </div>
      </div>

      {showTooltip && explanation && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50">
          <div className="bg-gray-900/95 backdrop-blur-xl text-white text-sm rounded-2xl py-3 px-4 max-w-xs whitespace-normal shadow-xl border border-gray-700/50">
            <div className="font-semibold mb-2">
              {label} Complexity: {complexity}
            </div>
            <div className="opacity-90">{explanation}</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-900/95"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplexityBadge;
