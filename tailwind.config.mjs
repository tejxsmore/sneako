/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#163020",
        green: "#304D30",
        gray: "#B6C4B6",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
