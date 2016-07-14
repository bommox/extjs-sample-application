Ext.define("App.view.spotify.SpotifyBuscadorGrid", {
		extend : 'Ext.grid.Panel',
		alias : 'widget.spotify.spotifyGrid',
		store : {
			type : 'spotify.spotifySearchArtist'
		},
		columns : [{
			text : 'Imagen',
			xtype:'templatecolumn', 
			tpl:'<img src="{image}" style="max-height: 32px"/>'
		}, {
			text : 'Nombre',
			dataIndex : 'name',
			flex: 1
		}, {
			text : 'Seguidores',
			dataIndex : 'totalFollowers'
		}],
		tbar : [{
			text : 'Crear'
		}, {
			text : 'Editar',
			name : 'editBtn',
			disabled : true
		}, {
			text : 'Borrar',
			name : 'removeBtn',
			disabled : true
		}],
		listeners : {
			itemDblClick : 'onArtistDblClick'
		}
});