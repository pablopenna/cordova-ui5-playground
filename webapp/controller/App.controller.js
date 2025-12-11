sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "cordova-ui5-playground/controller/KeyPressListener"
], (
    Controller, 
    KeyPressListener,
) => {
    "use strict";

    return Controller.extend("cordova-ui5-playground.controller.App", {
        onInit() {
            console.log("App onInit");

            KeyPressListener.setup();
        }
    });
});