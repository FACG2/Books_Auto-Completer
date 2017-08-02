var test = require('tape');
var logic = require('../logic.js');


test.forEach(function(test){
  test('Example Test', function(t){
    t.equals(test.actual , test.expected , test.description);
    t.end();
  });
});


var tests = [
  {//7
    actual: logic('harry'),
    expected: ["harry potter and the philosopher's stone", "harry potter and the chamber of secrets",
               "harry potter and the half-blood prince","harry potter and the prisoner of azkaban",
               "harry potter and the order of the phoenix","harry potter and the goblet of fire",
               "harry potter and the deathly hallows","harry potter box set (books 1-7)"] ,
    description: "Harry Potter Series Books"
  },

  {//15
    actual: logic('the'),
    expected: ["the hobbit", "the da vinci code", "the catcher in the rye","the great gatsby",
                "the hunger games","the kite runner","the lord of the rings","the fellowship of the ring",
                "the curious incident of the dog in the night-time",
                "the odyssey","the time traveler's wife","the girl with the dragon tattoo",
                "the two towers","the return of the king","the book thief"],
    description: "the hobbit book";
  },

{//15
  actual: logic('a');
  expected: ["animal farm","angels & demons","a game of thrones","anna karenina",
  "american gods","a wrinkle in time","a tale of two cities","a thousand splendid suns","atonement",
 "a clash of kings","a clockwork orange","anne frank: the diary of a young girl","angela's ashes",
  "atlas shrugged","a short history of nearly everything"],
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
