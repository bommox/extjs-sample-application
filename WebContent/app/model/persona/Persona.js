Ext.define('App.model.persona.Persona', {
	extend: 'Ext.data.Model',
	alias : 'model.persona.persona',
	fields : [{
		name : 'nombre',
		type : 'string'
	},{
		name : 'apellido',
		type : 'string'
	},{
		name : 'telefono',
		type : 'auto'
	}]
});