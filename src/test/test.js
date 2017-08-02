var test = require('tape');
var logic = require('../logic.js');




var tests = [
  {//7
    actual: logic('harry'),
    expected: {"0":"harry potter and the philosopher's stone","1":"harry potter and the chamber of secrets",
               "2":"harry potter and the half-blood prince","3":"harry potter and the prisoner of azkaban",
               "4":"harry potter and the order of the phoenix","5":"harry potter and the goblet of fire",
               "6":"harry potter and the deathly hallows","559":"harry potter box set (books 1-7)"} ,
    description: "Harry Potter Series Books"
  },

  {//15
    actual: logic('the'),
    expected: {"937":"the hobbit", "10": "the da vinci code", "12": "the catcher in the rye","13": "the great gatsby",
                "15":"the hunger games","16":"the kite runner","20":"the lord of the rings","23":"the fellowship of the ring",
                "25":"the curious incident of the dog in the night-time",
                "29":"the odyssey","31":"the time traveler's wife","34":"the girl with the dragon tattoo",
                "35":"the two towers","37":"the return of the king","43":"the book thief"},
    description: "the hobbit book"
  },

{//15
  actual: logic('a'),
  expected: {"": "animal farm","": "angels & demons","": "a game of thrones","": "anna karenina",
  "": "american gods","": "a wrinkle in time","": "a tale of two cities","": "a thousand splendid suns","": "atonement",
 "": "a clash of kings","": "a clockwork orange","": "anne frank: the diary of a young girl","": "angela's ashes",
  "": "atlas shrugged","": "a short history of nearly everything"},
  description: "all books that starts at 'a'"

},

{//1
  actual:logic('1984'),
  expected: ['1984'],
  description: '1984 novel, George Orwell'
},

{//2
  actual: logic('song'),
  expected: ["song of susannah", "song of solomon"],
  description: "Books that starts at SONG word"

},

{//5
  actual: logic('dead'),
  expected: ["dead until dark","dead to the world", "dead as a doornail", "dead souls", "dead and gone"],
  description: "Books that starts at DEAD word"
},

{//3
  actual: logic('red'),
  expected: ["redwall", "red dragon", "red mars"],
  description: "Books that starts at RED word"
},

{//15
  actual: logic('g'),
  expected: ["great expectations","good omens: the nice and accurate prophecies of agnes nutter, witch",
            "guns, germs, and steel: the fates of human societies","gone with the wind","gulliver's travels",
            "girl with a pearl earring","gone girl","green eggs and ham","goodnight moon",
            "gödel, escher, bach: an eternal golden braid","guards! guards!","going postal",
            "getting things done: the art of stress-free productivity","gravity's rainbow","gilead"],
      description: "all books that starts at 'g'"
},
{//0
  actual: logic(' ‪blue‬‏'),
  expected: [],
  description: "No book contain blue"
}
];



tests.forEach(function(element){
  test('Example Test', function(t){
    t.deepEqual(element.actual , element.expected , element.description);
    t.end();
  });
});
