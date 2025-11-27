sap.ui.define([
    "cordova-ui5-playground/controller/BaseController",
], (BaseController) => {
    "use strict";

    return BaseController.extend("cordova-ui5-playground.controller.Landing", {
        onInit() {
            console.log("landing page onInit");
        }
    });
});