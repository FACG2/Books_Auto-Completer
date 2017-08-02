var test = require('tape');
var logic = require('../logic.js');




var tests = [
  {//7
    actual: logic('harry'),
    expected: {  "0": "harry potter and the philosopher's stone",
                  "1": "harry potter and the chamber of secrets",
                  "2": "harry potter and the half-blood prince",
                  "3": "harry potter and the prisoner of azkaban",
                  "4": "harry potter and the order of the phoenix",
                  "5": "harry potter and the goblet of fire",
                  "6": "harry potter and the deathly hallows","559": "harry potter box set (books 1-7)"} ,
    description: "Harry Potter Series Books"
  },

  {//15
    actual: logic('the'),
    expected: {"7":"the hobbit", "10": "the da vinci code", "12": "the catcher in the rye","13": "the great gatsby",
                "15":"the hunger games","16":"the kite runner","20":"the lord of the rings","23":"the fellowship of the ring",
                "25":"the curious incident of the dog in the night-time",
                "29":"the odyssey","31":"the time traveler's wife","34":"the girl with the dragon tattoo",
                "35":"the two towers","37":"the return of the king","43":"the book thief"},
    description: "the hobbit book"
  },

{//15
  actual: logic('a'),
  expected: {"18": "animal farm","22": "angels & demons","48": "a game of thrones","52": "anna karenina",
  "53": "american gods","67": "a wrinkle in time","71": "a tale of two cities","78": "a thousand splendid suns","91": "atonement",
 "100": "a clash of kings","109": "a clockwork orange","111": "anne frank: the diary of a young girl","121": "angela's ashes",
  "124": "atlas shrugged","129": "a short history of nearly everything"},
  description: "all books that starts at 'a'"

},

{//1
  actual:logic('1984'),
  expected: {"8":'1984'},
  description: '1984 novel, George Orwell'
},

{//2
  actual: logic('song'),
  expected: {"575":"song of susannah", "638":"song of solomon"},
  description: "Books that starts at SONG word"

},

{//5
  actual: logic('dead'),
  expected: {"277":"dead until dark","553":"dead to the world", "629": "dead as a doornail", "825": "dead souls", "883": "dead and gone"},
  description: "Books that starts at DEAD word"
},

{//3
  actual: logic('red'),
  expected: {"620":"redwall", "708":"red dragon", "967":"red mars"},
  description: "Books that starts at RED word"
},

{//15
  actual: logic('g'),
  expected: {"58":"great expectations","73":"good omens: the nice and accurate prophecies of agnes nutter, witch",
              "115":"guns, germs, and steel: the fates of human societies","133":"gone with the wind","172":"gulliver's travels",
              "213":"girl with a pearl earring","260":"gone girl","290":"green eggs and ham","350": "goodnight moon",
              "356": "gödel, escher, bach: an eternal golden braid","367": "guards! guards!","468": "going postal",
              "481": "getting things done: the art of stress-free productivity","539": "gravity's rainbow","561": "gilead"},
      description: "all books that starts at 'g'"
},
{//0
  actual: logic('blue‬‏'),
  expected: {},
  description: "No book contain blue"
}
];



tests.forEach(function(element){
  test('Example Test', function(t){
    t.deepEqual(element.actual , element.expected , element.description);
    t.end();
  });
});
