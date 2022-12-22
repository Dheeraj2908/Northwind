sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
	'sap/ui/comp/smartvariants/PersonalizableInfo'
], function(Controller, Filter, FilterOperator, PersonalizableInfo) {
    'use strict';
    return Controller.extend("north.controller.View",{
        onInit: function() {
			
			this.oModel=this.getView().getModel();

		},

		onExit: function() {
			this.oModel = null;
			this.oFilterBar = null;
			this.oTable = null;
		},

		onSearch: function (oEvent) {

            var val1 = this.getView().byId("get").getValue();
            var val2 = this.getView().byId("give").getValue();
            var val3 = this.getView().byId("fetch").getValue();
            var val4 = this.getView().byId("call").getValue();
            

            var oFilter1 = new Filter("CompanyName", FilterOperator.Contains, val1);
            var oFilter2 = new Filter("ContactName", FilterOperator.Contains, val2);
            var oFilter3 = new Filter("City", FilterOperator.Contains, val3);
            var oFilter4 = new Filter("Country", FilterOperator.Contains, val4);

            // var oDataFilter = new sap.ui.model.Filter({ filters: [oFilter1, oFilter2, oFilter3, oFilter4], and: true });

            
            var oDataFilter = new Filter({
                filters: [oFilter1, oFilter2, oFilter3, oFilter4],
                and: true
            });

            debugger;

            //Step 3: Inject this filter inside the List to filter items
            this.getView().byId("tab").getBinding("items").filter(oDataFilter);
			
		},       
    });
    
});