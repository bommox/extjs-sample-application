Ext.define('App.store.persona.Persona', {
	extend : 'Ext.data.Store',
	alias : 'store.persona.persona' , 
	model : 'App.model.persona.Persona',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'ServletMerca',
		reader : {
			type: 'json',
			rootProperty : 'data'			
		}
	}
});