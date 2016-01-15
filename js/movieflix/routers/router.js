//We will create two routes
//1. '/' --> triggers callback 'selectMovie'
//2. '/movies/:id' --> triggers callback 'showMain'


var Router = Backbone.Router.extend({
   routes: {
       '': 'showMain',
       'movies/:id': 'selectMovies'
   },
   
   selectMovies: function(id) {
       console.log("select movie from router called! Router working!!!!");
      
       this.movies.selectByID(id); //calling select on a specific movie, to highlight the selected one
       this.movieListView.render();
       this.navigate("/urlSetByRouter/movies/" + id); //router can update the url in the browser to whatever we set here
       
       $(document.body).append("select movie has been called ");
   },
   
   showMain: function(){
       console.log("main function from router called! Router working");
       this.movieListView.render(); //I commented out render call in ListView's constructor. Now our router will call that render
       $(document.body).append("Router's main function has been called ");
   },
   
   initialize: function(options) {
       //this listView is already prepopulated with movie sub-views, with data injected from the collection object containing movie model
       this.movieListView = moviesListView;//this is coming from app.js, it's a var created there
       this.movies = movies; //once again coming from the app.js. as that's where this router has been instantiated
    
       /*
       The following code is necessary to pass the router as reference into the views. 
       First, you must set a router reference on the MoviesList instance
       
       Not much idea about Navigating, hence just commenting it out. Will do it later
       */
      //_.extend(this.movieListView, {router: this});
   }
});