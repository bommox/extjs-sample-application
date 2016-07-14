Ext.define('App.model.spotify.SpotifyArtistSong', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],

    proxy: Ext.create('Ext.data.proxy.Rest',{
        url: 'https://api.spotify.com/v1/artists',
        useDefaultXhrHeader : false,
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
    })
});