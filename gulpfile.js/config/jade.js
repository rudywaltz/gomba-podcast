var config       = require('./');

module.exports = {
  src: [
    config.src + '/**/*.jade',
    '!' + config.src + '/**/_*.jade'
  ],
  dest: config.dest,
  opts: {
    pretty: true,
    basedir: config.src
  }
};
