define([
    "marionette"
], function(Marionette) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        tagName: 'li', 
        template: _.template("<a href='/list-movies.html/movies/<%=id%>'><%=title%></a>"), 
        className: 'list-group-item', //this is a bootstrap css class
        
        //initialization
        initialize: function(){  
            //console.log('Movie ItemView: initialized >>> ' + this.model.get('title'));
            
            //listenting to model changes, and then reacting to it
            this.listenTo(this.model, 'change:selected', this._setSelected); //data binding/ event listener
        },
        
        onRender: function(){ 
            //console.log('Movie ItemView: onRender >>> ' + this.model.get('title')) 
        },
            
        onShow: function(){ 
            //console.log('Movie ItemView: onShow >>> ' + this.model.get('title')) 
        },
        
        events: {
           'click': '_selectMovie'
        },
        
        _selectMovie: function(event) {
            event.preventDefault();
            this.model.collection.selectByID(this.model.id);
        },
        
        _setSelected: function() {
            this.$el.toggleClass('active', this.model.get('selected'));
            
            //triggering to display detail view
            if(this.model.get("selected")) {
                $(document).trigger("display-detail", this.model);
            }    
        }

    }); 
    
    return View;
});