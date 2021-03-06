module.exports = {
  purge: [
    "./src/components/**/*.js",
    "./src/context/*.js",
    "./src/styles/*.js",
    "./src/*.css",
    "./src/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        98: "98%",
      },
    },
    textColor: {
      primary: "#6fffb0",
      primaryDarker: "#3CCC7D",
      secondary: "#333333",
    },
  },
  variants: {
    extend: {},
    animation: ["hover", "active"],
  },
  plugins: [],
};
