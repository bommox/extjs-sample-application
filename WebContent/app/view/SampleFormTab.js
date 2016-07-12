Ext.define("App.view.SampleFormTab", {
	extend: 'Ext.panel.Panel',
    alias: 'widget.sampleFormTab',    
    title : 'Registro de usuario',
    margin : 10,
    border: true,
    bodyBorder: true,
    collapsible: true,
    
    layout: {    
    	type: 'vbox',
    	align: 'stretch'
	},
    
   	defaults: {
        padding: 10,
        msgTarget: 'under',
        xtype : 'textfield'
    },
    
    items : [
        {
            fieldLabel : 'Username',
            allowBlank : false
        },{
            fieldLabel : 'Email Addresss',
            allowBlank : false,
            vtype : 'email'
        },{
            inputType : 'password',
            fieldLabel : 'Password',
            name : 'password',
            id : 'pass',
            minLength: 6,
            onChange : function(newValue) {
                Ext.getCmp('passConfirm')
                	.setHidden(newValue.length ? false : true)
                	.setValue("")
                	.clearInvalid();                
            }
        },{
            inputType : 'password',
            id : 'passConfirm',
            initial : 'password',
            fieldLabel : 'Confirm password',
            hidden : true,
            validator : function(value) {
                return (value == Ext.getCmp("pass").getValue())
                	?  true
                	: "Los password deben coincidir";                
            }
        },{
            xtype : "checkboxfield",
            boxLabel : "He leído todas las <a href='#'>condiciones</a>"
        }
    ],
    bbar : [
        
        '->',
         {
            xtype : "button",
            text : 'Submit registration'
    	}
    ]
});