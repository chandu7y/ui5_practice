sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("msg.ri.pracmodels.controller.Home", {
        onInit() {
            this._oView = this.getView();
        },

        onUpdate: function () {
            if (!this._oDialog) {
                this._oDialog = sap.ui.xmlfragment(
                    "msg.ri.pracmodels.fragments.EmpDetails",
                    this
                );
                this._oView.addDependent(this._oDialog);
            }
            this._oDialog.open();
        },

        onSaveDialog: function () {
            const oJSONData = this._oView.getModel("empJSON").getProperty("/EmployeeDetails");
            const oEmpNo = oJSONData.EmployeeNumber;
            const oEmpName = oJSONData.EmployeeName;
            const oComp = oJSONData.CompanyName;
            const oEmail = oJSONData.EmaiID;
            const oAddress = oJSONData.Address;


        },

        onCloseDialog: function () {
            this._oDialog.close();
        },
    });
});