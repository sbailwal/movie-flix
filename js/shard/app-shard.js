define([
	"marionette",
    "backbone.radio",    
    "shard/views/form"
], function (Marionette, Radio, Form) {     
        "use strict";

        //model
        var Model = Backbone.Model.extend({
            defaults: {
                id: "",
                desc: "",
                default:""
            }
        });
        
        //collection
        var Collection = Backbone.Collection.extend({
            model: Model,
            url: '/../mock-data/shard.json',
            
            initialize: function(){         
                this.on('sync', this.finishSync);
            },              
        });
        
        //Option View
        var OptionView = Marionette.ItemView.extend({
            tagName: 'option', 
            className: 'shardOption', 
            template: _.template("<%= description %>"),
            constructor: function(options) {
                this.attributes = {
                    value: options.model.id
                };
                Marionette.ItemView.prototype.constructor.apply(this,arguments);
            }
        });
           
        //Select View
        var SelectView = Marionette.CollectionView.extend({
            tagName: 'select', 
            className: 'form-control shard-select', 
            childView: OptionView, 
            constructor: function(options) {
                this.attributes = {
                    name: "shardId"
                };
                Marionette.CollectionView.prototype.constructor.apply(this,arguments);
            }
        })
        
        //RootLayoutView
        var RootLayoutView = Marionette.LayoutView.extend({
            el: "#app",
            template: false,
            regions: {
                selectRegion: "#region-select",
            },
                
            initialize: function(){    
                this.collection = new Collection();
                this.collection.fetch();    
            },
            
            onBeforeRender: function(){
                console.log("rendering " + this.collection.length);
                this.selectRegion.show(new SelectView({
                    collection: this.collection
                })); 
                
                new Form(); //not attaching this to any region. Just want to handle the submit
            }    
        });
        
        //App    
        var App = Marionette.Application.extend({
            channel: Radio.channel("global"),
            initialize: function(){
                this.channel.on("submit", this.onSubmit.bind(this));               
                if(Backbone.history){ Backbone.history.start(); } 
            }, 
            
            onStart: function () {
                console.log('App: onstart');
                     
               this.rootView = new RootLayoutView();
               this.rootView.render();
                console.log('App: onstart');     
            },
            
            onSubmit: function (model) {
               if(model.shardId == 1)
                    window.location.href = "/index.html";
               else if(model.shardId == 2)
                    window.location.href = "/js/backbone-movieflix/list-movies.html";
               else if(model.shardId == 3)
                    window.location.href = "/js/marionette-movieflix/list-movies.html";
                               
			return this
		}         
        });
        return App;
});
