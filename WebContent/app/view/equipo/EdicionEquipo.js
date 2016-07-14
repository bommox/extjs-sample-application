Ext.define("App.view.equipo.EdicionEquipo", {
	alias : 'widget.equipo.edicionEquipo',
	extend : 'Ext.form.Panel',
	requires : ['App.view.equipo.EdicionEquipoController'],
	controller : 'equipo.edicionEquipo',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	bodyPadding : 10,
	items : [{
		xtype : 'textfield',
		name : 'ciudad',
		fieldLabel : 'Ciudad',
		allowBlank : false,
		flex : 1
	},{
		xtype : 'textfield',
		name : 'nombre',
		fieldLabel : 'Nombre',
		allowBlank : false,
		flex : 1
	},{
		xtype : 'numberfield',
		name : 'fundacion',
		fieldLabel : 'Fundacion',
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