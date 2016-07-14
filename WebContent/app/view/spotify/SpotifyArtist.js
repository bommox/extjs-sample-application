Ext.define("App.view.spotify.SpotifyArtist", {
	alias : 'widget.spotify.spotifyArtist',
	requires : ['App.view.spotify.SpotifyArtistController'],
	controller : 'spotify.spotifyArtist',
	extend : 'Ext.panel.Panel',
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
	listeners : {
		beforerender : 'onBeforeRender'
	}
});