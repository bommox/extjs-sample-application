Ext.define("App.view.PersonaTab", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.personaTab',
	requires : ['App.view.persona.BusquedaPersona','App.view.persona.EdicionPersona' ],
	title : 'Búsqueda Persona',
	items : [ {
		xtype : 'persona.busquedaPersona'
	}]
});