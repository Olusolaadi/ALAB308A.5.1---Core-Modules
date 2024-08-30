import {Stack} from "./stack.js";


// Test the Stack class
const stack = new Stack();

console.log(stack.isEmpty()); // Expected output: true
console.log(!stack.isEmpty()); // Expected output: false
console.log(stack.push(10)); // Expected output: undefined
console.log(stack.push(20)); // Expected output: undefined
console.log(stack.push(30)); // Expected output: undefined
console.log(stack.peek()); // Expected output: 30
console.log(stack.pop()); // Expected output: 30
console.log(stack.peek()); // Expected output: 20
console.log(stack.isEmpty()); // Expected output: false
console.log(stack.size()); // Expected output: 2
console.log(stack.pop()); // Expected output: 20
console.log(stack.peek()); // Expected output: 10
console.log(stack.pop()); // Expected output: 10
console.log(stack.peek()); // Expected output: "Stack is empty"
console.log(stack.pop()); // Expected output: "Stack is empty"
console.log(stack.size()); // Expected output: 0
console.log(stack.isEmpty()); // Expected output: true




stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Expected output: 30
console.log(stack.pop());  // Expected output: 30
console.log(stack.peek()); // Expected output: 20
console.log(stack.isEmpty()); // Expected output: false
console.log(stack.size()); // Expected output: 2
stack.clear();
console.log(stack.isEmpty()); // Expected output: true










