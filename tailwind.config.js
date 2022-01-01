module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cdark": '#363d4b',
        "cnordic": '#434c5e',
        "cwhite": '#e9e9e9',
        "csecond": '#748E9C',
      },
    },
    fontFamily: {
      'dancy': ["Dancing Script", "cursive"],
      'slap': ["Roboto Slap", "serif"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
