Ext.define("App.view.viewport.Menu", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.viewport.menu',
	layout: {
        type: 'hbox',
        align: 'left'
    },
    items:[{
        xtype: 'button',
        text: 'Item 1',
        width: 90,
        border: false,
        margin: '0 5 0 0',
        menu: [{
            text: 'Abrir calculadora',
            mView : 'calculatorTab'
        },{
            text: 'Personas',
            mView : 'personaTab'
        },{
            text: 'Equipos',
            mView : 'equipoTab'
        },{
            text: 'regular item 3'
        }]
    },{
        xtype: 'button',
        text: 'Item 2',
        width: 90,
        border: false,
        margin: '0 5 0 0',
        menu: [{
            text: 'regular item 1'
        },{
            text: 'regular item 2'
        },{
            text: 'regular item 3'
        }]
    }]
});