import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { isoImport } from 'vite-plugin-iso-import'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
            plugins: [
                isoImport(),
            ],}
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
