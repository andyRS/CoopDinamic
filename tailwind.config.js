module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./*.html"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#00916e",
        brandGreenDark: "#006f54",
        brandGreenBright: "#0fc295",
        brandBlue: "#4685fa",
        brandMenu: "#278b45",
        brandMenuHover: "#23c754",
        brandLoader: "#f3f3f3",
      },
      fontFamily: {
        roboto: ["Roboto-Regular", "sans-serif"],
        robotoBold: ["Roboto-Bold", "sans-serif"],
        openSansCondensed: ["Opens-Sans-Condensed", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      boxShadow: {
        calculator: "15px 10px 0px 5px #00000033",
        calculatorButton: "5px 5px 10px -3px #00000040, -5px -5px 15px 3px #00ffc11f",
        calculatorDisplay: "0px 0px 0px 10px #00000033",
        logo: "0px 0px 5px #ccc",
      },
      keyframes: {
        loader: {
          "0%, 80%, 100%": { boxShadow: "0 2.5em 0 -1.3em" },
          "40%": { boxShadow: "0 2.5em 0 0" },
        },
      },
      animation: {
        loader: "loader 1.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
