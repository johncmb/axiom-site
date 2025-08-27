/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ax: {
          bg: "#0b0d10",
          ink: "#e6e9ef",
          sub: "#a9b0bd",
          orange: "#ff6a00"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
  darkMode: "media"
};
