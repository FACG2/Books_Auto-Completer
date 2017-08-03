function search(str, books){
  var obj = {}, counter = 0;
  Object.keys(JSON.parse(JSON.stringify(books))).filter((val) => {
    if(books[val].includes(str)) return true && counter++ < 15;
    return false;
  }).map((element) =>{obj[element] = books[element]});
  return obj;
}

module.exports = search;
