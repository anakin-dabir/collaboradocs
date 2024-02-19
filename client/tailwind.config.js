/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        primary_light: "#84ffff",
        primary_main: "#18ffff",
        primary_dark: "#00e5ff",
        primary_background: "#214E58",
        secondary_background: "#052742",
        tertiary_background: "#00182c",
        secondary_light: "#8c9eff",
        secondary_main: "#536dfe",
        secondary_dark: "#3d5afe",
        error_light: "#FF6C75",
        error_main: "#FF000F",
        error_dark: "#c10028",
        success_light: "#7AFF8F",
        success_main: "#00FF29",
        success_dark: "#348D33",
        warning_light: "#ffb74d",
        warning_main: "#ff9800",
        warning_dark: "#f57c00",
      },
      dropShadow: {
        primary: "0px 0px 10px #18FFFF",
      },
      animation: {
        ping: `ping 1s linear infinite`,
      },
      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
