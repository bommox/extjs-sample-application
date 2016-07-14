Ext.define('App.store.equipo.Equipo', {
	extend : 'Ext.data.Store',
	alias : 'store.equipo.equipo' , 
	model : 'App.model.equipo.Equipo',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'ServletEquipo',
		reader : {
			type: 'json',
			rootProperty : 'data'			
		}
	}
});