sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onInit: function() {
            const contentDensityClass = this.getOwnerComponent().getContentDensityClass();
            this.getView().addStyleClass(contentDensityClass);
        },

        onOpenDialog: function() {
            const oController = this;
            oController.getOwnerComponent().openHelloDialog();
        }
    })
})