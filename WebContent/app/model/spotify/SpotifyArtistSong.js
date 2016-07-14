Ext.define('App.model.spotify.SpotifyArtistSong', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],

    proxy: {
        url: 'https://api.spotify.com/v1/artists',
        useDefaultXhrHeader : false,
        type : 'rest',
        reader : {
        	type : 'json',
        	rootProperty : 'tracks',
        	transform : {
        		fn : function(data) {
        			var modData = data;
        			return modData;
        		}
        	}
        }
    }
});