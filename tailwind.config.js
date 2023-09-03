/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myGray:{
          400:"#15141B"
        },
        myYellow:{
          400:"#E0FF05"
        },
        mySlaty:{
          400:"#282735"
        },
        myDarkblue:{
          400:"#0D0C11"
        }
      },
    },
  },
  varients:{
    extends:{},
  },
  plugins: [
  ],
}

