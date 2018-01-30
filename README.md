# require-graphql-file

Simple package to import .graphql files to being able to write them with syntax highlighting.

## Installation

Via npm:
```bash
$ npm install --save require-graphql-file
```

## Get started

Just require the .graphql file and use it like a normal string.

```js
const requireGraphQLFile = require('require-graphql-file');

// the file is 'schema.graphql' but you can avoid to type the extension
const typeDefs = requireGraphQLFile('./schema');

// then use the schema as usual
// like in this example with Apollo
exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

## License

[MIT](LICENSE) ©️ [Federico Moretti](https://fmoretti.com)
