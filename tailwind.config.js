/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dark": "#16181d",
        "secondary-dark": "#1d2433",
        "accent-dark": "#93c5fd",
        "primary-light": "#ffffff",
        "secondary-light": "#dbeafe",
        "accent-light": "#3b82f6",
      },
      screens: {
        xs: "460px",
      },
      width: {
        "max-w-6.5": "95rem",
      },
    },
  },
  plugins: [],
};
