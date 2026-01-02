/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'crm-purple': '#6b5a8e',
        'crm-purple-light': '#7C6BA6',
        'crm-purple-dark': '#6B5B95',
      },
    },
  },
  plugins: [],
}

