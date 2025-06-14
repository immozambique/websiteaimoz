/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'aiesec-blue': '#037EF3',
        'aiesec-teal': '#00C9A7',
        'aiesec-green': '#7CB518',
        'aiesec-orange': '#F85D00',
        'aiesec-red': '#E1251B',
        'aiesec-purple': '#662D91',
        'aiesec-yellow': '#F4C430',
        'aiesec-pink': '#E91E63',
        'aiesec-dark-blue': '#0F2027',
        'aiesec-light-blue': '#E3F2FD',
        'aiesec-gray': '#6B7280',
        'aiesec-light-gray': '#F3F4F6',
      },
    },
  },
  plugins: [],
};