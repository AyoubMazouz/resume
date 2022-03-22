module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "medium": "44rem",
        "large": "52rem",
        "xlarge": "64rem"
      },
      colors: {
        "dark": "#112D4E",
        "light": "#F9F7F7",
        "accent": "#3F72AF",
      }

      // colors: {
      //   "dark": "#9D9D9D",
      //   "light": "#FEFBF3",
      //   "accent": "#79B4B7",
      // }

      // colors: {
      //   "dark": "#222831",
      //   "light": "#DDDDDD",
      //   "accent": "#F05454",
      // }

    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}



