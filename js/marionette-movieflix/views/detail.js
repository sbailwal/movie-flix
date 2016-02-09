define([
    "marionette"
], function(Marionette) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        el: '#details',
        template: _.template("Name: <%=title%> <br>" + "Year: <%=year%><p><%=description%></p>"), 
       
         initialize: function(){  
            //console.log('Movie ItemView: initialized >>> ' + this.model.get('title'));
            
            //listenting to model changes, and then reacting to it
            this.listenTo(this.model, 'change:selected', this._createChildView); //data binding/ event listener
        },
        
        onRender: function(){ 
            console.log('Movie ItemView: onRender >>> ' + this.model.get('title')) 
            },
            
        onShow: function(){ 
            console.log('Movie ItemView: onShow >>> ' + this.model.get('title')) 
            },     
    }); 
    
    return View;
});