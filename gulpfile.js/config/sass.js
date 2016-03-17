var config      = require('./');

module.exports = {
  src: config.src + '/sass/**/*.scss',
  dest: config.dest + '/css',
  settings: {
    outputStyle: 'compressed',
  },
  autoprefixer: {
    browsers: ['last 2 versions', 'ie 9']
  }
};
