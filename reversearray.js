// Take an array as argument and produce a new array that has the same elements in the inverse order

function reverseArray(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    newArr.unshift(arr[i]);
  }
  return newArr;
}