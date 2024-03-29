const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-public-sans)", ...fontFamily.sans],
      },
      colors: {
        blue: {
          900: "hsl(233, 26%, 24%)",
        },
        lime: {
          450: "hsl(136, 65%, 51%)",
        },
        cyan: {
          450: "hsl(192, 70%, 51%)",
        },
        gray: {
          100: "hsl(220, 16%, 96%)",
          400: "hsl(233, 8%, 62%)",
        },
      },
      backgroundImage: {
        "intro-mobile": 'url("/images/bg-intro-mobile.svg")',
        "intro-desktop": 'url("/images/bg-intro-desktop.svg")',
      },
      screens: {
        xs: "375px",
      },
      width: {
        "min-lg": "min(100% - 3rem, 69.5rem)",
      },
      padding: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        42: "10.5rem",
      },
      gap: {
        18: "4.5rem",
      },
      aspectRatio: {
        "article-img": "16/10",
      },
      transitionProperty: {
        filter: "filter",
      },
      grayscale: {
        50: "50%",
      },
      content: {
        "intro-desktop": 'url("/images/bg-intro-desktop.svg")',
      },
    },
  },
  plugins: [],
};
