
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var substring = [];
  substring = str.substr( str.length - target.length, str.length );
  if( substring == target){
    return true;
  } else {
    return false;
  }
  //return substring;
}

//confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");
