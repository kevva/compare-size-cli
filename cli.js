#!/usr/bin/env node
'use strict';
const compareSize = require('compare-size');
const meow = require('meow');
const prettyBytes = require('pretty-bytes');

const cli = meow(`
	Usage
	  $ compare-size <file> <file>

	Example
	  $ compare-size foo.zip bar.tar.gz
	  foo.zip: 1.34 kB
	  bar.tar.gz: 1 kB
	  Difference: 0.34 kB
`);

if (cli.input.length < 2) {
	console.error('Provide two files to compare');
	process.exit(1);
}

compareSize(cli.input[0], cli.input[1]).then(data => {
	console.log([
		`${cli.input[0]}: ${prettyBytes(data[cli.input[0]])}`,
		`${cli.input[1]}: ${prettyBytes(data[cli.input[1]])}`,
		`Difference: ${prettyBytes(data.difference)}`
	].join('\n'));
});
