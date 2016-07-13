Ext.define("App.view.viewport.Main", {
	extend : "Ext.tab.Panel",
	alias : "widget.viewport.main",
	//activeItem : 1,
	activeTab : 0,
	id : 'main_content',
	items: [{
    	title : 'Formulario regisrtro',
    	xtype : 'personaTab',
    	closable : true
    }]
});