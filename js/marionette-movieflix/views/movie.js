define([
    "marionette",
    "marionette-movieflix/views/detail"
], function(Marionette, MovieDetail) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        tagName: 'li', 
        template: _.template("<a href='/list-movies.html/movies/<%=id%>'><%=title%></a>"), 
        className: 'list-group-item', //this is a bootstrap css class
        
        /* used to show the order in which these method are called */
        //initialization
        initialize: function(){  
            //console.log('Movie ItemView: initialized >>> ' + this.model.get('title'));
            
            //listenting to model changes, and then reacting to it
            this.listenTo(this.model, 'change:selected', this._createChildView); //data binding/ event listener
        },
        
        onRender: function(){ 
            //console.log('Movie ItemView: onRender >>> ' + this.model.get('title')) 
            },
            
        onShow: function(){ 
            //console.log('Movie ItemView: onShow >>> ' + this.model.get('title')) 
            },
        
        //deals with creating and rendering child view, tight coupling
        _createChildView: function() {
            //marionette changes: rename this method toggleSelected, if child view is not created from here
            this.$el.toggleClass('active', this.model.get('selected'));
            
            // this.render(); //render this (parent) view
            
            // //intializing child view if selected
            // if(this.model.get("selected")) {
            //     this.child = new MovieDetail({
            //         model:this.model
            //     });                
            //     this.child.render(); //render child view               
            // }  
        },
        
        //DOM event listener: Listening to click event and updating model
        events: {
           'click': '_selectMovie'
        },
        
        _selectMovie: function(event) {
            //console.log('Movie ItemView: _selectMovie >>> '+ this.model.get('title'));
            event.preventDefault();
            this.model.collection.selectByID(this.model.id);
        }
    }); 
    
    return View;
});