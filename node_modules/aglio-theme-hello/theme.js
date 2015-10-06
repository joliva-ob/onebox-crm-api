// Get the theme's configuration options
exports.getConfig = function () {
  return {
    // This is a list of all supported API Blueprint format versions
    formats: ['1A'],
    // This is a list of all options your theme accepts. See
    // here for more: https://github.com/bcoe/yargs#readme
    // Note: These get prefixed with `theme` when you access
    // them in the options object later!
    options: [
      {
        name: 'name',
        description: 'Your name',
        default: 'world'
      }
    ]
  };
}

// Asyncronously render out a string
exports.render = function (input, options, done) {
  // Normally you would use some template engine here.
  // To keep this code really simple, we just print
  // out a string and ignore the API Blueprint.
  done(null, 'Hello, ' + options.themeName + '!');
};
