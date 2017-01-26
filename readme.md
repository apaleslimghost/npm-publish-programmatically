# npm-publish-programatically

publish a thing to npm. but without touching the filesystem or anything like that.

## installation

```sh
npm install npm-publish-programatically
```

## usage

```js
const npmPublishProgramatically = require('npm-publish-programatically');

npmPublishProgramatically({
  'package.json': {
    name: 'cool-package',
    version: '1.0.0',
    main: 'index.js'
  },

  'main.js': `module.exports = function(greeting) {
    console.log('hello ' + greeting)
  }`
}, {
  auth: {
    token: 'ffffffff-ffff-ffff-ffff-ffffffffffff'
  }
}).then(
  () => console.log('publish succeeded'),
  err => console.error('publish failed', err)
);
```

## options
### `auth: {token}` (required)
provide your npm auth token. you probably have one in `~/.npmrc`.

### `registry`
npm registry url. it's probably `https://registry.npmjs.com`, which is the default.

### `access`
`public` for public packages (default), `private for private packages`.

## licence

ISC