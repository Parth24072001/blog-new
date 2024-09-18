module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        light: {
          DEFAULT: "var(--light)",
        },
        border: {
          DEFAULT: "var(--border)",
        },
        demo: {
          DEFAULT: "var(--demo)",
        },
        text: {
          DEFAULT: "var(--textt)",
        },
        textt: {
          DEFAULT: "var(--textt)",
        },
        textd: {
          DEFAULT: "var(--textd)",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        maxXsm: { max: "380px" },
        maxSsm: { max: "430px" },
        maxXs: { max: "480px" },
        maxSm: { max: "639px" },
        maxMd: { max: "767px" },
        maxLg: { max: "1023px" },
        minMax: { min: "768px", max: "960px" },
        minMaxMd: { min: "768px", max: "1023px" },
        minMaxLg: { min: "768px", max: "1366px" },
        minMaxCM: { min: "1024px", max: "1279px" },
        minMaxXl: { min: "1024px", max: "1366px" },
      },
      fontFamily: {
        "inter-regular": "InterRegular",
        "inter-medium": "InterMedium",
        "inter-semibold": "InterSemiBold",
        "inter-bold": "InterBold",
        "inter-extrabold": "InterExtraBold",
      },
      boxShadow: {
        default: "0px 1px 4px 0px rgba(0, 0, 0, 0.14)",
        light: "rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};
