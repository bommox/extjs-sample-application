Ext.define("App.view.component.CalculatorController", {
	extend: 'Ext.app.ViewController',
	alias: 'controller.component.calculator',
	
	onButtonClick : function(el, b,c, d) {
		var displayEl = this.getView().down('textfield');
		var oldValue = displayEl.getValue();
		var elValue = el.getText();
		var newValue = "";
		if (elValue == "c") {
			newValue = "";
		} else if (elValue == "=") {
			newValue = eval(oldValue.replace(/x/ig,"*"));
		} else {
			var sep = (/[\d|\.]/.test(elValue)) ? "" : " ";
			newValue = oldValue + sep + elValue + sep;					
		}		
		displayEl.setValue(newValue);
	},
	
	control : {
		button : {
			click : 'onButtonClick'
		}
	}
});