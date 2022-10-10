sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
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
        }
    })
})