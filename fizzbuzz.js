// Print all numbers from 1 to 100. If divisible by 3, console.log "fizz". If divisible by 5, console.log "buzz. If divisible by both, console.log "fizzbuzz"

function fizzBuzz() {
  for (var i = 1; i < 100; i++){
    if (i % 3 === 0 && i % 5 !== 0){
      console.log("Fizz");
    }
    else if (i % 5 === 0 && i % 3 !== 0){
      console.log("Buzz");
    }
    else if (i % 5 === 0 && i % 3 === 0){
      console.log("Fizz Buzz");
    }
    else {
      console.log(i);
    } 
  }
  return i;
}





