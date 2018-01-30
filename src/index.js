const fs = require('fs');
const path = require('path');
const caller = require('caller');

function requireGraphQLFile(filename) {
  const folder = path.dirname(caller());
  let file = filename.replace(/(.graphql$)/gi, '');
  file = `${file}.graphql`;
  return fs.readFileSync(path.join(folder, file), 'utf8').toString();
}

module.exports = requireGraphQLFile;
