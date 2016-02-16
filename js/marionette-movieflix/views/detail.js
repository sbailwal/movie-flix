define([
    "marionette"
], function(Marionette) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        template: _.template("Name: <%=title%> <br>" + "Year: <%=year%><p><%=description%></p>"), 
        
        // initialize: function(){},         
        // onRender: function(){ console.log('Movie ItemView: onRender >>> ' + this.model.get('title')) },    
        // onShow: function(){ console.log('Movie ItemView: onShow >>> ' + this.model.get('title')) },     
    }); 
    return View;
});
