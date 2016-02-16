define([
    "marionette",
    "backbone.radio"
], function(Marionette, Radio) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        channel: Radio.channel("global"),
        tagName: 'li', 
        className: 'list-group-item', //this is a bootstrap css class
        template: _.template("<a href='/list-movies.html/movies/<%=id%>'><%=title%></a>"), 
        events: {
           'click': '_selectMovie'
        },
        
        initialize: function(){  
            this.listenTo(this.model, 'change:selected', this._setSelected); //data binding/ event listener
        },
                
        _selectMovie: function(event) {
            event.preventDefault();
            this.model.collection.selectByID(this.model.id);
        },
        
        _setSelected: function() {
            this.$el.toggleClass('active', this.model.get('selected'));
            
            if(this.model.get("selected")) {
                this.channel.trigger("display-detail", {"model":this.model});
            }    
        }
    });   
    return View;
});
