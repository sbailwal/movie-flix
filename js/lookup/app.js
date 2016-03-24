// define([
// 	"marionette",
//     "backbone.radio",
//     "lookup/views/layout",
//     "lookup/collections/diagnosis",
// 	"lookup/views/diagnosis/form",
//     "lookup/views/diagnosis/result",
// ], function(Marionette, Radio, LayoutView, Collection, FormView, ResultView) {
//     "use strict";
    
//     var App = Marionette.Application.extend({    
//         channel: Radio.channel("global"),    
//         initialize: function(){
//             this.channel.on("search", this._search.bind(this));
            
//             if(Backbone.history){ 
//                 Backbone.history.start(); 
//             }                               
//         }, 
//         onStart: function () {
//             this.layoutView = new LayoutView();
//             //this.layoutView.render();
//look into behaviour: aop
//views can be enhanced with behavior
//             this.layoutView.render({"form":new FormView()});
//         },
        
//         _search: function(options) {
//             this.$(".form-control").val("");
//             console.log("User entered data: " + JSON.stringify(options.data));

//             //Not the best way but just to test it works
//             this.collection = new Collection();
//             this.collection.fetch();

//             this.showChildView("result", new ResultView({
//                 collection: this.collection
//             }));

//         }          
//     });
//         return App;
// });


define([
	"marionette",
    "lookup/views/ndc/layout" 
], function (Marionette, LayoutView) {     
    "use strict";

    var App = Marionette.Application.extend({
        
        initialize: function(){
            if(Backbone.history){ 
                Backbone.history.start(); 
            }                               
        }, 
        
        onStart: function () {
  
            this.layoutView = new LayoutView();
            this.layoutView.render();
        }          
    });
    return App;
});
