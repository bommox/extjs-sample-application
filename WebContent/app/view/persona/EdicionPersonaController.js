Ext.define('App.view.persona.EdicionPersonaController', {
	extend: 'Ext.app.ViewController',
	alias : 'controller.persona.edicionPersona',
	
	afterRender : function(view) {
		if (view.personaRecord) {
			view.getForm().setValues(view.personaRecord.data);
		}
	}
	
});