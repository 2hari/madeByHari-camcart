/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        body: "#1D1F23",
        primary: "#151618",
        accent: {
          DEFAULT: "#F6CD46",
          hover: "#E1B72E",
        },
      },
      backgroundImage: {
        mainSlider: "url('/assets/mainSlider_bg.png')",
      },
    },
  },
  plugins: [],
}
