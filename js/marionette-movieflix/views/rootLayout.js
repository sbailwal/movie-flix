//this is the root level layout view attached to application

define([
    "marionette",
    "marionette-movieflix/views/movieLayout"
], function(Marionette, MovieLayout) {
    
    "use strict";
    
    var Layout = Marionette.LayoutView.extend({
        el: "#movieFlixApp",
        template: false,
        regions: {
            movie: "#region-movie",
            },
                        
        initialize: function(){  
            console.log('RootLayoutView: initialized >>>');            
        },
        
        onBeforeRender: function() {
            console.log('RootLayoutView: onBeforeRender');
            this.movie.show(new MovieLayout());
        }
    });
    return Layout;
});
