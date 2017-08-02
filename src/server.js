var http = require('http');
var router = require('./router.js');
var server = http.createServer(router);

server.listen (process.env.PORT || 3000 , function(){
  console.log("You working in port 4000");
});
