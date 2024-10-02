/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "courier-new": "'Courier New', serif",
        impact: "'Impact', sans-serif",
      },
      screens: {
        pc: "960px",
      },
    },
  },
  plugins: [],
};
