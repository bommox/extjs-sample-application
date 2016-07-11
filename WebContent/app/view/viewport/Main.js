Ext.define("App.view.viewport.Main", {
	extend : "Ext.tab.Panel",
	alias : "widget.viewport.main",
	//activeItem : 1,
	activeTab : 1,
	items: [{
    	title : 'Formulario regisrtro',
    	xtype : 'example.sampleForm01'
    },{
    	title : 'Calculadora',
    	xtype : 'panel',
    	bodyPadding : 10,
    	items : [{
    		xtype : 'example.calculator',
    		width : 400,
        	border : true,
        	bodyPadding : 10
    	}]
    }]
});