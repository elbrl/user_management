import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tg: "0px",
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1080px",
      ["2lg"]: "1180px",
      ["3lg"]: "1220px",
      xl: "1280px",
      ["2xl"]: "1530px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
// kqOjxFs6O1lgFAEN
