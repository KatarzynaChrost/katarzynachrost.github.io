import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "5px 5px 20px -12px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "custom-gradient-start": "rgb(var(--gradient-start-rgb))",
        "custom-gradient-end": "rgb(var(--gradient-end-rgb))",
      },
      textShadow: {
        md: "10px -10px 0px #27272a",
        lg: "-10px 10px 0px #27272a",
      },
      screens: {
        xs: "370px",
        "3xl": "1760px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
