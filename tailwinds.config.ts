import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        melnet: {
          blue: "#096173ff",
          dark: "#01101fff",
          orange: "#ff6600",
          light: "#f0f7ff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
