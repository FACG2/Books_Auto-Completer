var handlers = require('./handlers.js');

function router(req, res){
  var url = req.url;
  // handle Home
  if(url === "/"){
    handlers.handleHome(req, res);
  }
  // handle Search
  else if(url.startsWith("/search")){
    handlers.handleSearch(req, res);
  }
  // handle All Public Files
  else if(url === "/css/main.css"){
    handlers.handleCss(req, res);
  }
  else if(url === "/js/dom.js"){
    handlers.handleJs(req, res);
  }
  else if(url === "/image/book.jpg"){
    handlers.handleImage(req, res);
  }
  else{
    handlers.handleGeneric(req, res);
  }
}


module.exports = router;
