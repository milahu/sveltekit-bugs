import adapter from '@sveltejs/adapter-static';

import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

const config = {
    kit: {
        adapter: adapter({})
    },
    extensions: [".svelte", ...mdsvexConfig.extensions],
    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;