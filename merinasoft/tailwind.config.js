/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: 1 },
          "100%": { transform: "scale(2)", opacity: 0 },
        },
      },
      animation: {
        ripple: "ripple 1.5s infinite",
      },
      boxShadow:{
        custom_shadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      },
      colors:{
        textColor: "#771191"
      }
    },
  },
  plugins: [],
};
