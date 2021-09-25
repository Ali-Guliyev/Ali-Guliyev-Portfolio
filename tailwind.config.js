module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#404040",
      },
      screens: {
        medium: "1086px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
