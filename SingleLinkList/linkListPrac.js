class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const myNode = new Node(value)
    this.head = myNode
    this.tail = myNode
    this.length = 1
  }

  push(value) {
    const myNode = new Node(value)
    if (!this.head) {
      this.head = myNode
      this.tail = myNode
    } else {
      this.tail.next = myNode
      this.tail = myNode
    }
    this.length++
    return
  }

  pop() {
    if (!this.head) {
      return undefined
    } else if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return undefined
    } else {
      let temp = this.head
      let pre = this.head
      while (temp.next) {
        pre = temp
        temp = temp.next
      }
      this.tail = pre
      this.tail.next = null
      this.length--
      return temp
    }
  }

  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return
  }

  shift() {
    if (!this.head) {
      return undefined
    } else if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return undefined
    } else {
      const tempHead = this.head
      this.head = this.head.next
      tempHead.next = null
      this.length--
      return
    }
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  getByValue(value) {
    let temp = this.head
    if (temp.value === value) return { node: temp, index: 0 }
    for (let i = 0; i < this.length; i++) {
      if (temp.value === value) return { node: temp, index: i }

      temp = temp.next
    }
  }

  setValue(index, value) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    let temp = this.head
    const indexValue = this.getByIndex(index)
    indexValue.value = value
    return indexValue
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      return this.unshift(value)
    }
    if (index === this.length) {
      return this.push(value)
    }
    // const newNode = new Node(value)
    // let temp = this.head
    // let pre = this.head
    // for (let i = 0; i < index; i++) {
    //   pre = temp
    //   temp = temp.next
    // }
    // newNode.next = temp
    // pre.next = newNode
    // this.length++
    // get the value by using build in method

    const newNode = new Node(value)
    const temp = this.getByIndex(index - 1)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
  }

  // remove(index) {
  //   if (index < 0 || index >= this.length) {
  //     return undefined
  //   }
  //   if (index === 0 && this.length === 1) {
  //     this.head = null
  //     this.tail = null
  //     this.length = 0
  //   }
  //   let temp = this.head
  //   let pre = this.head
  //   for (let i = 0; i < index; i++) {
  //     pre = temp
  //     temp = temp.next
  //   }
  //   if (!temp.next) {
  //     pre.next = null
  //     this.tail = pre
  //     length--
  //     return temp
  //   }
  //   const post = temp.next
  //   pre.next = post
  //   temp.next = null
  //   return temp
  // }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === 0) return this.shift()

    if (index === this.length - 1) return this.pop()

    const before = this.getByIndex(index - 1)
    const temp = before.next

    before.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let pre = null
    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = pre
      pre = temp
      temp = next
    }
    return true
  }
}

const myLinkedList = new LinkedList(5)
myLinkedList.push(3)
// myLinkedList.pop()
