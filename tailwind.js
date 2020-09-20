/* eslint-disable prettier/prettier */
module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    theme: {
      zIndex: {
        '9999': 9999,
      },
      extend: {
        colors: {
          "unilightblue": "#1870ce",
        }
      },
      screens: {
        xs: "320px",
  
        sm: "425px",
        // => @media (min-width: 425px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1280px"
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        // eslint-disable-next-line prettier/prettier
        "unihostelFont": "Noto Sans",
        "poppins": "Poppins"
      }
    },
    variants: {
      outline: ['responsive', 'focus', 'hover', 'active']
    },
    plugins: []
  };
  