Ext.define("App.view.example.Calculator", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.example.calculator',
	layout: {    
    	type: 'vbox',
    	align: 'stretch'
	},
	items : [{
		xtype: 'textfield',
		height: 62
	}, {
		xtype : 'panel',
		defaultType : 'button',
		defaults : {
			width: '25%',
			height: 62
		}, 
		items : "789x456-123+0.c=".split("").map(function(item, idx) {
			return (idx % 4 == 3)
				? {text : item, style : "background-color: #444;"}
				: {text : item};
		})
	}]
});