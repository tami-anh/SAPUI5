sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/walkthrough/utils/formatter"
], function(Controller, JSONModel, Formatter) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: Formatter,
        onInit: function() {
            const oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        }
    })
})