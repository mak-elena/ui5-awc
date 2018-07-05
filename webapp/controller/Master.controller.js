/*global history */
sap.ui.define([
		"ui5/awc/demo/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/m/GroupHeaderListItem",
		"sap/ui/Device",
		"ui5/awc/demo/model/formatter"
	], function (BaseController, JSONModel, GroupHeaderListItem, Device, formatter) {
		"use strict";

		return BaseController.extend("ui5.awc.demo.controller.Master", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			/**
			 * Called when the master list controller is instantiated. It sets up the event handling for the master/detail communication and other lifecycle tasks.
			 * @public
			 */
			onInit : function () {
				// Control state model
				var oViewModel = this._createViewModel();

				this.getRouter().getRoute("master").attachPatternMatched(this._onMasterMatched, this);
				this.getRouter().attachBypassed(this.onBypassed, this);
			},

			/* =========================================================== */
			/* event handlers                                              */
			/* =========================================================== */
			onFullScreenPress: function() {
				this.getModel("appView").setProperty("/layout", "OneColumn");
				this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreenMode", false);
			},

			onShowSample: function () {
				var bReplace = !Device.system.phone;
				this.getRouter().navTo("sample", bReplace);
				this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
			},

			onShowUIDensityExample: function () {
				var bReplace = !Device.system.phone;
				this.getRouter().navTo("uiDensity", bReplace);
				this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
			},

			onShowTripsExample: function () {
				var bReplace = !Device.system.phone;
				this.getRouter().navTo("trips", bReplace);
				this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
			},

			onShowUiStructureExample: function () {
				var bReplace = !Device.system.phone;
				this.getRouter().navTo("uiStructure", bReplace);
				this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
			},

			onThemeChange: function (oEvent)
			{
				sap.ui.getCore().applyTheme(oEvent.getParameter("item").getKey());
			},

			/**
			 * Event handler for the master search field. Applies current
			 * filter value and triggers a new search. If the search field's
			 * 'refresh' button has been pressed, no new search is triggered
			 * and the list binding is refresh instead.
			 * @param {sap.ui.base.Event} oEvent the search event
			 * @public
			 */
			onSearch : function (oEvent) {

				var sQuery = oEvent.getParameter("query");

				if (sQuery) {
					this._oListFilterState.aSearch = [new Filter("Name", FilterOperator.Contains, sQuery)];
				} else {
					this._oListFilterState.aSearch = [];
				}
				this._applyFilterSearch();

			},

			/**
			 * Event handler for the bypassed event, which is fired when no routing pattern matched.
			 * If there was an object selected in the master list, that selection is removed.
			 * @public
			 */
			onBypassed : function () {
				this._oList.removeSelections(true);
			},

			/**
			 * Event handler for navigating back.
			 * We navigate back in the browser historz
			 * @public
			 */
			onNavBack : function() {
				history.go(-1);
			},

			/* =========================================================== */
			/* begin: internal methods                                     */
			/* =========================================================== */


			_createViewModel : function() {
				return new JSONModel({
					isFilterBarVisible: false,
					filterBarLabel: "",
					delay: 0,
					title: this.getResourceBundle().getText("masterTitleCount", [0]),
					noDataText: this.getResourceBundle().getText("masterListNoDataText"),
					sortBy: "Name",
					groupBy: "None"
				});
			},

			/**
			 * If the master route was hit (empty hash) we have to set
			 * the hash to to the first item in the list as soon as the
			 * listLoading is done and the first item in the list is known
			 * @private
			 */
			_onMasterMatched :  function() {
				//Set the layout property of the FCL control to 'OneColumn'
				this.getModel("appView").setProperty("/layout", "OneColumn");
			}

		});

	}
);
