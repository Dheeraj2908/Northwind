sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/FilterOperator',
    'sap/ui/comp/smartvariants/PersonalizableInfo',
    'sap/m/MessageBox',
], function (Controller, Filter, JSONModel, FilterOperator, PersonalizableInfo, MessageBox) {
    'use strict';
    return Controller.extend("north.controller.View", {
        onInit: function () {

            // this.oModel = this.getView().getModel();


            this.oLocalData = new JSONModel();

            this.oLocalData.setData({
                "customerData": {
                    "CustomerID": "ALFKI",
                    "CompanyName": "",
                    "ContactName": "",
                    "ContactTitle": "Sales Representative",
                    "Address": "Obere Str. 57",
                    "City": "",
                    "Region": null,
                    "PostalCode": "12209",
                    "Country": "",
                    "Phone": "030-0074321",
                    "Fax": "030-0076545",
                }
            });

            this.getView().setModel(this.oLocalData, "local");


        },

        onExit: function () {
            this.oModel = null;
            this.oFilterBar = null;
            this.oTable = null;
        },

        onSearch: function (oEvent) {

            // var val = oEvent.getParameter("value");
            

            // var val1 = oEvent.getParameters("value").selectionSet[0].mProperties.value;
            // var val2 = oEvent.getParameters("value").selectionSet[1].mProperties.value;
            // var val3 = oEvent.getParameters("value").selectionSet[2].mProperties.value;
            // var val4 = oEvent.getParameters("value").selectionSet[3].mProperties.value;

            var val1 = this.oView.getModel("local").getProperty("/customerData/CompanyName");
            var val2 = this.oView.getModel("local").getProperty("/customerData/ContactName");
            var val3 = this.oView.getModel("local").getProperty("/customerData/City");
            var val4 = this.oView.getModel("local").getProperty("/customerData/Country");


            // var value1 = oModel.getValue();

            // var value2 = ContactName.getValue();

            // var value3 = City.getValue();

            // var value4 = Country.getValue();


            // var val1 = this.getView().byId("get").getValue();
            // var val2 = this.getView().byId("give").getValue();
            // var val3 = this.getView().byId("fetch").getValue();
            // var val4 = this.getView().byId("call").getValue();


            var oFilter1 = new Filter("CompanyName", FilterOperator.Contains, val1);
            var oFilter2 = new Filter("ContactName", FilterOperator.Contains, val2);
            var oFilter3 = new Filter("City", FilterOperator.Contains, val3);
            var oFilter4 = new Filter("Country", FilterOperator.Contains, val4);

            // var oDataFilter = new sap.ui.model.Filter({ filters: [oFilter1, oFilter2, oFilter3, oFilter4], and: true });


            var oDataFilter = new Filter({
                filters: [oFilter1, oFilter2, oFilter3, oFilter4],
                and: true
            });

            //Step 3: Inject this filter inside the List to filter items
            // this.getView().byId("tab").getBinding("items").filter(oDataFilter);
            this.getView().byId("tab").getBinding("items").filter(oDataFilter);

        },
    });

});