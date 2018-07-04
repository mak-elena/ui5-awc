sap.ui.define([],
	function(){
	"use strict";

		class VariantButtonComponent extends awc.AdaptiveComponent(HTMLElement) {
			constructor() {
				super();
			}
			static get observedAttributes() {
				return ['text', 'icon'];
			}

			get text() {
				return this.getAttribute('text');
			}

			set text(val) {
				this.setAttribute('text', val);
			}

			get icon() {
				return this.getAttribute('icon');
			}

			set icon(val) {
				this.setAttribute('icon', val);
			}

			attributeChangedCallback(name, oldValue, newValue) {
				super.attributeChangedCallback(name, oldValue, newValue);
				this._update();
			}

			performAdaptation(profile) {
				/*super.performAdaptation(profile);
				if (window.ShadyCSS) {
					window.ShadyCSS.styleSubtree(this);
				}*/
				this._update();
			}

			_update() {
				if (this._currentVariant != null) {
					this._currentVariant.text = this.text;
					this._currentVariant.icon = this.icon;
				}
			}
		}

		class TextButton extends awc.AdaptiveVariant {
			constructor() {
				super();
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				p.innerHTML = '<span class="ui5-awc_variantButton__text" >Text</span>';
				template.appendChild(p);
				return template;
			}

			static matches(context) {
				return context['display-mode'] == 'text';
			}

			connectedCallback() {
				super.connectedCallback();

				this._text = this.contentRoot.querySelector("span.ui5-awc_variantButton__text");
			}

			set text(val) {
				this._text.innerText = val;
			}
		}

		class MixedButton extends awc.AdaptiveVariant {
			constructor() {
				super();
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				p.innerHTML = '<span class="ui5-awc_variantButton__icon">Icon</span><span class="ui5-awc_variantButton__text" >Text</span>';
				template.appendChild(p);
				return template;
			}

			static matches(context) {
				return context['display-mode'] == 'mixed';
			}

			connectedCallback() {
				super.connectedCallback();

				this._icon = this.contentRoot.querySelector("span.ui5-awc_variantButton__icon");
				this._text = this.contentRoot.querySelector("span.ui5-awc_variantButton__text");
			}

			set text(val) {
				this._text.innerText = val;
			}

			set icon(val) {
				// TODO: change to icon content
				this._icon.innerText = val;
			}
		}

		class IconButton extends awc.AdaptiveVariant {
			constructor() {
				super();
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				p.innerHTML = '<span class="ui5-awc_variantButton__icon">Icon</span>';
				template.appendChild(p);
				return template;
			}

			static matches(context) {
				return context['display-mode'] == 'icon';
			}

			connectedCallback() {
				super.connectedCallback();

				this._icon = this.contentRoot.querySelector("span.ui5-awc_variantButton__icon");
			}

			set icon(val) {
				// TODO: change to icon content
				this._icon.innerText = val;
			}
		}

		VariantButtonComponent.registerVariant(TextButton);
		VariantButtonComponent.registerVariant(MixedButton);
		VariantButtonComponent.registerVariant(IconButton);

		VariantButtonComponent.defaultVariant = MixedButton;

		customElements.define('variant-button', VariantButtonComponent);
	});