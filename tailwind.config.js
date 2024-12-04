/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'text-purple-400',
    'text-blue-400',
    'text-green-400',
    'text-red-400', 
    'text-yellow-400',
    'text-indigo-400',
    'text-orange-400',
    'border-purple-500/20',
    'border-blue-500/20',
    'border-green-500/20',
    'border-red-500/20',
    'border-yellow-500/20',
    'border-indigo-500/20',
    'border-orange-500/20',
    'border-purple-500/40',
    'border-blue-500/40',
    'border-green-500/40',
    'border-red-500/40',
    'border-yellow-500/40',
    'border-indigo-500/40',
    'border-orange-500/40',
    'bg-purple-900/30',
    'bg-blue-900/30',
    'bg-green-900/30',
    'bg-red-900/30',
    'bg-yellow-900/30',
    'bg-indigo-900/30',
    'bg-orange-900/30'
  ]
}