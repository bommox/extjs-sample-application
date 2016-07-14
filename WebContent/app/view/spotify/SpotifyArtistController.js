Ext.define('App.view.spotify.SpotifyArtistController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.spotify.spotifyArtist',

	onBeforeRender : function(view) {
		console.log("Before render " + view.artistData.id);
		/*
		var store = grid.getStore();
		store.load({
			params : values
		});
		*/
	}

});