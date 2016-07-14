Ext.define('App.model.equipo.Equipo', {
	extend: 'Ext.data.Model',
	alias : 'model.equipo.equipo',
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