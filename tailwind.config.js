/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            "darkGreen": "#3B9182",
            "green": "#409D8C",
            "lightGreen-50": "#F0F6F3",
            "offWhite": "#FAFAFA",
        },
        transitionProperty: {
          'max-height': 'max-height'
        }
    },
  },
  
  plugins: [],
};
