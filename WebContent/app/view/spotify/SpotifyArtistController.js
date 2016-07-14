Ext.define('App.view.spotify.SpotifyArtistController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.spotify.spotifyArtist',

	onAfterRender : function(view) {
		console.log("Before render " + view.artistData.id);
		
		view.down('[name="aImage"]').setSrc(view.artistData.image);
		view.down('[name="aFollowers"]').setValue(view.artistData.followersTotal);
		
		
		var grid = this.lookupReference("artistGrid");
		var store = grid.getStore();
		store.getProxy().setUrl(store.getProxy().getUrl() + "/" + view.artistData.id + "/top-tracks?country=ES");
		store.load();
	}

});