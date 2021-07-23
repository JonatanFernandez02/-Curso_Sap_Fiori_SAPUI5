sap.ui.define([
    "sap/ui/core/mvc/Controller" //CARGA ASINCRONA DEL MODULO "AMD" Asyncronal Module Definition

   
],
    /** 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */
    function (Controller) {
        "use strict";
        return Controller.extend("Curso_SAPFIORI.SAPUI5.controller.App", {

            onInit: function () {
            },
            onOpenDialogHeader : function(){
                this.getOwnerComponent().openHelloDialog();
            }
        });

    }); 
