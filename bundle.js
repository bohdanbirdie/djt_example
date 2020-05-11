(function () {
	'use strict';

	const bootstrap = require("./main.dart.bootstrap");
	// Set this module's exports to the exports object of bootstrap module.
	module.exports = bootstrap;
	// Run the app which can (optionally) register more exports.
	bootstrap.main();

}());
