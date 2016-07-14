Ext.define('App.model.spotify.SpotifySearchArtist', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'uri', 'image', 'totalFollowers'],

    proxy: Ext.create('Ext.data.proxy.Rest',{
        url: 'https://api.spotify.com/v1/search',
        useDefaultXhrHeader : false,
        reader : {
        	type : 'json',
        	rootProperty : 'artists.items',
        	transform : {
        		fn : function(data) {
        			var modData = data.artists.items.map(function(item) {
    				   item.totalFollowers = item.followers.total;
    				   item.image = item.images.length > 0 ? item.images[item.images.length -1].url : '';
    				   return item; 
    				});
        			return modData;
        		}
        	}
        }
    })
});