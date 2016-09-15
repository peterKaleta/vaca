'use strict';
var uniqueRandomArray = require('unique-random-array');
var fs = require('fs');
var path = require('path');

var foxes = function () {
	return fs.readFileSync(path.join(__dirname, 'foxes.txt'), 'utf8')
		.replace(/\n$/, '').split('\n\n\n');
};


module.exports = uniqueRandomArray(foxes());
