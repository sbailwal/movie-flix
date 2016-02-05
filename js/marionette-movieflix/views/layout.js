//this is the root level layout view attached to application

define([
    "marionette",
    "marionette-movieflix/views/movie-layout",
    "marionette-movieflix/views/user-view"
], function(Marionette, MovieLayout, UserView) {
    
    "use strict";
    
    var Layout = Marionette.LayoutView.extend({
        el: "#app",
        template: false,
        regions: {
            movieView: "#movie-view",
            userView: "#user-view"    
        },
        
        initialize: function(){  
            console.log('RootLayoutView: initialized >>> ');
        },
        //onBeforeRender
        onRender: function() {
            console.log('RootLayoutView: onRender');
            this.movieView.show(new MovieLayout());    
            console.log('RootLayoutView: Render done');        
        },
            
        onBeforeShow: function () {
            console.log("Main LayoutView: Before Show called");
			this.showChildView("movieView", new MovieLayout(this.options));
			this.showChildView("userView", new UserView(this.options));
		}
    });
    
    return Layout;
});