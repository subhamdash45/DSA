class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.length = 1
  }

  printList() {
    let temp = this.head
    while (temp !== null) {
      console.log(temp.value)
      temp = temp.next
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null")
    } else {
      console.log("Head: " + this.head.value)
    }
  }

  getLength() {
    console.log("Length: " + this.length)
  }

  makeEmpty() {
    this.head = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  removeDuplicates() {
    const seen = new Set()
    let temp = this.head
    let pre = null
    while (temp) {
      if (seen.has(temp.value)) {
        pre.next = temp.next
        // temp.next = null
        this.length--
      } else {
        seen.add(temp.value)
        pre = temp
      }
      temp = temp.next
    }
  }

  // WRITE THE REMOVEDUPLICATES METHOD HERE //
  //                                        //
  //                                        //
  //                                        //
  //                                        //
  ////////////////////////////////////////////
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.push(5)

console.log("Original list:")
myLinkedList.printList()

myLinkedList.removeDuplicates()

console.log("\nList after removing duplicates:")
myLinkedList.printList()

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  3
  4
  5
  5
  List after removing duplicates:
  1
  2
  3
  4
  5

*/
