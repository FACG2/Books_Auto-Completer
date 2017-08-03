var fs = require("fs");
var queryString = require('querystring');
var logic = require('./logic');
var books = require('./JSON/books.json');

var contentTypes = {
  css: 'text/css',
  js: 'application/javascript',
  ico: 'image/x-icon',
  jpg: 'image/jpg'
};

function handleHome(req, res){
  fs.readFile(__dirname + "/../public/index.html", function(err, data){
    if(err){
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.end('<h1>Internal Server Error</h1>');
    }
    else{
      res.writeHead(200 , {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}

function handleSearch(req, res){
  var searchQuery=req.url.split('=')[1];
  var result = logic(decodeURIComponent(searchQuery), books);
  res.end(JSON.stringify(result));
}

// function to handle CSS JS and any other files
function handleGeneric(req, res){
  var parts = req.url.split('.');
  var fileExtension = parts[parts.length - 1];
  fs.readFile(__dirname + "/../public" + req.url , function(err, data){
    if(err){
      res.writeHead(500 , {'Content-Type': 'text/html'});
      res.end('<h1>Internal Server Error</h1>');
    }
    else{
      res.writeHead(200 , {'Content-Type': contentTypes[fileExtension]});
      res.end(data);
    }
  });
}

module.exports = {
  handleHome: handleHome,
  handleSearch: handleSearch,
  handleGeneric: handleGeneric
}
