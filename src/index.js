const fs = require('fs');
const path = require('path');

function requireGraphQLFile(filename) {
  let file = filename.replace(/(.graphql$)/gi, '');
  file = `${file}.graphql`;
  return fs.readFileSync(path.join(__dirname, file), 'utf8').toString();
}

module.exports = requireGraphQLFile;
