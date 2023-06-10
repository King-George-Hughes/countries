/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nintendo_sans: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        darkModeElements: "hsl(209, 23%, 22%)",
        darkModeBackground: "hsl(207, 26%, 17%)",
        lightModeText: "hsl(200, 15%, 8%)",
        lightModeInput: "hsl(0, 0%, 52%)",
        lightModeBackground: "hsl(0, 0%, 98%)",
        darkModeTextAndLightModeElements: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
