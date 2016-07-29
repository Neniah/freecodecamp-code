
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  var first, second;
  first = arr[0];
  second = arr[1];
  var count = 0;
  for(var i = 0; i < second.length; i++){
    for(var j = 0; j < first.length; j++){
      if( second[i] == first[j])
        count++;
    }
  }
  if(count == second.length)
    return true;
  else
    return false;
}

mutation(["hello", "hello"]);
