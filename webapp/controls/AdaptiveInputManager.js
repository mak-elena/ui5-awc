sap.ui.define([],
	function(){
	"use strict";

		function initContextStyles() {
			var oContextStyleElement = document.createElement("context-style");
			oContextStyleElement.innerHTML =
				"@context (vibration > 0) {" +
					".sapMInput.ui5-awc_adaptiveInput .sapMInputBaseInner {" +
						"width: 3.8rem;" +
						"font-size: 1.5rem;" +
					"}" +
				"}" +
				"@context (vibration > 1) {" +
					".sapMInput.ui5-awc_adaptiveInput .sapMInputBaseInner {" +
						"width: 4.4rem;" +
						"font-size: 2rem;" +
					"}" +
				"}";
			var oHead = document.querySelector('head');
			oHead.appendChild(oContextStyleElement);
		};

		initContextStyles();
	});