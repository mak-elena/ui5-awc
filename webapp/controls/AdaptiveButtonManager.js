sap.ui.define([
	"ui5/awc/demo/model/AwcProfileManager"
	],
	function(){
	"use strict";

		function initContextStyles() {
			var oContextStyleElement = document.createElement("context-style");
			oContextStyleElement.innerHTML ="" +
				"@context (vibration > 0) {" +
				".sapUiSizeCompact .sapMBtn.ui5-awc_adaptiveButton .sapMBtnContent, " +
				".sapUiSizeCompact .sapMBtn.ui5-awc_adaptiveButton .sapMBtnIcon {" +
				"padding: 1rem;" +
				"}" +
				"}" +
				"" +
				"@context (vibration > 1) {\n" +
				".sapUiSizeCompact .sapMBtn.ui5-awc_adaptiveButton .sapMBtnContent, " +
				".sapUiSizeCompact .sapMBtn.ui5-awc_adaptiveButton .sapMBtnIcon {" +
				"padding: 2rem;" +
				"}}";
			var oHead = document.querySelector('head');
			oHead.appendChild(oContextStyleElement);
		};

		initContextStyles();
	});