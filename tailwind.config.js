/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F98624",
        primary_sub: "#F98624",
        white: "#fafaf8",
        black: "#1a1a1a",
        gray: "#9B9B9B",
        gray_sub: "#B4B4B4",
      },
      fontSize: {
        16: ["16px"],
        18: ["18px"],
        20: ["20px"],
        25: ["25px"],
        30: ["30px"],
        40: ["40px"],
      },
    },
  },
  plugins: [],
};
