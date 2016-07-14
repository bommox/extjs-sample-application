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
		xtype : 'image',
		name : 'aImage'
	},{
		xtype : 'textfield',
		name : 'followersTotal',
		fieldLabel : 'Seguidores',
		name : 'aFollowers'
	},{
		xtype : 'grid',		
		flex : 1,
		reference : 'artistGrid',
		store : {
			type : 'spotify.spotifyArtistSong'
		},
		columns : [{
			text : 'Canción',
			dataIndex : 'name',
			flex : 1
		}]
	}],
	listeners : {
		afterrender : 'onAfterRender'
	}
});