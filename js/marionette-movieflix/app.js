define([
	"marionette",
    "marionette-movieflix/views/rootLayout" 
], function (Marionette, RootLayoutView) {     
        "use strict";

        var App = Marionette.Application.extend({
            
            initialize: function(){
                if(Backbone.history){ 
                    Backbone.history.start(); 
                }                               
            }, 
            
            onStart: function () {
                this.rootView = new RootLayoutView();
                this.rootView.render();
            }          
        });
        return App;
});
