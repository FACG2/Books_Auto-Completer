var books = require('./JSON/books.json');

function search(str){
  var res = [];
  var arr = Object.keys(JSON.parse(JSON.stringify(books))).filter(function(val){
    if(books[val].startsWith(str) && res.length < 15){
      res.push(books[val]);
      return true;
    }
    return false;
  });
  var counter = 0;
  var obj = {};
  arr.map(function(element){
    obj[element] = books[element];
  });
  return obj;
}

module.exports = search;
