define([
    "underscore", 
    "backbone"
], function(_, Backbone) {
   
   "use strict";
   //Creating a View for <article class="movie"> element

    //DOM element (<article class="movie">) is being represented with this view
    var ViewMovie = Backbone.View.extend({
        tagName: 'article',
        
        className: 'movie',
        
        
        /*
        With templates, we easily can arrange many HTML nodes. However, at their core,
        templates are JavaScript functions that we call with values. As such, templates often
        live in a separate directory and need to be compiled into the client-side application
        during the build process. We will meet a number of strategies for this later when
        we discuss build processes.
        */
        template: "<h3><%=title%></h1>", //adding template
        //template: "<h1><a href='/#movies/<%=id%>'><%=title%></a></h1>", //adding template
        
        /**
            Note that there is a special syntax used to address the reference of a view to the DOM: this.$el . 
            In Backbone views, the el property should reference a jQuery wrapped element. 
            With this.$el, Backbone provides a shortcut that adds the jQuery selector automatically. 
            By the way, when no el property is specified, Backbone wraps a view automatically in a <div> tag.
        */    
        //render function actually transforms Backbone.View into DOM element
        //DOM node is filled with the movie title from the model 
        render: function() {
            //console.log("view render is being called");
            
            //We must “compile” the template. We do this with _.template(…). 
            //Once the template is compiled, we pass data with this.model.toJSON(). 
            //This compile step can also be cached in a property of a view.
            var tmpl = _.template(this.template); //use a template string and the template engine from Underscore.js
            
            // this.$el.html(this.model.get('title')); //when not using template
            //this.$el.html(tmpl(this.model.toJSON())); //when using template
            this.$el.html(tmpl(this.model.attributes));
            this.$el.toggleClass('selected', this.model.get('selected'));//same with or w/o template
            
            //returning the view object, this way it allows you to chain other method calls on render()
            return this;
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
            //console.log("Initialize function called on view!");
            //_.bindAll(this, render); //context binding
            
            /*
            TWO WAY DATA BINDING: 
            With Backbone.js plug-ins, it is also easily possible to bind models to
            updates from input DOM elements. This two-way data binding is often needed 
            when you build advanced forms but is not needed for this example right now. 
            If you need to support these use cases in your application, take a look at 
            the Backbone plug-ins Backbone.Stickit and Backbone.ModelBinder for examples.
            */
            //making this view a subscriber to changes of a model(i.e. publisher of events)
            //we are saying here to re-render this view again as soon as attribute 'selected' or 'title' is changed
            //i.e. when resetSelected method is called on each movie, it will be reloaded
            this.listenTo(this.model, 'change:selected : title', this.render); //data binding
        },
        
        //attaching event handler to this DOM element, i.e. View
        events: {
            'click': '_selectMovie' //_functionName denotes private method
        },
        
        _selectMovie: function(event) {
            event.preventDefault();
            console.log('event on ' + this.model.id);
            //console.log($(event.currentTarget).html());
            
            //calling private method to make this view/movie selected
            //this.model.collection.resetSelected();
            this.model.collection.selectByID(this.model.id);
            
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
            
            console.log("You clicked on " + this.model.get("title"));

            //commenting out rendering here because in initialize 
            //we are alreadly listening to model's change 
            // and rending view accordingly : this.listenTo(this.model, 'change:selected : title', this.render);
            //this.render(); //refresh the view on screen 
        }
    }); 
    
    return ViewMovie;
});

