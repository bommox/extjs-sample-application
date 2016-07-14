Ext.define("App.view.SpotifyTab", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.spotifyTab',
	requires : ['App.view.spotify.SpotifyBuscador'],
	title : 'Spotify',
	bodyPadding : 10,
	items : [ {
		xtype : 'spotify.spotify'
	} ]
});