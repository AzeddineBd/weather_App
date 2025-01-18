/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bdoy-bg": "#171717",
        "box-bg": "#242424",
        "box-bg-secondary": "#202020",
        "f-primary": "#fafafa",
        "f-secondary": "#555555",
        "f-third": "#999999",
        "f-forth": "#202020",
        location: "#8D77AB",
      },
      screens: {
        xs: "48px",
      },
    },
  },
  plugins: [],
};
