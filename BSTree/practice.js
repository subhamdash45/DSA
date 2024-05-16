class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BSTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let temp = this.root
    while (true) {
      if (newNode.value === temp.value) {
        return undefined
      } else if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      } else {
        if (!temp.right) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false
    } else {
      let temp = this.root
      while (temp) {
        if (value === temp.value) return true
        else if (value < temp.value) temp = temp.left
        else {
          temp = temp.right
        }
      }
      return false
    }
  }
}

const myTree = new BSTree()
myTree.insert(25)
myTree.insert(5)
myTree.insert(7)
myTree.insert(30)
myTree.insert(55)
myTree.insert(27)
