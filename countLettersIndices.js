function countLetters(sentence){
  var letterObject = {};
  var test = [1, 2];

  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    var indices = new Array;

    for (var j = 0; j < sentence.length; j++) {

      if (sentence[j] === letter && sentence[j] !== " "){
        indices += (indices.length === 0 ? "" : ", ") + j;
      }
    }

    if(letterObject[letter] === undefined && sentence[i] !== " "){
      letterObject[letter] = indices;
    }
  }

  for (var letter in letterObject){
      console.log(letter + " " + letterObject[letter]);
  }
}

console.log(countLetters("lighthouse in the house"));

//lighthouse in the house
//01234567890123456789012
//letter indices
//l 0
//i 1, 11
//g 2
//h 3, 5, 15, 18
//t 4, 14
//o 6, 19
//u 7, 20
//s 8, 21
//e 9, 16, 22
//n 12