define([
    "marionette",
    "backbone.radio"
], function(Marionette, Radio) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        channel: Radio.channel("global"),
        tagName: 'li', 
        className: 'list-group-item', //this is a bootstrap css class
        template: _.template("<a href='/movies/<%=id%>'><%=title%></a><span class=\"badge\"><i class=\"delete fa fa-fw fa-trash\"></i></span>"), 
        events: {
           'click': '_selectMovie',
           "click span.badge": "_deleteMovie"
        },
        
        initialize: function(){  
            this.listenTo(this.model, 'change:selected', this._setSelected); //data binding/ event listener
        },
        
        _setSelected: function() {
            this.$el.toggleClass('active', this.model.get('selected'));
            
            if(this.model.get("selected")) {
                this.channel.trigger("display-detail", {"model":this.model});
            }    
        },
                
        _selectMovie: function(event) {
            event.preventDefault(); 
            
            //adding this if condition as when i delete a movie, it also triggers "click" event and calls this function for the deleted model
            if(this.model.collection) 
                this.model.collection.selectByID(this.model.id);
        },
                
        _deleteMovie: function(event) {
           this.channel.trigger("delete-movie", {"model":this.model, "collection": this.model.collection});   
        }                
    });   
    return View;
});
