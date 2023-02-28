import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
    build: {
        // Copy additional files to the output directory
        rollupOptions: {
            input: {
                main: 'src/js/app.js',
                index: 'index.html',
                about: 'about.html'
            }
        },
        // Specify the output directory
        outDir: 'dist'
    },

    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass
            }
        }
    }
});
