var handlers = require('./handlers.js');


function router(req, res){
  var url = req.url;
  // handle Home
  if(url === "/"){
    handlers.handleHome(req, res);
  }
  // handle Find Words
  else if(url === "/find-words"){
    hanlers.handleWords(req, res);
  }

}


module.exports = router;
