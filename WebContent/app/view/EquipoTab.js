Ext.define("App.view.EquipoTab", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.equipoTab',
	requires : ['App.view.equipo.BusquedaEquipo','App.view.equipo.EdicionEquipo' ],
	title : 'Búsqueda Equipo',
	items : [ {
		xtype : 'equipo.busquedaEquipo'
	}]
});