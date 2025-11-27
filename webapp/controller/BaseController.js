sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict";

    return Controller.extend("cordova-ui5-playground.controller.BaseController", {
        onCloseDialog: function () {
            this.byId("testDialog").close();
        },
        onOpenDialog: function() {
            this.byId("testDialog").open();
        }
    });
});