class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  // you can write push as enqueue
  push(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.head = newNode
      this.tail = newNode
      this.length = 1
    } else {
      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }
    return this
  }

  // you can write push as dequeue
  pop() {
    if (!this.length) {
      return null
    } else if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return null
    } else {
      let temp = this.head
      this.head = temp.next
      temp.next = null
      this.length--
      return temp
    }
  }
}

const myQueue = new Queue(5)
