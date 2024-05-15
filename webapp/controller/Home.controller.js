sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.app.ui5demo.controller.Home", {
            onInit: function () {
                const oPerson={
                    student:{
                        name:"Ramya",
                        age:21
                    }
                }
                const jsonModel=new JSONModel(oPerson)
                this.getView().setModel(jsonModel,"studentDetails")
            },
            onClick: function () {
              
                const fNum = parseInt(this.getView().byId("3").getValue());
                
                const sNum = parseInt(this.getView().byId("4").getValue());
                const oper = this.getView().byId("6").getValue();
                
                    switch (oper) {
                        case '+':
                            alert(fNum + sNum);
                            break;
                        case '-':
                            alert(fNum - sNum);
                            break;
                        case '*':
                            alert(fNum * sNum);
                            break;
                        case '/':
                            alert(fNum / sNum);
                            break;
                        default:
                            alert("Oops..! Please enter the valid operator")
                            break;
                    }
                

            },
            onClick1: function () {

                if (confirm("If you want to earse the input data, please click ok.") === true) {
                    this.getView().byId("3").setValue();
                    this.getView().byId("4").setValue();
                    this.getView().byId("6").setValue();
                }
            },
            onSubmitData:function () {
                const oModel = this.getView().getModel();
                const oPerson = oModel.getProperty("/person");
                console.log(oPerson);
                
            }

        });
    });
