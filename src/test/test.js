var test = require('tape');
var logic = require('../logic.js');
var obj = require('../json/books.json');


test.forEach(function(test){
  test('Example Test', function(t){
    t.equals(test.actual , test.expected , test.description);
    t.end();
  });
});


var tests = [
  {
    actual: logic(),
    expected: ... ,
    description: "sohad"
  }
];
