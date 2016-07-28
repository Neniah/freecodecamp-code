
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  var i = 0;
 while(i < arr.length){
   result.push(arr.slice(i, i+=size));
 }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
