import React from "react";
import { Code, Copy } from "lucide-react";

const CodeExample = ({
  title,
  codeExamples,
  selectedLanguage,
  onLanguageChange,
  icon: Icon = Code,
  iconColor = "purple",
  badgeText = null,
}) => {
  const [copied, setCopied] = React.useState(false);

  const getIconColorClass = (color) => {
    const colorMap = {
      purple: "text-purple-600",
      green: "text-green-400",
      orange: "text-orange-400",
    };
    return colorMap[color] || colorMap.purple;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-200/50 overflow-hidden">
      <div className="p-6 lg:p-8 border-b border-gray-200/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h4 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center mr-3">
              <Icon className={`w-5 h-5 ${getIconColorClass(iconColor)}`} />
            </div>
            {title}
          </h4>
          <div className="flex bg-gray-100 rounded-2xl p-1">
            {["python", "java", "c"].map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  selectedLanguage === lang
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 relative">
        <div className="bg-gray-800 px-4 lg:px-6 py-3 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center">
            <Icon className={`w-4 h-4 mr-2 ${getIconColorClass(iconColor)}`} />
            <span className="text-gray-300 text-sm font-medium">
              {badgeText ? `${badgeText} - ` : ""}
              {selectedLanguage.toUpperCase()}
            </span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200 active:scale-95"
          >
            <Copy className="w-3 h-3 mr-1" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="overflow-x-auto">
          <pre className="p-4 lg:p-6 text-sm text-gray-100 min-h-[200px]">
            <code className="language-{selectedLanguage}">
              {codeExamples[selectedLanguage]}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeExample;
