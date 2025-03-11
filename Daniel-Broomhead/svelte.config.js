import path from 'path';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
  kit: {
    alias: {
      $components: path.resolve('src/components'),  // Ensure this points to the correct folder
    },
  },
  preprocess: sveltePreprocess(),
};

export default config;
