// var fs = require('fs');
// var contentTypes = {
//   html: ' text/html',
//   css: 'text/css',
//   js: 'application/javascript',
//   ico: 'image/x-icon',
// };
//
// function handleHome(req,res)
// {
//   var url = req.url;
//     var parts = url.split('.');
//     var fileExtension = parts[parts.length - 1];
//     fs.readFile(__dirname + '/../public/index.html', function(err, data) {
//       if (err) {
//         res.writeHead(500, {
//           'Content-Type': 'text/html'
//         });
//         console.log(err);
//         res.end('<h1>Internal Server Error</h1>');
//
//       } else {
//         res.writeHead(200, {
//           'Content-Type': contentTypes[fileExtension]
//         });
//         res.end(data);
//
//       }
//     });
// }
//
// function handleSearch(req,res)
// {
//   var url = req.url;
//     var parts = url.split('.');
//     var fileExtension = parts[parts.length - 1];
//     fs.readFile(__dirname + '/../public/books.js', function(err, data) {
//       if (err) {
//         res.writeHead(500, {
//           'Content-Type': 'text/html'
//         });
//         res.end('<h1>Internal Server Error</h1>');
//
//       } else {
//         res.writeHead(200, {
//           'Content-Type': contentTypes[fileExtension]
//         });
//         res.end(data);
//
//       }
//     });
// }
//
// function handleGeneric(req,res){
//   res.writeHead(200, {
//     'Content-Type': 'text/css'
//   });
//   res.end('<h1>Not Found</h1>');
// }
//
//
// module.exports = {
//   handleHome :handleHome ,
//   handleSearch :handleSearch,
//   handleGeneric:handleGeneric
// }


var fs = require("fs");

var contentTypes = {
  css: 'text/css',
  js: 'application/javascript',
  ico: 'image/x-icon',
};


function handleHome(req, res){
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end('Home Page');

  // render index.html page
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
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Search Page!!!');
  //
  // get data from books.json file
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
  res.end();
}

function handleImage(req, res){
  fs.readFile(__dirname + "/../public/image/book.jpg" , function(err, data){
    if(err){
      res.writeHead(500 , {'Content-Type': 'text/html'});
      res.end('<h1>Internal Server Error</h1>');
    }
    else{
      // res.writeHead()
      res.end(data);
    }
  });
  // res.end();
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
    // res.end();
  });
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end('Generic Request');
  // fs.readFile(__dirname + "/../public" + req.url, function(err, data){
  //   if(err){
  //     res.writeHead(500 , {'Content-Type': 'text/html'});
  //     res.end('<h1>Internal Server Error</h1>');
  //   }
  //   else{
  //     var parts = req.url.split('.');
  //     var fileExtension = parts[parts.length - 1];
  //     console.log(fileExtension)
  //     res.writeHead(200 , {'Content-Type': contentTypes[fileExtension] });
  //     res.end(data);
  //   }
  // });
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
