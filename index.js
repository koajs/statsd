
/**
 * Module dependencies.
 */

var Stats = require('statsy');

/**
 * Initialize stats middleware with `opts`
 * which are passed to statsy.
 *
 * @param {Object} [opts]
 * @return {Function}
 * @api public
 */

module.exports = function(opts){
  opts = opts || {};
  var s = new Stats(opts);

  return function *stats(next){
    // counters
    s.incr('request.count');
    s.incr('request.' + this.method + '.count');
    s.incr('request.' + this.method + '.' + this.path + '.count');

    // size
    s.histogram('request.size', this.request.length);

    // remote addr
    s.set('request.addresses', this.ip);

    // duration
    this.res.on('finish', s.timer('request.duration'));
    this.res.on('finish', s.timer('request.' + this.method + '.' + this.path + '.duration'));

    yield next;
  }
};