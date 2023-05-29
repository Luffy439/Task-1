/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {
      colors:{
        origin: "#F66800",
        whiteColor: "#FFFFFF",
        lightBlue: "#2b3255",
        darkBlue: "#161928",
      },
      fontFamily:{
     title: "Tajawal-Blod",
     subTitle: "OpenSans-Regular",
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        homeBackground: "url('/public/assets/images/Topology-2-min.png')",
        a1: "url('/public/assets/images/اخرى.png')",
        a2: "url('/public/assets/images/شركات.png')",
        a3: "url('/public/assets/images/عيادات.png')",
        a4: "/public/assets/images/ملابس.png')",
        a5: "url('/public/assets/images/مدارس.png')",
        a6: "url('/public/assets/images/مطاعم.png')",
      },
    },
  },
  plugins: [],
}
