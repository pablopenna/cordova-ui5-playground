sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], (UIComponent, JSONModel) => {
    "use strict";

    return UIComponent.extend("cordova-ui5-playground.Component", {
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json",
        },

        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            this.getRouter().initialize();

            // Create simple model
            this.setModel(new JSONModel({
                version: sap.ui.version,
                foo: "bar",
                items: [
                    {
                        id: 'a',
                        description: "Somewhere under the rainbow",
                    },
                    {
                        id: 'b',
                        description: "Atento llegó el momento me presento",
                    },
                ]
            }), "sample");
        }
    });
});
