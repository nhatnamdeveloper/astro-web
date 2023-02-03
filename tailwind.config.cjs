/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro"],
        serif: ["Source Sans Pro"],
      },
    },
  },
  plugins: [
    require("tailwindcss")("tailwind.config.cjs"),
    require("@tailwindcss/typography"),
  ],
};
