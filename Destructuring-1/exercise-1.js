let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
let [first, second] = [num1, num2];
num2 = first;
num1 = second;

console.log('After swap: ', num1, num2); // After swap: 20 10
