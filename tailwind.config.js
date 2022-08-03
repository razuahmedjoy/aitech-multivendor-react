/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
 

  ],
  theme: {
    extend: {},
    fontFamily: {

      'josefin': ["Josefin Sans", 'sans-serif'],
      'poppin': ['"Poppins"', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F69035",
          dashboard:"#439C9D",
          secondary: "#449D9E",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#fff",

        },
      }

    ],
  },
}