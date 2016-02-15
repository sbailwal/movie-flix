//this is the root level layout view attached to application

define([
    "marionette"
], function(Marionette) {
    
    "use strict";
    
    var Layout = Marionette.LayoutView.extend({
        el: "#movieFlixApp",
        template: false,
        regions: {
            movieListRegion: "#region-movie-list",  //"movieListView: "#movies" or ul.list-group"
            movieDetailRegion: "#region-movie-detail",
            movieAddRegion: "#region-add-form" //"form.add-movie-form"            
            },
                        
        initialize: function(){  
            console.log('RootLayoutView: initialized >>> ');
        },
        
        onBeforeRender: function() {
            console.log('RootLayoutView: onBeforeRender');
            //this.movieView.show(new MovieLayout());    
        },

        onRender: function() {
            console.log('RootLayoutView: onRender');
            // this.movieView.show(new MovieLayout());    
        },
            
        onBeforeShow: function () {
            console.log("Main LayoutView: Before Show called");
			//this.showChildView("movieListRegion", new MovieLayout(this.options));
			//this.showChildView("movieDetailRegion", new UserView(this.options));
		},
        
        onShow: function() {
            console.log("Main LayoutView: onShow called");
            //this.getRegion('movieListRegion').show(new notifyView());
        }
    });
    
    return Layout;
});
