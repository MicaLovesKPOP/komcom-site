import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F12",
        panel: "#111820",
        panel2: "#0F151C",
        text: "#E7EDF2",
        muted: "#A7B2BC",
        border: "#22303B",
        accent: "#68CD32",
        accent2: "#BFEA6A",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
