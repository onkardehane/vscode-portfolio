/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'cascadia': ['Cascadia Code', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        'vscode': {
          'bg-dark': '#1e1e1e',
          'sidebar-dark': '#252526',
          'activity-dark': '#333333',
          'tabs-dark': '#2d2d30',
          'border-dark': '#464647',
          'accent': '#007ACC',
          'text-dark': '#cccccc',
          'text-dim': '#858585',
          'bg-light': '#ffffff',
          'sidebar-light': '#f3f3f3',
        }
      },
      animation: {
        'blink': 'blink 1s infinite',
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        }
      }
    },
  },
  plugins: [],
}
