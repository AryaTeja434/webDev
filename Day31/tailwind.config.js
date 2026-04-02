module.exports = {
  // 1. Content: Tells Tailwind which files to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // 2. Extend: Add custom colors/fonts without losing defaults
    extend: {
      colors: {
        'brand-blue': '#1da1f2',
      },
    },
  },
  plugins: [],
}