define([
    "backbone", 
    "movieflix/views/movie"
], function(Backbone, MovieView) {
    
    "use strict";
   
    var ViewList = Backbone.View.extend({
        tagname: 'section',
        el: "#movies",
        
        render: function(){
            //console.log("List View render being called");
            
            //the collection is the one (movieList) passed in constructor of ViewList
            //this line takes this collection and creates an view (movieView) of each      
            this.collection.map(function(movie) {
                var view = new MovieView({
                    model:movie
                });
                this.$el.append(view.render().el);
            }.bind(this));//bind is a must here to render each row

            return this;     
        },
        
            //adding initialize function 
        initialize: function(){
        //this.render(); //cause we don't have to wait for fetching data, doing it manually in this example
        //console.log("List view is being initialized")
        }
    }); 
     return ViewList;
});