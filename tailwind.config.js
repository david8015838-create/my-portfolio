export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        accent: "#06b6d4"
      },
      borderRadius: {
        xl2: "24px"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        tightest: "-0.02em"
      },
      lineHeight: {
        snug: "1.6"
      }
    }
  },
  plugins: []
}
