Ext.define("App.view.persona.EdicionPersona", {
	alias : 'widget.persona.edicionPersona',
	extend : 'Ext.form.Panel',
	requires : ['App.view.persona.EdicionPersonaController'],
	controller : 'persona.edicionPersona',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	bodyPadding : 10,
	items : [{
		xtype : 'textfield',
		name : 'nombre',
		fieldLabel : 'Nombre',
		allowBlank : false,
		flex : 1
	},{
		xtype : 'textfield',
		name : 'apellido',
		fieldLabel : 'Apellido',
		allowBlank : false,
		flex : 1
	},{
		xtype : 'numberfield',
		name : 'telefono',
		fieldLabel : 'Telefono',
		flex : 1,
		hideTrigger : true,
		maxLength : 9,
		minLength : 9
	}],
	buttons : [{
		text : 'Cancelar'
	}, {
		text : 'Aceptar',
		disabled : true,
		formBind : true
	}],
	listeners : {
		afterrender : 'afterRender'
	}
});