sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/base/Log"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * Samples to log messages in the console, and to set the maximum log level (type of console messages Error/Warning(2)/Info(3)/Debug(4)...the level 
     * until including all previous levels they are written to the console.
     * 
     * The Log Level can be set by following ways:
     * - using the URL parameter sap-ui-logLevel=<logLevel>
     * - if You have an index.html, You can set the following property in the UI5 bootstrap script as well:  data-sap-ui-loglevel="debug" forex
     *   (all the existing log levels are enumareated in: sap/base/Log.Level)
     * - programatically: Log.setLevel(4). You can use this statement in the console during debugging as well, to switch the log level
     * 
     * HINT: do not forget to select the required messages types to be shown in the browser console settings of the developer tools.
     * 
     * Beside below examples: You can also use  sap/base/Log.setLevel to set log level programmatically for dedicated components only (not globally).
     * Detailed documentation of log API at https://sapui5.hana.ondemand.com/#/api/module:sap/base/Log
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
             * Error Messages are logged to the console always, callstack is included by default.
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
             * Wanrning messages are NOT written to the console by default, and contain no callstack. 
             * Add URL parameter  sap-ui-logLevel=2  to see them in the console foer example.
             * You can add some prefix like SAPDEV: to find Your log entries easier.
             */
            onLogWarning: function () {
                Log.warning("SAPDEV: Hi this is a Warning message", `Here comes the long description, like ${this._sInfo}`);
            },

            /**
             * Info messages are not whown by default, it requires to increase log level to 3 forex adding URL parameter  sap-ui-logLevel=3  to see them in the console.
             * You can add some prefix like SAPDEV: to find Your log entries easier.
             */
            onLogInfo: function () {
                // You can use this statement programatically, or in the console as well to set the required Log level (:
                Log.setLevel(3);
                Log.info(`SAPDEV: Hi this is an INFO message, to see it ${this._sShowInfoinConsole}`, `Here comes the long description, like ${this._sInfo}`);
            },

            /**
             * Debug messages include call stack and are logged to the console when url parameter  sap-ui-debug=true  is set, 
             * or the log level is increased to 4. 
             * The UI5 logger will then  dump error/warning/info messages as well.
             */
            onLogDebug: function () {
                //Log.setLevel(4);
                Log.debug(`SAPDEV: Hi this is an DEBUG message`, "Bla bla");
            },

            /**  
             * You can dump complete JS Objects as well.
             * Open Developer Tools / Console
             * Activate Support Assistant with with:  Ctrl + Alt+ Shift + P or use function  Log.logSupportInfo(true)  programatically.
             * Attention: The Object is dumped only if the above criterion are fullfilled ! 
             */
            logAnObject: function () {
                Log.setLevel(4);
                Log.logSupportInfo(true); // OR open Support Assistant with:  Ctrl + Alt+ Shift + P
                var oObject = {
                    Mamma: "Mia",
                    Donna: "Clara",
                    Mizeria: [1, 2, 3],
                    Items: [{
                        Apa: "Cuka",
                        Funda: "Luka"
                    }, {
                        Apa: "Kave",
                        Funda: "Duka"
                    }]
                };
                Log.debug(`SAPDEV: Hi this is an DEBUG message`, "with Support Info and Object Details", "", () => oObject);
            }

        });
    });