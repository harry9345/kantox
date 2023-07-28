/** @type {import('tailwindcss').Config} */

export const content = ['./app/**/*.{gjs,gts,hbs,html,js,ts}'];
export const theme = {
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
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  container: {
    center: true,
    padding: '1rem',
  },
};
export const plugins = [];
