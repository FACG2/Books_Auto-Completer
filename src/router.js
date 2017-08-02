var handlers = require('./handlers.js');

function router(req, res){
  var url = req.url;
  // handle Home
  if(url === "/"){
    handlers.handleHome(req, res);
  }
  // handle Search
  else if(url === "/search"){
    handlers.handleSearch(req, res);
  }
  else{
    handlers.handleGeneric(req, res);
  }

}


module.exports = router;
