import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Compare size between two files/);
});

test('show version', async t => {
	t.is(await execa.stdout('./cli.js', ['--version']), require('./package.json').version);
});
