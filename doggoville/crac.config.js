module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        98: "98vh",
      },
    },
    textColor: {
      primary: "#6fffb0",
      secondary: "#333333",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
