sap.ui.define([
    "cordova-ui5-playground/controller/BaseController",
], (BaseController) => {
    "use strict";

    return BaseController.extend("cordova-ui5-playground.controller.Landing", {
        onInit() {
            console.log("landing page onInit");
        },

        test1() {
            console.log(cordova);
            console.log(navigator);
        },

        test2() {
            console.log("vibrating");
            navigator.vibrate(3000);

            console.log("taking a phto");
            navigator.camera.getPicture(()=>console.log("SUCCESS!"), ()=>console.log("ERROR!"), {});
        },
    });
});