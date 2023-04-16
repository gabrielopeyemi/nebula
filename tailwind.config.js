module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "san-serif"],
      roboto: ["Roboto", "serif"],
    },
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      xm: { max: "608px" },
      sm: { max: "480px" },
      xs: { max: "350px" },
    },
    extend: {
      colors: {
        "dark-theme": "rgb(23,23,23,1)",
        "dark-grey": "rgba(57, 57, 57, 1)",
        "warning-red": "#FA1717",
        "snippet-black": "#302B2B",
        "snippet-gray": "#EEEEEE",
        "button-black": "#24292E",
        "text-grey": "#D4D4D4",
        "light-purple": "#9747FF",
        "deep-green": "#27C93F",
        blue: "#1B58F1",
        "deep-wine": "#DC4E5A",
        "light-blac": "#1B1B1B",
        "cold-grey": "#B1B5BB",
      },
    },
  },
  plugins: [],
}
