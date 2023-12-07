/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'smile-pattern': "url('/pattern-smile.svg')"
      }
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
        addBase({
            '.scrollbar': {
                overflowY: 'auto',
                scrollbarColor: `${theme('colors.slate.500')} ${theme('colors.opacity.50')}`,
                scrollbarWidth: 'none',
            },
            '.scrollbar::-webkit-scrollbar': {
                height: '5px',
                width: '5px',
            },
            '.scrollbar::-webkit-scrollbar-thumb': {
                backgroundColor: theme('colors.slate.500'),
            },
            '.scrollbar::-webkit-scrollbar-track-piece': {
                backgroundColor: theme('colors.transparent'),
            },
        });
    }),
],
};
