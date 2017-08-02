var fs = require('fs');
var contentTypes = {
  html: ' text/html',
  css: 'text/css',
  js: 'application/javascript',
  ico: 'image/x-icon',
};

function handleHome(req,res)
{
  var url = req.url;
    var parts = url.split('.');
    var fileExtension = parts[parts.length - 1];
    fs.readFile(__dirname + '/../../public/index.html', function(err, data) {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/html'
        });
        res.end('<h1>Internal Server Error</h1>');

      } else {
        res.writeHead(200, {
          'Content-Type': contentTypes[fileExtension]
        });
        res.end(data);

      }
    });
}

function handleSearch(req,res)
{
  var url = req.url;
    var parts = url.split('.');
    var fileExtension = parts[parts.length - 1];
    fs.readFile(__dirname + '../public/books.js', function(err, data) {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/html'
        });
        res.end('<h1>Internal Server Error</h1>');

      } else {
        res.writeHead(200, {
          'Content-Type': contentTypes[fileExtension]
        });
        res.end(data);

      }
    });
}

function handleNotFound(req,res)
{
  res.writeHead(200, {
    'Content-Type': 'text/css'
  });
  res.end('<h1>Not Found</h1>');
}
module.exports = {
  handleHome :handleHome ,
  handleSearch :handleSearch,
  handleNotFound:handleNotFound
}


// var fs = require("fs");
//
// function handleHome(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Home Page');
//
//   // render index.html page
// }
//
// function handleSearch(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Search Page!!!');
//   //
//   // get data from books.json file
// }
//
// function handleGeneric(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Generic Request');
// }
//
// module.exports = {
//   handleHome: handleHome,
//   handleSearch: handleSearch,
//   handleGeneric: handleGeneric
// }
