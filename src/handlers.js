var fs = require("fs");
var queryString = require('querystring');
var logic = require('./logic');

var contentTypes = {
  css: 'text/css',
  js: 'application/javascript',
  ico: 'image/x-icon'
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
  var result = logic(searchQuery.replace(/[+]/g," ").replace(/%20/g," "));
  res.end(JSON.stringify(result));
}

function handlePublic(req, res){
  var url = req.url;
  var parts = url.split('.');
  var fileExtension = parts[parts.length - 1];
  fs.readFile(__dirname + "/.." + url, function(err, data){
    if(err){
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.end('<h1>Internal Server Error</h1>');
    }
    else{
      res.writeHead(200 , {'Content-Type': contentTypes[fileExtension]});
      res.end(data);
    }
  });
}


function handleCss(req, res){
  fs.readFile(__dirname + "/../public/css/main.css", function(err, data){
    if(err){
      res.writeHead(500 , {'Content-Type': 'text/html'});
      res.end('<h1>Internal Server Error</h1>');
    }
    else{
      res.writeHead(200 , {'Content-Type': 'text/css'});
      res.end(data)
    }
  });
}

function handleJs(req, res){
  fs.readFile(__dirname + "/../public/js/dom.js", function(err, data){
    if(err){
      res.writeHead(500 , {'Content-Type': 'text/html'});
      res.end('<h1>Internal Server Error</h1>');
    }
    else{
      res.writeHead(200 , {'Content-Type': 'application/javascript'});
      res.end(data);
    }
  });
}

function handleImage(req, res){
  fs.readFile(__dirname + "/../public/image/book.jpg" , function(err, data){
    if(err){
      res.writeHead(500 , {'Content-Type': 'text/html'});
      res.end('<h1>Internal Server Error</h1>');
    }
    else{
      res.end(data);
    }
  });
}

function handleFav(req, res){
  fs.readFile(__dirname + "/.." + req.url, function(err, data){
    if(err){
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.end('<h1>Internal Server Error</h1>');
    }
    else{
        res.writeHead(200 , {'Content-Type': 'image/x-icon'});
        res.end(data);
    }
  });
}

function handleGeneric(req, res){
  var url = req.url;
  var parts = url.split('.');
  var fileExtension = parts[parts.length - 1];
  fs.readFile(__dirname + "/.." + url, function(err, data){
    if(err){
      res.writeHead(500, {'Content-Type': 'text/html'});
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
  handlePublic: handlePublic,
  handleCss: handleCss,
  handleJs: handleJs,
  handleImage: handleImage,
  handleFav: handleFav,
  handleGeneric: handleGeneric
}
