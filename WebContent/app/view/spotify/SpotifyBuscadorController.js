Ext.define('App.view.spotify.SpotifyBuscadorController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.spotify.spotifyBuscador',
	requires : ['App.view.spotify.SpotifyArtist'],

	doSearch : function() {
		var form = this.lookupReference("sForm");
		var values = form.getValues();		
		var grid = this.lookupReference("sGrid");
		var store = grid.getStore();
		store.load({
			params : values
		});
	},
	
	onArtistDblClick : function(a, item) {
		console.log(item.id);
		Ext.create('Ext.window.Window', {
			title : item.getData()['name'],
			width: 600,
			modal: true,
			items : {
				xtype : 'spotify.spotifyArtist',
				artistData : item.getData()
			}
		}).show();
	}
});