define([
    "marionette", 
    "marionette-movieflix/views/movie"
], function(Marionette, MovieView) {
    
    "use strict";
   
    var ViewList = Marionette.CollectionView.extend({     
        tagName: 'ul', 
        className: 'list-group', //this is a bootstrap css class
        childView: MovieView,
        
        //render called after all child views are initialized and rendered
        onRender: function(){      
            //select first movie by default
            if(this.collection.length > 0){
                this.collection.get(1).set({selected:true});       
            }
        }
    }); 
     return ViewList;
});
