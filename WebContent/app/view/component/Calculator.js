Ext.define("App.view.component.Calculator", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.component.calculator',
	requires : [ "App.view.component.CalculatorController" ],
	controller : 'component.calculator',
	layout : {
		type : 'vbox',
		align : 'stretch'	
	},

	items : [ {
		xtype : 'textfield',
		height : 62
	}, {
		xtype : 'panel',
		defaultType : 'button',
		defaults : {
			width : '25%',
			height : 62
		},
		items : "789x456-123+0.c=".split("").map(function(item, idx) {
			var result = {
				text : item
			};
			if (idx % 4 == 3) {
				result.style = "background-color: #444;"
			}
			return result;
		})
	} ]
});