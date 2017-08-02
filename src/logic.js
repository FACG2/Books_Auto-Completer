// /*
// {
//   "0": {
//           bookName: "sffsdf",
//           authorName: "sdfs"
//        },
//   "1":{
//           bookName: "skdfgjhkjsdf",
//           authorName: "fsdyghfklx"
//       }
// }
//
//
//
// */
// // Object.keys(obj) ==> [0,1,2, ... , 999]
// // arr = [0,1,2,...]
// obj['0']
//
//  str = "sff";
// var arr = Object.keys(obj).filter(function(book){
//     return book.bookName.startsWith(str);
// });
//
//
// var newArr = arr.map(function(element){
//   return obj[element].bookName;
// });
//
// // newArr ==> ['sffsdf']
var books = require('./JSON/books.json');
// console.log(books['0']);
console.log(books);
// var arr = [];
// for(let i =0 ; i < 1000 ; ++i){
//   if(books[i].startsWith()){
//     arr.push(books[i]);
//   }
// }
//
// console.log(arr);
