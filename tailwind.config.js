/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'light': [
          '1.5px 1.5px 1px rgba(0, 0, 0, 0.25)',
        ],
        'dark': [
          '1px 1px 1px rgba(255, 255, 255, 0.3)',
        ]
      }
    },
  },
  plugins: [],
}