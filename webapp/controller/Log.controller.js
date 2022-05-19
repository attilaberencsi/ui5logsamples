sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/base/Log"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * Samples to log messages in teh console and set the maximum log level (type of console messages Error/Warning etc.) logged in teh console.
     * (HINT: do not forget to select the required messages types to be shown in teh browser console).
     * Beside below examples: You can also use  sap/base/Log.setLevel to set log level programmatically for dedicated components only or globally.     
     * Read detailed documentation of log API at https://sapui5.hana.ondemand.com/#/api/module:sap/base/Log
     */
    function (Controller, Log) {
        "use strict";

        return Controller.extend("com.sapdev.demo.log.ui5consolelog.controller.Log", {
            /**
             * Using variables can be helpful for console log messages, especially when You implement a framework
             */
            onInit: function () {
                this._sInfo = "Logging is available since 1.58";
                this._sShowInfoinConsole = "set URL parameter: sap-ui-logLevel=3";
            },

            /**
             * Info messages are not whown by default. Add URL parameter  sap-ui-logLevel=3  to see them in the console.
             * You can add some prefix like SAPDEV: to find Your log entries easier.
             */
            onLogInfo: function () {
                debugger;
                // You can use this statement in the console as well to set the Log level (:   Log.setLevel(3);
                Log.info(`SAPDEV: Hi this is an INFO message, to see it ${this._sShowInfoinConsole}`, "Here comes the long description, like ${this._sInfo}");
            },

            /**
             * Error Messages are logged to the console always, callstack is included also.
             */
            onLogError: function () {
                try {
                    let a = b;
                } catch (error) {
                    var sErrorDetails = error.toString();
                    Log.error(`SAPDEV: An error occured while executing this function`, `${sErrorDetails}`);
                }
            },

            /**
             * Debug messages are logged to the console when url parameter  sap-ui-debug=true  is set, or log level is increased using the URL parameter.
             * If You have an index.html, You can set the following property in the UI5 bootstrap script as well:  data-sap-ui-loglevel="debug".             
             */
            onLogDebug: function () {
                Log.debug(`SAPDEV: Hi this is an DEBUG message`, "Bla bla");
            }
        });
    });