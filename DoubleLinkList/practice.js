class Node {
  constructor(value) {
    this.value = value
    this.pre = null
    this.next = null
  }
}

class DLList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.head = newNode
      this.tail = newNode
      this.length = 1
    } else {
      this.tail.next = newNode
      newNode.pre = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.length) {
      return null
    } else if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
    } else {
      let temp = this.tail
      this.tail = this.tail.pre
      this.tail.next = null
      temp.pre = null
      this.length--
      return temp
    }
  }

  unshift(value) {
    if (!this.length) {
      this.head = newNode
      this.tail = newNode
      this.length = 1
    } else {
      const newNode = new Node(value)
      newNode.next = this.head
      this.head.pre = newNode
      this.head = newNode
      this.length++
    }
    return this
  }

  shift() {
    if (!this.length) {
      return null
    } else if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
    } else {
      let temp = this.head
      this.head = temp.next
      this.head.pre = null
      temp.next = null
      this.length--
    }
    return this
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    // } else {
    //   let temp = this.head
    //   for (let i = 0; i < index; i++) {
    //     temp = temp.next
    //   }
    //   return temp
    // }
    let temp = this.head
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    } else {
      temp = this.tail
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.pre
      }
    }
    return temp
  }

  setValueByIndex(index, value) {
    if (index < 0 || index >= this.length) {
      return null
    } else {
      const node = this.getByIndex(index)
      node.value = value
      return node
    }
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return null
    } else if (index === 0) {
      return this.unshift(value)
    } else if (index === this.length) {
      return this.push(value)
    } else {
      const newNode = new Node(value)
      let pre = this.getByIndex(index - 1)
      let post = pre.next
      newNode.pre = pre
      pre.next = newNode
      newNode.next = post
      post.pre = newNode
      this.length++
      return newNode
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null
    } else if (index === 0) {
      return this.shift()
    } else if (index === this.length) {
      return this.pop()
    } else {
      let temp = this.getByIndex(index)
      temp.pre.next = temp.next
      temp.next.pre = temp.pre
      temp.pre = null
      temp.next = null
      this.length--
      return temp
    }
  }
}

const myDLList = new DLList(5)
myDLList.push(2)
