var fs = require("fs");

function handleHome(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Home Page');

  // render index.html page
}

function handleSearch(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Search Page!!!');
  // 
  // get data from books.json file
}

function handleGeneric(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Generic Request');
}

module.exports = {
  handleHome: handleHome,
  handleSearch: handleSearch,
  handleGeneric: handleGeneric
}
