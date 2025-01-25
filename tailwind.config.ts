import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: [
          "Geist", // Add Geist as the primary sans-serif font
          "Inter", // Fallback font
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        "black": "rgb(0, 0, 0)",
        "blured-bg": "rgba(0, 0, 0, 0.25)",
        'button': 'rgba(6, 229, 255, 1)'
      },
      fontSize: {
        '6.5xl': '4.25rem',
        'xxs': '0.65rem'
      },
      height: {
        '9.5': '2.625rem'
      },
      width: {
        '9.5': '2.625rem',
        'iconSize': '17.55px'
      },
      border: {
        'grey': 'rgb(29, 29, 29)'
      },
      borderRadius: {
        'xxl': '0.875rem',
        '4xl': '2rem'
      },
    },
  },
  plugins: [],
} satisfies Config;