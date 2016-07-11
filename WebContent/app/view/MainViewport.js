Ext.define('App.view.MainViewport', {
    extend : 'Ext.container.Viewport',
    requires : ['App.view.viewport.Header', 'App.view.viewport.Menu'],
	layout : 'border',
    items : [{
		region: 'north',
		xtype: 'viewport.header'
	},{
        region: 'north',
        xtype: 'viewport.menu'
    },{
        region: 'center',
        xtype: 'panel',
        items: []
    }]
});