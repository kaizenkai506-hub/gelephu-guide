module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8A3B2F",
        accent: "#006E62",
        gold: "#C9A24B",
        "n-900": "#0F1724",
        "n-700": "#374151",
        "n-100": "#F8F7F5"
      },
      fontFamily: {
        display: ["Noto Serif", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      spacing: {
        4.5: "18px"
      },
      borderRadius: {
        lg: "12px"
      }
    }
  },
  plugins: []
};
