Ext.define("App.view.persona.BusquedaPersona", {
	alias : 'widget.persona.busquedaPersona',
	extend : 'Ext.panel.Panel',
	requires : ['App.view.persona.BusquedaPersonaController'],
	controller : 'persona.busquedaPersona',
	layout : {
		type : 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'form',
		reference: 'myForm', 
		layout : {
			type: 'hbox', 
			align: 'stretch'
		}, 
		flex:0.2, 
		defaults: {
			padding:5
		}, 
		items :[{
			xtype : 'textfield',
			name : 'nombre',
			fieldLabel : 'Nombre',
			flex : 1
		},{
			xtype : 'textfield',
			name : 'apellido',
			fieldLabel : 'Apellido',
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
			text : 'Limpiar',
			iconCls : 'fa fa-eraser',
			listeners : {
				click : 'doClean'
			}
		},{
			text : 'Buscar',
			iconCls : 'fa fa-search',
			disabled : true,
			formBind : true,
			listeners : {
				click : 'doSearch'
			}
		}]
	}, {
		xtype : 'grid',
		reference : 'myGrid',
		flex : 1,
		store : {
			type : 'persona.persona',
			autoLoad : true,
			name : 'simpsonsStore' + Math.random()
		},
		columns : [{
			text : 'Nombre',
			dataIndex : 'nombre',
			flex: 1
		}, {
			text : 'Apellido',
			dataIndex : 'apellido',
			flex: 1
		}, {
			text : 'Teléfono',
			dataIndex : 'telefono',
			flex: 1
		}],
		tbar : [{
			text : 'Crear',
			listeners : {
				click : 'onAddBtnClick'
			}
		}, {
			text : 'Editar',
			name : 'editBtn',
			disabled : true,
			listeners : {
				click : 'onEditBtnClick'
			}
		}, {
			text : 'Borrar',
			name : 'removeBtn',
			disabled : true,
			listeners : {
				click : 'onRemoveBtnClick'
			}
		}],
		listeners : {
			selectionchange : 'onSelectionChange',
			itemdblclick : 'onRowDblClick'
		}
	}]
});