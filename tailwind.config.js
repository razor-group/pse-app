/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**.html ",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
      colors: {
        indigo: {
          100: "#0035E9",
          500: "#0035E9",
          600: "#0035E9",
        },
        black: "#2e2e2e",
        textColor: "#2e2e2e",
        BodyBg: "#F3F4F6",
        red: "#F56060",
        border: "#D1D5DB",
        disabled: "#9CA3AF",
        progressBar: "#BFD5FF",

    
       
        StatusRed:{
          100:"#FEE2E2",
          200:"#7F1D1D",
          300:"#EF4444"
        },
        StatusGreen:{
          100:"#DCFCE7",
          200:"#14532D",
          300:"#22C55E"
        },
        StatusYellow:{
          100:"#FEF9C3",
          200:"#713F12",
          300:"#FACC15"
        }
      },
    },
    fontSize: {
      title: "24px",
      subtitle: "1rem",
      base: "14px",
      sm: "12px",
     
    },
    boxShadow: {
      sm: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
