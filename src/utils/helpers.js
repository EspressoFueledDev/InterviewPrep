export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-600 bg-green-100";
    case "Medium":
      return "text-yellow-600 bg-yellow-100";
    case "Hard":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};
