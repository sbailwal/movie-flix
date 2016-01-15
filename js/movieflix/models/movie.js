// //not using define here, just to see if there is an error thrown out

// //This is Backbone's model extended to give us Movie
// define([
//     "backbone"
// ], function(Backbone) {
//     "use strict";
//     var Model = Backbone.Model.extend({
//         defaults: {
//             title: "default",
//             year: 0,
//             description: "empty",
//             selected: false
//         },
        
//         initialize: function(){
//             console.log("Initialize function called on movie!");
//         }
//     });
    
//     return Model;  
// });


/*
Notes:

    When using above "define" format to code this, it did not work saying "define not found" on 
    browser console when I tried to create a movie instance "movie = new Model();"
*/
 var ModelMovie = Backbone.Model.extend({
        defaults: {
            title: "default",
            year: 0,
            description: "empty",
            selected: false
        },
        
        initialize: function(){
            //console.log("Initialize function called on movie!");
        }
    });