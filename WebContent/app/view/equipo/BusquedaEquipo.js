Ext.define("App.view.equipo.BusquedaEquipo", {
	alias : 'widget.equipo.busquedaEquipo',
	extend : 'Ext.panel.Panel',
	requires : ['App.view.equipo.BusquedaEquipoController'],
	controller : 'equipo.busquedaEquipo',
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
			name : 'ciudad',
			fieldLabel : 'Ciudad',
			flex : 1
		},{
			xtype : 'textfield',
			name : 'nombre',
			fieldLabel : 'Nombre',
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
			type : 'equipo.equipo',
			autoLoad : true,
			name : 'personaStore' + Math.random()
		},
		columns : [{
			text : 'Ciudad',
			dataIndex : 'ciudad',
			flex: 1
		}, {
			text : 'Nombre',
			dataIndex : 'nombre',
			flex: 1
		}, {
			text : 'Fundación',
			dataIndex : 'fundacion',
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