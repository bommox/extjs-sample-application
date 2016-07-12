Ext.define("App.view.viewport.Header", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.viewport.header',
	requires : ['App.view.viewport.HeaderController'],
	controller : 'viewport.header',
	
	layout : {
		type : 'hbox',
		align : 'middle',
		pack : 'start'
	},
	items : [{
		xtype : 'image',
		src : 'css/img/logoMerca.png',
		height : 70,
		width : 300
	}, {
		xtype : 'container',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'right',
			pack : 'end'
		},
		items : [{
			xtype : 'button',
			text : 'salir',
			iconCls: 'fa fa-user',
			maxHeight : 50,
			itemId : 'salirBtn'
		}]
	}]
});