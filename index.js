const tgzFiles = require('@quarterto/tgz-files');
const Registry = require('npm-registry-client');

const client = new Registry();

const auth = {
	token: process.env.NPM_TOKEN
};

const id = Math.floor(parseInt('zzzzzz', 36) * Math.random()).toString(36);
const name = `quarterto-test-${id}`;

const metadata = {
	name,
	version: '0.0.0',
};

const body = tgzFiles({
	'package.json': JSON.stringify(metadata),
	'index.js': `console.log(${JSON.stringify(name)})`
}, {prefix: 'package'});

client.publish(`https://registry.npmjs.com/${name}`, {
	body,
	auth,
	access: 'public',
	metadata,
}, console.log);