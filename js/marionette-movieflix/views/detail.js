define([
    "backbone"
], function(Backbone) {
   
   "use strict";

    var View = Backbone.View.extend({
        el: '#details',
        template: "Name: <%=title%> <br>Year: <%=year%><p><%=description%></p>", 

        //convert to DOM element
        render: function() {
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.attributes));
            return this;
        },   
    }); 
    
    return View;
});