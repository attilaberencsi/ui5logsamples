/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["com/sapdev/demo/log/ui5consolelog/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
