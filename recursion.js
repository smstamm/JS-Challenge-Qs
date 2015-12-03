// Use recursion to solve. 0 is even, 1 is odd, all others are n-2;

function isEven(num){
    if (num === 1)
      return false;
    else if (num === 0 || num % 2 === 0)
      return true;
    else 
      return isEven(num - 2);
}