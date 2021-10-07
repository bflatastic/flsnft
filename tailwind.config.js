module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Luckiest Guy"],
        body: ["Space Grotesk"],
      },
      colors: {
        main: "#90c94a",
        alt: "#e3fe96",
        darkbg: "#01030d",
        btnmain: "#90c94a",
        btnhover: "#5b8628",
        linkhover: "#90c94a",
        darktype: "#202429",
        sand: "#e1a56f",
      },
      backgroundImage: {
        "hero-image": "url('/images/hero-bg.jpg')",
        "cactus-image": "url('/images/hero-bg.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
