/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray50: '#f9fafb',
        gray100: '#f3f4f6',
        gray200: '#e5e7eb',
        gray800: '#1f2937',
        teal100: '#ccfbf1',
        teal900: '#134e4a',
        violet50: '#f5f3ff',
        violet700: '#6d28d9',
      },
      fontSize: {
        'md': ['0.5rem', '1.2'],
        'lg': ['1rem', '1.2'],
        'xl': ['1.5rem', '1.2'],
        '1xl': ['2rem', '1.2'],
        '2xl': ['2.5rem', '1.2'],
        '3xl': ['3rem', '1.2'],
        '4xl': ['3.5rem', '1.2'],
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '2rem',
        '2xl': '3rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};
