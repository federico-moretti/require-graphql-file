'use strict';

var fs = require('fs');
var path = require('path');

function requireGraphQLFile(filename) {
  var file = filename.replace(/(.graphql$)/gi, '');
  file = file + '.graphql';
  return fs.readFileSync(path.join(__dirname, file), 'utf8').toString();
}

module.exports = requireGraphQLFile;