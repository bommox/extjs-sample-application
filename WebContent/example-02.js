var example02 = {
	    xtype : 'panel',
	    title : 'Complete Check Out',
	    width: 600,
	    margin : 10,
	    border: true,
	    bodyBorder: true,
	    collapsible: true,
	    
	    layout: {    
	    	type: 'vbox',
	    	align: 'stretcht'
		},
	    
	   	defaults: {
	        padding: 10,
	        msgTarget: 'under',
	        xtype : 'fieldset'
	    },
	    
	    items : [
	        {
	            title : 'Your contact information',
	            items : [
	                     {
	                    	 xtype : 'fieldcontainer',
	                    	 layout : {
	                    		 type : 'hbox'
	                    		 
	                    	 },
	                    	 items : [
								{
								    xtype : 'textfield',
									fieldLabel : 'Nombre',
								    placeHolder : 'Name',
								    allowBlank : false,
								    flex : 2
								},
								{
								    xtype : 'textfield',
								    placeHolder : 'Surname',
								    allowBlank : false,
								    vtype : 'email',
								    flex : 3
								} 
	                    	 ]
	                     },
	                     {
							    xtype : 'textfield',
								fieldLabel : 'Email Addresss',
							    allowBlank : false,
							    vtype : 'email'
							} 
	            ]
	        }
	    ],
	    bbar : [
	        
	        '->',
	         {
	            xtype : "button",
	            text : 'Submit registration'
	    	}
	    ]
	};