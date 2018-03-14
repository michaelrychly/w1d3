function countLetters(sentence){

  var withoutSpaces = sentence.split(" ").join("").toLowerCase();;
  var letterObject = { };

  for (var i = 0; i < withoutSpaces.length; i++) {
    var letter = withoutSpaces[i];

    if(letterObject[letter] === undefined){
      letterObject[letter] = 1;
    }
    else{
      letterObject[letter] += 1;
    }
  }

  for (var letter in letterObject){
    console.log(letter + " " + letterObject[letter]);
  }
}

console.log(countLetters("lighthouse in the house"));