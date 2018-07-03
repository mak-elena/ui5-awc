sap.ui.define([
	"ui5/awc/demo/model/AwcProfileManager"
	],
	function(){
	"use strict";

		function initContextStyles() {
			var oContextStyleElement = document.createElement("context-style");
			oContextStyleElement.innerHTML ="" +
					"@context (vibration > 0) {" +
					".sapMBtn.ui5-awc_adaptiveButton .sapMBtnContent {" +
						"padding: 1rem;" +
					"}" +
					" .sapMBtn.ui5-awc_adaptiveButton .sapMBtnIcon {" +
						"padding: 0.7rem;" +
					"}" +
				"}" +
				"@context (vibration > 1) " +
					".sapMBtn.ui5-awc_adaptiveButton .sapMBtnContent {" +
						"padding: 1.5rem 1rem;" +
					"}" +
					" .sapMBtn.ui5-awc_adaptiveButton .sapMBtnIcon {" +
						"padding: 1rem;" +
					"}" +
				"}";
			var oHead = document.querySelector('head');
			oHead.appendChild(oContextStyleElement);
		};

		initContextStyles();
	});