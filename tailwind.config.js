/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8A27",
        primary_sub: "#FFBE87",
        white: "#fafaf8",
        black: "#1a1a1a",
        gray: "#9B9B9B",
        gray_sub: "#B4B4B4",
      },
      fontSize: {
        14: ["14px"],
        16: ["16px"],
        18: ["18px"],
        20: ["20px"],
        25: ["25px"],
        22: ["22px"], //30 -> 22 변경
        40: ["40px"],
      },
    },
  },
  plugins: [],
};
