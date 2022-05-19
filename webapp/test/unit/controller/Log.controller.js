/*global QUnit*/

sap.ui.define([
	"comsapdevdemolog/ui5consolelog/controller/Log.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Log Controller");

	QUnit.test("I should test the Log controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
