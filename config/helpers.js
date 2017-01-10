var path = require('path');
var rootPath = path.resolve(__dirname, '..');

function root() {
  var args = Array.from(arguments);
  return path.join.apply(path, [rootPath].concat(args));
}

exports.root = root;
