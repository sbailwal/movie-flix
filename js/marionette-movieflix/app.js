define([
	"marionette",
    "backbone.radio",    
    "marionette-movieflix/views/layout" 
], function (Marionette, Radio, RootLayoutView) {     
        "use strict";

        var App = Marionette.Application.extend({
            channel: Radio.channel("global"),
            
            initialize: function(){
                // console.log("App Initialization");    
                // handle UI events
                // this.channel.on("add-movie", this._onAddMovie.bind(this));
                // this.channel.on("display-detail",  this._displayDetailView.bind(this));
            }, 
            
            onStart: function (options) {
                console.log('App: onstart');
                
                this.rootView = new RootLayoutView();
                this.rootView.render();
                   
                //Not using router as of now
                // new Router({movies:movies});        
                // if(Backbone.history){ Backbone.history.start(); }      
            }          
        });
        return App;
});
