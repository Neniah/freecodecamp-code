
function repeatStringNumTimes(str, num) {
  // repeat after me
  var piece = str;
  if(num >= 0){
    for (var i = 0; i < num-1; i++){
      str = str + piece;
    }
  }else{
      str = "";
    }
  return str;
}

repeatStringNumTimes("abc", 5);
