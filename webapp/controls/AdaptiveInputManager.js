sap.ui.define([],
	function(){
	"use strict";

		function initContextStyles() {
			var oContextStyleElement = document.createElement("context-style");
			oContextStyleElement.innerHTML =
				"@context (vibration > 0) {" +
					".sapMInput.ui5-awc_adaptiveInput .sapMInputBaseInner {" +
						"width: 4rem;" +
						"font-size: 1.5rem;" +
					"}" +
				"}" +
				"@context (vibration > 1) {" +
					".sapMInput.ui5-awc_adaptiveInput .sapMInputBaseInner {" +
						"width: 6rem;" +
						"font-size: 2.5rem;" +
					"}" +
				"}";
			var oHead = document.querySelector('head');
			oHead.appendChild(oContextStyleElement);
		};

		initContextStyles();
	});