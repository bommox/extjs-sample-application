Ext.define("App.view.CalculatorTab", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.calculatorTab',
	requires : ['App.view.component.Calculator'],
	title : 'Calculadora',
	bodyPadding : 10,
	items : [ {
		xtype : 'component.calculator',
		width : 400,
		border : true,
		bodyPadding : 10
	} ]
});