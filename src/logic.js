var books = require('./JSON/books.json');
// var fs = require('fs');
var str = "harry";

var obj = JSON.parse(JSON.stringify(books));
// console.log(obj);
// console.log(typeof JSON.stringify(books));
// console.log(Object.keys(JSON.parse(JSON.stringify(books))));

var arr = Object.keys(JSON.parse(JSON.stringify(books))).filter(function(val){
  if(books[val].startsWith(str)){
    
  }
});
