define([
    "marionette",
    "backbone.radio"
], function(Marionette, Radio) {
   
   "use strict";

    var View = Marionette.ItemView.extend({
        channel: Radio.channel("global"),
        template: _.template("Name: <%=title%> <br>" + "Year: <%=year%><p><%=description%></p>"),
        initialize: function(){
            console.log("Movie ItemView: initialize >>>");
            this.channel.on("search", this._search.bind(this));
        },    
        _search: function() {
            console.log("In search: " + this.$el.length + " & model:" + this.model.get("title"));  
        },
            
        onBeforeRender: function(){ console.log('Movie ItemView: onBeforeRender >>> ' + this.model.get('title')) },            
        onRender: function(){ 
            console.log('Movie ItemView: onRender >>> ' + this.model.get('title'));
            this.channel.trigger("search"); 
        },
        onBeforeShow: function(){ console.log('Movie ItemView: onBeforeShow >>> ' + this.model.get('title')) },  
        onShow: function(){ console.log('Movie ItemView: onBefore >>> ' + this.model.get('title')) },    
        onClose: function(){ console.log('Movie ItemView: onClose >>> ' + this.model.get('title')) },    
        onBeforeDestroy: function(){ 
            console.log('Movie ItemView: onBeforeDestroy >>> ' + this.model.get('title'));
            
            //testing out with all these calls.. nothing seems to work! ugghhh
            // this.unbind();
            this.off();
            this.stopListening();
            this.undelegateEvents();
            this.remove();
        }, 
        onDestroy: function(){ 
            console.log('Movie ItemView: onDestroy >>> ' + this.model.get('title'));
            console.log(this.model.get('title') + " is a zombie view/model after this!");
        }
    }); 
    return View;
});
