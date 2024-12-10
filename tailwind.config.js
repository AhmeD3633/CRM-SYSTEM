/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#09DD96",
        },
        secondary: {
          DEFAULT: "#016644",
        },
        focus: {
          DEFAULT: "#09DD96",
        },
        text: {
          DEFAULT: "#23272E",
        },
      },
      backgroundImage: {
        image: "url('src/assets/Media/bg.png')",
      },
    },
    fontFamily: {
      Poppins: ["cairo", "sans-serif"],
    },
  },
  daisyui: {},
  plugins: [require("daisyui")],
};
