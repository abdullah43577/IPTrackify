/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/app/*.js"],
  theme: {
    extend: {
      colors: {
        veryDarkGray: " hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },
  },
  plugins: [],
};
