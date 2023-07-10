/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#1A1831",
        blue: "#7286D3",
        light: "#F7F5EB",
      },
    },
  },
  plugins: [],
};
