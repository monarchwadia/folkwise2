const preprocess = require("svelte-preprocess");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Familjen Grotesk', 'Arial', 'sans-serif'],
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

