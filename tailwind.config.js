/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'poppins': ['var(--font-poppins)'],
        'glancyr-neue': ['var(--font-glancyr-neue)'],
        'glancyr-neue-bold': ['var(--font-glancyr-neue-bold)'],
      },
    },
  },
  plugins: [],
};
