const preprocess = require("svelte-preprocess");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

