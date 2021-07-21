sap.ui.define([
    "sap/ui/core/mvc/Controller", //CARGA ASINCRONA DEL MODULO "AMD" Asyncronal Module Definition
    "sap/m/MessageToast",
   
],
    /** 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     *  @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     
     */
    function (Controller, MessageToast,Models,ResourceModel) {
        "use strict";
        return Controller.extend("Curso_SAPFIORI.SAPUI5.controller.App", {

            onInit: function () {
               

            },

            onShowHello: function () {
                //read text from i18n               
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                // leer propiedades de data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("HelloMsg",[sRecipient]);
                MessageToast.show(sMsg);
            }

        });

    }); 
