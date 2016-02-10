/**
 * Purpose is to instantiate "Router" and pass an array(static data) to it.
 */

define([
	"marionette",
    "backbone.radio",
    "marionette-movieflix/collections/movies",
    "marionette-movieflix/views/moviesList",
    "marionette-movieflix/views/addMovie",
    "marionette-movieflix/views/detail" 
    //"marionette-movieflix/views/layout" //RootLayoutView
], function (Marionette, Radio, Collection, MoviesListView, AddFormView, DetailView) {     
        "use strict";

        //creating a marionette application 
        var App = Marionette.Application.extend({
            channel: Radio.channel("global"),
            regions: {
                movieRegion: "#movies"  //"movieListView: "#movies" or ul.list-group"
                }, 
        
            initialize: function(){
                console.log("App Initialization");    

                // handle UI events
                this.channel.on("add-movie", this._onAddMovie.bind(this));
                this.channel.on("display-detail",  this._displayDetailView.bind(this));
                //$(document).on("add-movie", this._onAddMovie.bind(this));           
                //$(document).on("display-detail", this._displayDetailView.bind(this));   
                         
                //static data      
                this.movies =[
                    {"title": "Funny Ninja", 
                        "year": "2010", 
                        "description": "<p>An epic tale of a boy who turns into a funny ninja. Limping his way through the adventurous valley in China, he encountes a brave master who would now change his life...</p>"},
                    {"title": "Wimpy Kid", 
                        "year":"2008", 
                        "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>Est falli lobortis ea, te eam veri mundi vocent. In nostrud denique moderatius eos, molestie intellegebat ei vel. In enim rebum cum. At iusto altera veritus qui, liber vulputate sententiae ea sit. In fastidii quaestio sed, quis diceret epicuri at mei, eum quod noluisse no."},
                    {"title": "Kung Fu Panda",
                        "year":"2000", 
                        "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id.</p><p>Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},                
                    {"title": "Frozen",
                        "year":"2011", 
                        "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},
                    {"title": "Snowman",
                        "year":"1956", 
                        "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset.<p> <p>Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id.</p> <p> Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},
                    {"title": "The Christmas Story",
                        "year":"1945", 
                        "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. </p><p>Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te.</p>"}
                ];
                
                //2. instantiate collection
                this.moviesCollection = new Collection(this.movies);
                
                console.log("App Initialization: collection initialized");
            }, //end initialize
            
            onBeforeStart: function (options) {
			     // nothing to do.
            },
            
            onStart: function (options) {
                //instantiate add form view
                new AddFormView();

                //instantiate list view and show in the region
                this.movieRegion.show(new MoviesListView({
                    collection: this.moviesCollection, 
                })); 
                
                //Not using router as of now
                // new Router({movies:movies});        
                // if(Backbone.history){ Backbone.history.start(); }      

            },
            
            _onAddMovie: function(data) { //e = event, data = passed from the caller, i.e. html-element.js in our case
                $(".form-control").val("");

                this.moviesCollection.add(data); //id attribute handled by the model
                
                //set newly added movie as selected on UI
                this.moviesCollection.selectByID(this.moviesCollection.last().get("id")); 
            },
            
            _displayDetailView: function(data) {
                console.log("Displaying detail view");
                
                var detailView = new DetailView({
                    model:data
                });       
                               
                detailView.render(); //render child view      
            }            
        });
        return App;
});
