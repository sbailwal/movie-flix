define([
    "backbone", 
    "movieflix/views/movie"
], function(Backbone, MovieView) {
    
    "use strict";
   
    var ViewList = Backbone.View.extend({
        //Attaches and renders to html where elementById="movies", e.g. <ul class="list-group" id="movies">
        el: "#movies",
        
        // render: function(){
        // },
        
        initialize: function(){ 
            //takes this collection and creates an view (movieView) of each
            this.collection.map(function(movie) {
                var view = new MovieView({
                    model:movie
                });
                this.$el.append(view.render().el);
            }.bind(this));//bind is a must to render each row
            
            //select first movie by default
            if(this.collection.length > 0){
                this.collection.get(1).set({selected:true});       
            }
        }
    }); 
     return ViewList;
});