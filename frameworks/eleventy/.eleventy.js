module.exports = function (config) {
  // Add a filter using the Config API
  // ..

  // You can return your Config object (optional).
  return {
    dir: {
      input: 'src/',
      output: 'dist',
      includes: 'templates',
    },
    templateFormats: ['html', 'md'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid'
  };
};
