sap.ui.define([
    "sap/ui/core/UIComponent",
    "Curso_SAPFIORI/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"

],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("Curso_SAPFIORI.SAPUI5.Component", {
            // ¿pasamos las propiedades e indicamos q es lo que vamos a "usar" . . . ? 
            metadata: {
                manifest: "json"
            },

            init: function () {
                //llamar a la funcion init del padre
                UIComponent.prototype.init.apply(this, arguments);

                // set data model en la vista
                this.setModel(Models.createRecipient());

                // set i18n en la vista
                var i18nModel = new ResourceModel({ bundleName: "Curso_SAPFIORI.SAPUI5.i18n.i18n" })
                this.setModel(i18nModel, "i18n");

            }

        })

    })