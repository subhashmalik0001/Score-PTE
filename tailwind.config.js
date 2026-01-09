/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sx: { min: "318px", max: "576.99px" },
        xs: { min: "318px", max: "768.99px" },
        sm: { min: "769px", max: "1024.99px" },
        md: { min: "1025px", max: "1280.99px" },
        lg: { min: "1281px", max: "1438.99px" },
        xl: { min: "1438.99px" },
      },
      darkMode: false,
      boxShadow: {
        nav: "0 4px 12px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        sen: ["var(--font-sen)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        'gt-walsheim': ['GT-Walsheim', 'sans-serif'],
        'gt-walsheim-regular': ['GT-Walsheim-Regular', 'sans-serif'],
        'gt-walsheim-medium': ['GT-Walsheim-Medium', 'sans-serif'],
        'gt-walsheim-bold': ['GT-Walsheim-Bold', 'sans-serif'],
        'gt-walsheim-light': ['GT-Walsheim-Light', 'sans-serif'],
      },
      colors: {
        pinkLight: "#F8B5C6",
        tealLight: "#5EC2B7",
        pinkDark: "#F16B8D",
      },
      keyframes: {
        "slide-in-from-inside": {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-in-from-inside": "slide-in-from-inside 0.5s ease-out forwards",
        spin: "spin 1s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};