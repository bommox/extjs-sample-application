Ext.define('App.view.equipo.EdicionEquipoController', {
	extend: 'Ext.app.ViewController',
	alias : 'controller.equipo.edicionEquipo',
	
	afterRender : function(view) {
		if (view.equipoRecord) {
			view.getForm().setValues(view.equipoRecord.data);
		}
	}
	
});