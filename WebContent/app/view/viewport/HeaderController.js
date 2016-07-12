Ext.define("App.view.viewport.HeaderController", {
	extend : 'Ext.app.ViewController',
	alias : 'controller.viewport.header',
	
	showWindow : function() {
		Ext.Msg.alert('Aviso', 'Vas a salir');
	},
	
	control : {
		'#salirBtn' : {
			click : 'showWindow'
		}
	}
});