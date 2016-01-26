define([
    "backbone", 
    "movieflix/views/movie"
], function(Backbone, MovieView) {
    
    "use strict";
   
    var ViewList = Backbone.View.extend({
        //Attaches and renders to html where elementById="movies", e.g. <ul class="list-group" id="movies">
        el: "#movies",
        
        render: function(){
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
        
        //initialize: function(){ }
    }); 
     return ViewList;
});