//this is the layout for "movie" region under the root

define([
    "marionette",
    "marionette-movieflix/collections/movies",
    "marionette-movieflix/views/moviesList",
], function(Marionette, Collection, MoviesListView) {
    
    "use strict";
    
    var MovieLayout = Marionette.LayoutView.extend({
        regions: {
            movieList: "#list-view"
            //movieDetail: "#detail-view",
            //addNew: "#add-view"    
        },
        
        initialize: function(){  
            console.log('MovieLayoutView: initialized >>> ');   
            
        },
        
        onRender: function() {
            console.log('Movie LayoutView: onRender');
            this.movieList.show(new MoviesListView({collection: new Collection(movies)}));
        },
        
        onBeforeShow: function () {
            console.log("MovieLayoutView: Before Show called");
			this.showChildView("movieList", this.moviesListView);
			//this.showChildView("user", new UserView(this.options));
		},
        
    });
    
    var movies = [
            {"id":1, 
                "title": "Funny Ninja", 
                "year": "2010", 
                "description": "<p>An epic tale of a boy who turns into a funny ninja. Limping his way through the adventurous valley in China, he encountes a brave master who would now change his life...</p>"},
            {"id":2, 
                "title": "Wimpy Kid", 
                "year":"2008", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>Est falli lobortis ea, te eam veri mundi vocent. In nostrud denique moderatius eos, molestie intellegebat ei vel. In enim rebum cum. At iusto altera veritus qui, liber vulputate sententiae ea sit. In fastidii quaestio sed, quis diceret epicuri at mei, eum quod noluisse no."},
            {"id":3, 
                "title": "Kung Fu Panda",
                "year":"2000", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id.</p><p>Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},                
            {"id":4,    
                "title": "Frozen",
                "year":"2011", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},
            {"id":5, 
                "title": "Snowman",
                "year":"1956", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset.<p> <p>Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id.</p> <p> Vide nobis in pro, melius platonem mnesarchum usu te. Nibh nominati sed cu. Id nec periculis laboramus, ex mei alii adipiscing.</p>"},
            {"id":6, 
                "title": "The Christmas Story",
                "year":"1945", 
                "description":"<p>Lorem ipsum dolor sit amet, vis et choro fuisset. </p><p>Magna aperiri conclusionemque per te. Ut ius possit eripuit ancillae, quo ignota possit ea, eam idque labore iisque id. Vide nobis in pro, melius platonem mnesarchum usu te.</p>"}
        ];
    
    return MovieLayout;
});
