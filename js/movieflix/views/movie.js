define([
    "underscore", 
    "backbone",
    "movieflix/views/detail"
], function(_, Backbone, MovieDetail) {
   
   "use strict";

    var View = Backbone.View.extend({
        tagName: 'li', 
        className: 'list-group-item', //this is a bootstrap css class
        template: "<a href='/list-movies.html/movies/<%=id%>'><%=title%></a>", 
            
        //converts view to DOM element
        render: function() {
            var tmpl = _.template(this.template);
            
            this.$el.html(tmpl(this.model.attributes));
            this.$el.toggleClass('active', this.model.get('selected'));
            
            return this; //this way we chain other method calls on render()
        },
        
        //initialization
        initialize: function(){  
            this.listenTo(this.model, 'change:selected', this._createChildView); //data binding/ event listener
        },
        
        //deals with creating and rendering child view, tight coupling
        _createChildView: function() {
            this.render(); //render this (parent) view
            
            //intializing child view if selected
            if(this.model.get("selected")) {
                this.child = new MovieDetail({
                    model:this.model
                });                
                this.child.render(); //render child view               
            }
            
        },
        
        //DOM event listener
        events: {
           'click': '_selectMovie'
        },
        
        _selectMovie: function(event) {
            event.preventDefault();
            this.model.collection.selectByID(this.model.id);
        }
    }); 
    
    return View;
});

