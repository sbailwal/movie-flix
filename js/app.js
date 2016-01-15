// define([
// 	"backbone"
// ], function (Backbone) {

// 	"use strict";

	// var App = Backbone.Application.extend({
	// 	initialize: function () {
	// 		console.log(this);
	// 	}
	// });


// var App = Backbone.Application.extend({
//     initialize: function(){
//         console.log("creating application now!");
//         console.log(this);
//     }    
// });

//creating view and list view
//var movie = new Model({title:'A great movie'}); //create a movie
//var view = new View({model:movie}); //create a view with movie model

//building collection of movies using json
//var data = ('../mock-data/movies.json');
var movies = new CollectionMovie([{"id":1, "title": "Funny Ninja"},
    {"id":2, "title": "Wimpy Kid"},
    {"id":3, "title": "Mystery Brain"},
    {"id":4, "title": "Frozen"},
    {"id":5, "title": "Snowman"},
    {"id":6, "title": "The Christmas Story"}] );


//as we instantiate the listview, it is rendered to the brower
//because in the listview constructor I have called render method
var moviesListView = new ViewMoviesList({collection:movies}); //this creates multiple movie view and puts it in movieListView


/////////////////////////////////
//ROUTER
//////////////////////////////

//To have router in action, 
//now we have to tell backbone to monitor events from the url changes
//Unless we do these two steps (1) instantiate router (2)enable backbone history, the view will not render 
$(document).ready(function() {
    var router = new Router({el: $('#movies')}); //instantiating router //find out what is the input el param. Changing it does not have any impact on output???
    
    //Monitoring route changes happen by calling start() on the history API
    Backbone.history.start({ 
        
        //pushState: false, // if we prefer to work with hashes in the URL
        pushState: true, //newer browsers support pushState() from the HTML5 history API. It is possible to keep semantic URLS: http://xyz.com/moview/the-panda
        
        //We set the root property to /, because the Backbone.js application will be the main application.
        root: '/' //If we wanted the Backbone application only active for browsing search results, we might change the root to /search
    });
});

//above stuff can also be done like this.. 
//new Router;
//Backbone.history.start();

