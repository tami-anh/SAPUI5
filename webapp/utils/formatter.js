sap.ui.define([
    "sap/ui/model/resource/ResourceModel"
], function(ResourceModel){
    "use strict"
    return {
        statusText: function(sStatus) {
            //const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            var oI18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            var resourceBundle = oI18nModel.getResourceBundle();
            switch(sStatus) {
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                case "C":
                    return resourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
        }
    }
})