/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        md: "600px",
        lg: "900px",
        xl: "1200px",
      },
      boxShadow: {
        hover: "2px 4px 10px rgba(255, 98, 167, 0.4)",
      },
    },
  },
  plugins: [],
};
