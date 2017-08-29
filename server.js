var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format if a GET request
    is sent to the '/listings' path. Otherwise, it should send a 404 error.
    HINT: explore the request object and its properties
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */

   if(parsedUrl.pathname === "/listings"){
    response.writeHead(200, {
      'Content-Length': Buffer.byteLength(listingData),
      'Content-Type': 'text/plain'});
      response.write(listingData);
      response.end(" ");
   }
   else{
     response.writeHead(404, {'Content-Type': 'text/plain'});
     response.write("Bad gateway error");
     response.end();
   }
};


fs.readFile('listings.json', 'utf8', function(err, data) {
   //create server
   server = http.createServer(requestHandler);
   //save data into listing data variable
   listingData = data;
   // the server is now started, listening for requests on port 8080
   server.listen(port, function() {
     //once the server is listening, this callback function is executed
     console.log('Server listening on: http://127.0.0.1:' + port);
   });
});
