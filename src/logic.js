var books = require('./JSON/books.json');

function search(str){
  var res = [];
  // var res = {};
  var arr = Object.keys(JSON.parse(JSON.stringify(books))).filter(function(val){
    if(books[val].startsWith(str) && res.length < 15){
      res.push(books[val]);
      // res[val] = books[val];
      return true;
    }
    return false;
  });
  var counter = 0;
  var obj = {};
  arr.map(function(element){
    // console.log(element);
    obj[element] = books[element];
  });
  // console.log(obj);
  return obj;
}

// console.log(search('harry'));
// search('harry');

module.exports = search;
