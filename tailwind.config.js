/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "system-ui",
          "sans-serif",
        ],
        sf: [
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "Monaco",
          "Cascadia Code",
          "Roboto Mono",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        "ios-blue": {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#007AFF", // iOS Blue
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        "ios-gray": {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        "ios-green": {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#34C759", // iOS Green
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        "ios-orange": {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#FF9500", // iOS Orange
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        "ios-red": {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#FF3B30", // iOS Red
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        "ios-purple": {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#5856D6", // iOS Purple
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      boxShadow: {
        ios: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "ios-lg": "0 8px 40px rgba(0, 0, 0, 0.12)",
        "ios-xl": "0 12px 60px rgba(0, 0, 0, 0.15)",
        button: "0 2px 8px rgba(0, 0, 0, 0.1)",
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        "inner-ios": "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
      backdropBlur: {
        xs: "2px",
        ios: "20px",
        safari: "10px",
      },
      animation: {
        "bounce-subtle": "bounce-subtle 0.6s ease-in-out",
        "scale-in": "scale-in 0.2s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      screens: {
        xs: "475px",
        iPhone: "375px",
        iPhonePlus: "414px",
        iPad: "768px",
        iPadPro: "1024px",
        iMac: "1280px",
      },
      transitionTimingFunction: {
        ios: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "bounce-ios": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      minHeight: {
        "screen-ios": "100vh",
        touch: "44px",
      },
      minWidth: {
        touch: "44px",
      },
    },
  },
  plugins: [],
  safelist: [
    // Core layout classes
    "bg-gray-50",
    "bg-white",
    "text-gray-900",
    "flex",
    "min-h-screen",

    // Glassmorphism classes
    "backdrop-blur-xl",
    "bg-white/80",
    "bg-white/90",
    "bg-white/95",
    "border-gray-200/50",

    // Design system classes
    "shadow-xl",
    "rounded-3xl",
    "rounded-2xl",
    "font-system",

    // Interactive states
    "hover:bg-gray-50",
    "hover:bg-blue-500",
    "active:scale-95",
    "transition-all",
    "duration-200",

    // Mobile responsive
    "lg:hidden",
    "lg:block",
    "lg:p-8",
    "sm:flex-row",

    // Colors and states
    "text-blue-600",
    "text-green-600",
    "text-orange-600",
    "text-red-600",
    "text-purple-600",
    "bg-blue-50",
    "bg-green-50",
    "bg-orange-50",
    "bg-red-50",
    "bg-purple-50",

    // Animation classes
    "animate-fade-in",
    "animate-slide-up",
    "animate-scale-in",
  ],
};
