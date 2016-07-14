Ext.define('App.view.equipo.BusquedaEquipoController', {
	extend: 'Ext.app.ViewController',
	alias : 'controller.equipo.busquedaEquipo',

	
	doClean : function() {
		var form = this.lookupReference("myForm");
		form.reset();
	},	
	
	doSearch : function() {
		var form = this.lookupReference("myForm");
		var values = form.getValues();
		
		var grid = this.lookupReference("myGrid");
		var store = grid.getStore();
		
		store.load({
			params : values
		});
	},
	
	onSelectionChange : function(grid, selected) {
		console.log("Heyyy");
		var view = this.getView();
		var editBtn = view.down('[name="editBtn"]');
		var removeBtn = view.down('[name="removeBtn"]');
		var enableBtns = selected == undefined;
		editBtn.setDisabled(enableBtns);
		removeBtn.setDisabled(enableBtns);
	},
	
	onAddBtnClick : function() {
		this._openEditModal();
	},
	
	_getGridSelection : function() {
		var grid = this.lookupReference("myGrid");
		var record = grid.getSelectionModel().getSelection()[0];
		return record;
	},
	
	onEditBtnClick : function(btn) {
		this._openEditModal(this._getGridSelection());
	},
	onRowDblClick : function(grid, record, item) {
		this._openEditModal(record);
	},
	
	onRemoveBtnClick : function() {
		this.removeRecord(this._getGridSelection());
	},
	
	_openEditModal : function(record) {
		Ext.create('Ext.window.Window', {
			title : 'Crear Equipo',
			width: 400,
			items : {
				xtype : 'equipo.edicionEquipo',
				equipoRecord : record
			}
		}).show();
	},
	
	removeRecord : function(record) {
		alert("Remove : " + record.get('ciudad'));		
	}	

});