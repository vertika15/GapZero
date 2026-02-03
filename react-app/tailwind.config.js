/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: {
          blue: '#3B82F6',
          violet: '#8B5CF6',
          cyan: '#22D3EE',
        },
        glass: {
          surface: 'rgba(255,255,255,0.06)',
          border: 'rgba(255,255,255,0.12)',
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(34,211,238,0.35)',
        soft: '0 10px 30px rgba(0,0,0,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
