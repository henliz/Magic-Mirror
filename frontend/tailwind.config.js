/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#B9B8B8",
        tertiary: "#A5A5A5",
        periwrinkle: "#A7B5FE",
        purple: "#BB92F9",
        cloud: "#B3BCBB",
        ocean: "#7E958F",
        columbia: "#D4E0F0"
      },
    },
  },
  plugins: [],
};
