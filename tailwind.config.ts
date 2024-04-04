import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0C0C0C',
        white: '#FFFFFF',
        light: '#F5F5F5',
        gray: '#31363F',
        brick: '#F2613F',
        lightbrick: '#FFF2CC',
      },
    },
  },
  plugins: [],
};
export default config;
