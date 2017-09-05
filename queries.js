var Listing = require('./ListingSchema');
var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.db.uri);


/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.findOne({'code': 'LBW'}, function(err, listing){
     if(err){
       throw err;
     }
     else{
       console.log("Find Library West: ")
       console.log(listing);
     }
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOneAndRemove({'code': 'CABL'}, function(err,listing){
     if(err){
       throw err;
     }
     else{
       console.log("Removed: ");
       console.log(listing);
     }
   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   //Listing.findOneandUpdate({'code': 'PHL'}, function(err, listing))
   Listing.findOneAndUpdate({'name': 'Phelps Laboratory'}, {$set: {'address': 'Gainesville, Fl'}},function(err, listing){
     if(err){
       throw err;
     }
     else{
       console.log("Update Phelps Memorial");
       console.log(listing);
     }
   });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, listing){
     if(err){
       throw err;
     }
     else{
       console.log("Retrieve all listings");
       console.log(listing);
     }
   })
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
