export default {
  projectRoot: '.',
  src: './src',
  pages: './src/pages',
  dist: './dist',
  public: './public',
  buildOptions: {
    site: 'http://hanascode.dev',
    sitemap: true,
  },
  devOptions: {
    port: 3000,
  },
  renderers: [ "@astrojs/renderer-preact" ],
};
