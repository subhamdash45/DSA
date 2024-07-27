class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  partitionList(x) {
    // If the list is empty, do nothing
    if (this.head === null) return;

    // Create dummy nodes for two sublists
    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    // Initialize prev pointers for sublists
    let prev1 = dummy1;
    let prev2 = dummy2;
    // Initialize current pointer at head
    let current = this.head;

    // Iterate through the list
    while (current !== null) {
      debugger;
      // If current value is less than x
      if (current.value < x) {
        // Add current node to the first sublist
        // console.log(current, "current")
        // console.log(prev1, "before", prev1.next)
        prev1.next = current;
        // console.log(prev1, "mid", prev1.next)
        prev1 = current;
        // console.log(prev1, "after", prev1.next)
      } else {
        // Add current node to the second sublist
        prev2.next = current;
        prev2 = current;
      }
      // Move current pointer to the next node
      current = current.next;
    }
    console.log("after everything", prev1);

    // Terminate the second sublist
    prev2.next = null;
    // Merge the sublists
    prev1.next = dummy2.next;

    // Update the head of the list
    this.head = dummy1.next;
  }

  //   +===================================================+
  //   |                  WRITE YOUR CODE HERE             |
  //   | Description:                                      |
  //   | - This method partitions a linked list around a   |
  //   |   value `x`.                                      |
  //   | - It rearranges the nodes in such a way that all  |
  //   |   nodes less than `x` come before all nodes       |
  //   |   greater than or equal to `x`.                   |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - We use two dummy nodes, `dummy1` and `dummy2`,  |
  //   |   to build two separate lists: one for elements   |
  //   |   smaller than `x` and one for elements greater   |
  //   |   or equal to `x`.                                |
  //   | - We then merge these two lists.                  |
  //   | - `prev1` and `prev2` are pointers to the last    |
  //   |   nodes of these lists.                           |
  //   | - The head of the resulting list is set as        |
  //   |   `dummy1.next`.                                  |
  //   +===================================================+
}

//  +=====================================================+
//  |                                                     |
//  |          THE TEST CODE BELOW WILL PRINT             |
//  |              OUTPUT TO "USER LOGS"                  |
//  |                                                     |
//  |  Use the output to test and troubleshoot your code  |
//  |                                                     |
//  +=====================================================+

// Helper function to create list from array
function createListFromArray(arr) {
  const ll = new LinkedList(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ll.push(arr[i]);
  }
  return ll;
}

// Helper function to compare list with array
function listMatchesArray(ll, arr) {
  let temp = ll.head;
  let i = 0;
  while (temp !== null && i < arr.length) {
    if (temp.value !== arr[i]) {
      return false;
    }
    temp = temp.next;
    i++;
  }
  return temp === null && i === arr.length;
}

// Function to run a single test
function runTest(testNum, description, ll, x, expectedArr) {
  console.log("---------------------------------------");
  console.log(`Test ${testNum}: ${description}`);
  console.log("BEFORE: ");
  ll.printList();
  console.log("PARTITION: " + x);
  ll.partitionList(x);
  console.log("AFTER: ");
  ll.printList();
  console.log(listMatchesArray(ll, expectedArr) ? "PASS" : "FAIL");
}

// Test 1: Basic partition
let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
runTest(1, "Basic partition", ll1, 3, [1, 2, 2, 4, 3, 5]);

// Test 2: No elements to partition
let ll2 = createListFromArray([4, 5, 6]);
runTest(2, "No elements to partition", ll2, 3, [4, 5, 6]);

// Test 3: All elements smaller
let ll3 = createListFromArray([1, 2, 2]);
runTest(3, "All elements smaller", ll3, 3, [1, 2, 2]);

// Test 4: Single-element list
let ll4 = createListFromArray([1]);
runTest(4, "Single-element list", ll4, 3, [1]);

// Test 5: All elements equal to partition
let ll5 = createListFromArray([3, 3, 3]);
runTest(5, "All elements equal to partition", ll5, 3, [3, 3, 3]);

console.log("---------------------------------------");
