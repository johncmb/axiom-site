/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ax: {
          bg: "#0b0d10",
          ink: "#e6e9ef",
          sub: "#a9b0bd",
          orange: "#ff6a00",
          orange2: "#ff8a3d",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
