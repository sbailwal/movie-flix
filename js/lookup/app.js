define([
	"marionette",
    "lookup/views/procedure/layout" 
], function (Marionette, LayoutView) {     
        "use strict";

        var App = Marionette.Application.extend({
            
            initialize: function(){
                if(Backbone.history){ 
                    Backbone.history.start(); 
                }                               
            }, 
            
            onStart: function () {
                this.layoutView = new LayoutView();
                this.layoutView.render();
            }          
        });
        return App;
});
