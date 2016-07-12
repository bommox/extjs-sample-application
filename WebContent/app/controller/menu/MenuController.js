Ext.define("App.controller.menu.MenuController", {
	extend : 'Ext.app.Controller',

	control : {
		'[mView]' : {
			click : 'onMenuItemClick'
		}
	},

	onMenuItemClick : function(btn) {
		var mainPanel = Ext.ComponentQuery.query("#main_content")[0];
		var openedOption = mainPanel.down(btn.mView);
		if (openedOption) {
			mainPanel.setActiveTab(openedOption);
		} else {			
			var myPanel = Ext.widget(btn.mView);
			myPanel.setTitle("Mi Calculadora");
			mainPanel.add(myPanel);
			mainPanel.setActiveTab(myPanel);
		}
	}
});