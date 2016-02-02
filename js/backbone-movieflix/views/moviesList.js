define([
    "backbone", 
    "backbone-movieflix/views/movie"
], function(Backbone, MovieView) {
    
    "use strict";
   
    var ViewList = Backbone.View.extend({
        //Attaches and renders to html where elementById="movies", e.g. <ul class="list-group" id="movies">
        el: "#movies",
        
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
            
            //listening to changes in collection            
            //this.collection.on("add", this._addNewMovie.bind(this));
            this.listenTo(this.collection, 'add', this._addNewMovie); //data binding/ event listener
        },
        
        //create new movieView and add it to list view
        _addNewMovie: function(){
            console.log("Listview listening to update in collection" ); 
            var view = new MovieView({model:this.collection.last()});
 
            // Make this selected on the UI
            this.collection.selectByID(view.model.id);
            
            this.$el.append(view.render().el); //render view + append it to current listView
            
            return this; //deleting this does not impact response. But may be we should do this for chaining?
        }
        
    }); 
     return ViewList;
});