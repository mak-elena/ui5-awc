var fs = require('fs-extra');

//fs.copySync('./bower_components/openui5-sap.m/resources', './resources');
//fs.copySync('./bower_components/openui5-sap.ui.layout/resources', './resources');
//fs.copySync('./bower_components/openui5-sap.ui.core/resources', './resources');
//fs.copySync('./bower_components/openui5-themelib_sap_belize/resources', './resources');

fs.copySync('./node_modules/@webcomponents/webcomponentsjs/', './webapp/thirdparty/webcomponentsjs');
fs.copySync('./node_modules/@webcomponents/shadycss/', './webapp/thirdparty/shadycss');


fs.copySync('./webapp', './deploy');
// copy docsify pages by @nlsltz to docs folder
// fs.copySync('./resources', './deploy/resources');
