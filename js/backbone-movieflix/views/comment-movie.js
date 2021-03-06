define([
    "underscore", 
    "backbone",
    "movieflix/views/detail"
], function(_, Backbone, MovieDetail) {
   
   "use strict";

    var View = Backbone.View.extend({
        tagName: 'li', 
        className: 'list-group-item', //this is a bootstrap css class
        
        /*
        With templates, we easily can arrange many HTML nodes. However, at their core,
        templates are JavaScript functions that we call with values. As such, templates often
        live in a separate directory and need to be compiled into the client-side application
        during the build process. We will meet a number of strategies for this later when
        we discuss build processes.
        */
        //template: "<h3><%=title%></h1>", //adding template
        //template: "<a href='/#movies/<%=id%>'><%=title%></a>", //adding template
        // template: "<td><a href='/#movies/<%=id%>'><%=title%></a></td>", //adding template
        template: "<a href='/#movies/<%=id%>'><%=title%></a>", //adding template//<li class="list-group-item">
        /**
            Note that there is a special syntax used to address the reference of a view to the DOM: this.$el . 
            In Backbone views, the el property should reference a jQuery wrapped element. 
            With this.$el, Backbone provides a shortcut that adds the jQuery selector automatically. 
            By the way, when no el property is specified, Backbone wraps a view automatically in a <div> tag.
        */    
        
        //render function actually transforms Backbone.View into DOM element
        render: function() {
            console.log("render of movie view");
            //We must “compile” the template. We do this with _.template(…). 
            //Once the template is compiled, we pass data with this.model.toJSON(). 
            //This compile step can also be cached in a property of a view.
            var tmpl = _.template(this.template); //use a template string and the template engine from Underscore.js
            
            //this.$el.html(tmpl(this.model.toJSON())); //when using template
            this.$el.html(tmpl(this.model.attributes));
            this.$el.toggleClass('active', this.model.get('selected'));
            
            return this; //returning the view object, this way it allows to chain other method calls on render()
        },
        
        /**
            Note that “data binding” is different from “context binding” of a view. Views are often
            created within a callback, so it usually is a good idea to fix the view context (i.e., the this
            reference) explicitly to the view scope. One option is using Underscore.js bindAll in
            the view constructor:
            initialize: function() {
            _.bindAll(this, "render");
            }
            By binding the this context of a view to render, all properties of the object will be
            accessible even when a view context would have changed to a different callback scope.
        */
        //We will pass our Model/Movie object while calling this constructor
        initialize: function(){  
            console.log("movie view initialized");
            this.listenTo(this.model, 'change:selected', this.createChildView); //data binding
        },
        
        createChildView: function(event) {
            if(this.model.get("selected")) {
                //console.log("this is event attribute = " + event.attributes);  
                console.log("child view being initialized");
                
                //intializing child view (detail view)
                this.child = new MovieDetail({
                    model:this.model
                });
                
                //this.child.$el.html(this.child.template());
                this.child.render(); //.appendTo(this.child.$('.container-placeholder'));                
            }
            
            this.render();
        },
        
        //attaching event handler to this DOM element, i.e. View
        events: {
           'click': '_selectMovie' //_functionName denotes private method
        },
        
        _selectMovie: function(event) {
            event.preventDefault();
            
            this.model.collection.selectByID(this.model.id);
            console.log("You clicked on " + this.model.get("title"));
            
                        
            //commenting out all router.navigate stuff.. not confident on it and see no use of it as of now
            //it needs code changes in initialization for views and router 
            //this.router.navigate("/movies/" + this.model.id);
            /*
                By passing {trigger: true}, the code in the router is executed after the URL is updated. 
                Like this, you could share the same code between router and view
            */
            //this.router.navigate("movies/" + this.model.id, {trigger: true});         
            /*
                say you want to keep the application state
                changes private from the browser history. This is interesting, for example, if a user
                browses tens or hundreds of movies, as she should be able to go back to the beginning
                with one click on the browser Back button. This interaction can be implemented with
                the replace: true option
            */
            //this.router.navigate("movies/" + this.model.id, {trigger: true, replace: true});
 
        }
    }); 
    
    return View;
});

