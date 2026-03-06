/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f97316", // Orange 500
        "secondary": "#fb923c", // Orange 400
        "background-light": "#ffffff",
        "background-dark": "#ffffff", // Changed to White for Light Theme
        "surface-dark": "#f8fafc", // Slate 50 (Very light gray)
        "surface-highlight": "#f1f5f9", // Slate 100
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
