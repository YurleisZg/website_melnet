import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        melnet: {
          blue: "#096173ff",    
          dark: "#003366",   
          orange: "#ff6600", 
          light: "#f0f7ff",  
        },
      },
    },
  },
  plugins: [],
};
export default config;