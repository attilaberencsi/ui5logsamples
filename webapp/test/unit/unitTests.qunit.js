/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsapdevdemolog/ui5consolelog/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
