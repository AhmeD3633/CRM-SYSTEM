/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["cairo", "sans-serif"],
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: ["daisyui", "tailwindcss/forms"],
};
