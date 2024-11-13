/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./**/*.liquid", "./src/**/*.js", "./**/*.html"],
  // purge: [
  //   "./templates/**/*.liquid",
  //   "./snippets/**/*.liquid",
  //   "./sections/**/*.liquid",
  // ],
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      height: {
        94: "22rem",
      },
    },
  },
  plugins: [],
};
