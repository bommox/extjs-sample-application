Ext.define("App.view.spotify.SpotifyBuscador", {
	extend : "Ext.panel.Panel",
	alias : "widget.spotify.spotify",
	requires : ['App.view.spotify.SpotifyBuscadorForm', 'App.view.spotify.SpotifyBuscadorGrid', 'App.view.spotify.SpotifyBuscadorController'],
	controller : 'spotify.spotifyBuscador',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items : [{
		xtype : 'spotify.spotifyForm',
			reference : 'sForm'
	},{
		xtype : 'spotify.spotifyGrid',
		flex : 1,
		reference : 'sGrid'
	}]
});