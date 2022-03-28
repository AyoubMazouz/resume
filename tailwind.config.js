module.exports = {
  purge: ['*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary': 'montserrat'
      },
      width: {
        "medium": "44rem",
        "large": "52rem",
        "xlarge": "64rem"
      },
      // colors: {
      //   "dark": "#112D4E",
      //   "light": "#F9F7F7",
      //   "accent": "#3F72AF",
      // }

      colors: {
        "dark": "#222831",
        "light": "#DDDDDD",
        "accent": "#F05454",
      }

    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}



