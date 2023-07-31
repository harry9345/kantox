/** @type {import("tailwindcss").Config} */
/* eslint-env node */
module.exports = {
  content: ["./app/**/*.{gjs,gts,hbs,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        gray50: "#f9fafb",
        gray100: "#f3f4f6",
        gray200: "#e5e7eb",
        gray800: "#1f2937",
        teal100: "#ccfbf1",
        teal900: "#134e4a",
        violet50: "#f5f3ff",
        violet700: "#6d28d9",
      },
      fontSize: {
        md: ["0.5rem", "1.2"],
        lg: ["1rem", "1.2"],
        xl: ["1.25rem", "1.2"],
        "1xl": ["1.5rem", "1.2"],
        "2xl": ["1.75rem", "1.2"],
        "3xl": ["2rem", "1.2"],
        "4xl": ["2.25rem", "1.2"],
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),],
};
