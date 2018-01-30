'use strict';

var fs = require('fs');
var path = require('path');
var caller = require('caller');

function requireGraphQLFile(filename) {
  var folder = path.dirname(caller());
  var file = filename.replace(/(.graphql$)/gi, '');
  file = file + '.graphql';
  return fs.readFileSync(path.join(folder, file), 'utf8').toString();
}

module.exports = requireGraphQLFile;