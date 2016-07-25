function largestOfFour(arr) {
  // You can do this!
  var result = [];
  var max = 0;

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){

      if ( arr[i][j] >= max){
        max = arr[i][j];
      }

    }
    if(j == 4) result.push(max);
  }

  return result;
}

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
