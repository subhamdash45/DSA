class Stack {
  constructor() {
    this.items = [];
  }

  // Push element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Return true if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Print the elements of the stack
  print() {
    console.log(this.items.toString());
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack contents:");
stack.print();

console.log("Top element: " + stack.peek());

console.log("Popped element: " + stack.pop());
console.log("Stack contents after pop:");
stack.print();

console.log("Is stack empty? " + stack.isEmpty());
console.log("Stack size: " + stack.size());
