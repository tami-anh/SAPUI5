sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onOpenDialog: function() {
            const oController = this;
            oController.getOwnerComponent().openHelloDialog();
        }
    })
})