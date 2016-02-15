define([
    "marionette", 
    "marionette-movieflix/views/movie"
], function(Marionette, MovieView) {
    
    "use strict";
   
    var ViewList = Marionette.CollectionView.extend({     
        tagName: 'ul', 
        className: 'list-group', //this is a bootstrap css class
        childView: MovieView,
        
        initialize: function(){
            console.log('Movie CollectionView: initialize >>> ' + this.collection.length);
        },
        
        //render called after all child views are initialized and rendered
        onRender: function(){      
            console.log('Movie CollectionView: onRender >>> ' + this.collection.length);       
            //select first movie by default
            if(this.collection.length > 0){
                this.collection.get(1).set({selected:true});       
            }
        },
            
        onShow: function(){ 
            console.log('Movie CollectionView: onShow >>> ' + this.collection.length); 
        }
    }); 
     return ViewList;
});
