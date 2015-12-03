//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end){
  for (var i = start; i < end; i++){
    console.log(i);
  }
  return i;
}

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 

function sum(arr){
  var result = 0;
  for (var j = 0; j < arr.length; j++){
    result += arr[j];
  }
  return result;
}


// Modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. 

function range2(start, end, step){
  for (var k = start; k < end; k += step){
    console.log(k);
  }
  return k;
}
