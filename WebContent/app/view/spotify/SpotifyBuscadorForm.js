Ext.define("App.view.spotify.SpotifyBuscadorForm", {
	extend : "Ext.form.Panel",
	alias : "widget.spotify.spotifyForm",
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	padding : 5,
	items : [{
		xtype : 'combobox',
		//name : 'type',
		hidden : true,
		flex : 1,
		fieldLabel : 'Tipo de búsqueda',
		displayField : 'label',
		valueField : 'key',
		allowEmpty : false,
		store : Ext.create('Ext.data.Store', {
			fields : ['key', 'label'],			
			data : [{
				key : 'artist',
				label : 'Artista'
			},{
				key : 'track',
				label : 'Canción'
			},{
				key : 'album',
				label : 'Album'
			},{
				key : 'playlist',
				label : 'Playlist'
			}]
		})
	}, {
		xtype : 'hiddenfield',
		name : 'type',
		value : 'artist'
	}, {
		xtype : 'textfield',
		name : 'q',
		flex : 2,
		fieldLabel : 'Campo de búsqueda:'
	}],
	buttons : [{
		text: 'Buscar',
		bindForm : true,
		listeners : {
			click : 'doSearch'
		}
	}]
});