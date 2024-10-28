function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    // a = 1
    // b = 2
    // op = divide
    let val = op(a, b); // divide(5, 2)
    return val;
  }
  
const ans = doOperation(1, 2, sum)
const ans2 = doOperation(1, 2, subtract)
const ans3 = doOperation(5, 2, divide)
const ans4 = doOperation(5, 2, multiply)

console.log(ans) // 1+2 = 3
console.log(ans2) // 1-2 = -1
console.log(ans3) // 5/2 = 2.5
console.log(ans4) // 5*2 = 10