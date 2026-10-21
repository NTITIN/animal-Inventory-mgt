/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vyapar: {
          blue: '#1E40AF',
          dark: '#0F172A',
          primary: '#2563EB',
          accent: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
          sidebar: '#0B132B',
          card: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}
