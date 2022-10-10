sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel){
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onInit: function() {
            const oController = this;
            const oData = {
                recipient: {
                    name: "Tami"
                }
            };
            const oModel = new JSONModel(oData);
            oController.getView().setModel(oModel);

            const i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            oController.getView().setModel(i18nModel, "i18n");

        },

        onShowHelloPress: function() {
            MessageToast.show("Hello there!");
        }
    })
})