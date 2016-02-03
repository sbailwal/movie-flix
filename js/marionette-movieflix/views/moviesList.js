define([
    "marionette", 
    "marionette-movieflix/views/movie"
], function(Marionette, MovieView) {
    
    "use strict";
   
    var ViewList = Marionette.CollectionView.extend({
         //tagName: 'ul', 
        //className: 'list-group', //this is a bootstrap css class

        //Attaches and renders to html where elementById="movies", e.g. <ul class="list-group" id="movies">
        el: "#movies",        
        childView: MovieView,
        
        initialize: function(){ 
            //SB Note: Not needed anymore: CollectionView automatically reacts to collection changes
            // by creating corresponding view and appending it to this CollectionView
            
            //listening to changes in collection, creating view and appending it to the list view    
            //this.listenTo(this.collection.model, 'add', this._addNewMovie);
        },
        
        //reder called after all child views are initialized and rendered
        onRender: function(){             
            //select first movie by default
            if(this.collection.length > 0){
                this.collection.get(1).set({selected:true});       
            }
        },
            
        onShow: function(){ 
            console.log('Movie CollectionView: onShow >>> ') 
        }
    }); 
     return ViewList;
});