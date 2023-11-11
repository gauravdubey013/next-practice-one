/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        show: {
          "0%,49.99%": { opacity: 0, zIndex: 1 },
          "50%,100%": { opacity: 1, zIndex: 5 },
        },
        myfirst: {
          "0%": { left: '-25%' },
          "100%": { left: '100%' },
        },
      },
      // keyframes: {
      //   show: {
      //
      //   },
    },
  },
  plugins: [],
};
