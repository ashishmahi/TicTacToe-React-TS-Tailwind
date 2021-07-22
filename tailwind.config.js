module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    options: {
      keyframes: true,
    },
    content: [
      "./src/**/*.tsx",
      "./src/**/*.html",
      "./src/**/*.tsx",
      "./dist/main.js",
      "./dist/index.html",
      "./dist/report.html",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
