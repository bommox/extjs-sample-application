


Ext.application({
    name: 'App',
    
    appFolder : 'app',
    
    requires : ['App.view.MainViewport'],
    
    views: ['App.view.example.SampleForm01', 'App.view.example.Calculator'],
    models:[],
    stores: [],
    controllers: [],
    
    autoCreateViewport: 'App.view.MainViewport',
    
    launch: function() {
        var me = this;

        var task = new Ext.util.DelayedTask(function() {
            me.splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            
            me.splashscreen.next().fadeOut({
                duration: 1000,
                remove:true
            });
        });
        
        task.delay(2000);
		
       // Ext.require('widget.myPanel');
		
    },
    
    init: function () {
        var me = this;
        me.splashscreen = Ext.getBody().mask('Cargando aplicación...', 'splashscreen');
        
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    }
});