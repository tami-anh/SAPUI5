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
            const oView = oController.getView()

            //create the dialog lazily
            if(!oController.byId("helloDialog")) {
                //load asynchronous XML fragment
                Fragment.load({
                    id: oView.getId(""),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oController
                }).then(function(oDialog) {
                    //connect dialog to the root view of this component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                oController.byId("helloDialog").open();
            }
        },

        onCloseDialog: function() {
            this.byId("helloDialog").close();
        }
    })
})