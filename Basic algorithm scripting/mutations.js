function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();

  var count = 0;
  for(var i = 0; i < second.length; i++){
    for(var j = 0; j < first.length; j++){
      if( second[i] == first[j])
        count++;
    }
  }
  if(count == second.length)
  {  return true;}
  else
   { return false;}
}

mutation(["hello", "Hello"]);
