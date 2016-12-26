const tgzFiles = require('@quarterto/tgz-files');
const Registry = require('npm-registry-client');
const promisify = require('@quarterto/promisify');
const npmlogNoop = require('@quarterto/npmlog-noop');

const client = new Registry({
	log: npmlogNoop
});

client.publish = promisify(client.publish);

module.exports = (files, {auth, registry = 'https://registry.npmjs.com', access = 'public'} = {}) => Promise.resolve().then(() => {
	if(!files['package.json']) throw new Error('No package.json in files object');

	const metadata = files['package.json'].name ? files['package.json'] : JSON.parse(files['package.json']);
	const {name} = metadata;
	const body = tgzFiles(files, {prefix: 'package'});

	return client.publish(`${registry}/${name}`, {metadata, access, auth, body});
});
