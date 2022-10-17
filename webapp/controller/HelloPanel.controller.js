sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onInit: function() {
            
        },

        onShowHelloPress: function() {
            const oController = this;
            const oBundle = oController.getView().getModel("i18n").getResourceBundle();
            const sRecipient = oController.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },

        onOpenDialog: function() {
            const oController = this;
            oController.getOwnerComponent().openHelloDialog();
        }
    })
})