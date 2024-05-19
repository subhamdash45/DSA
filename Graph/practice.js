class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertexes(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }
    return false
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      return true
    }
    return false
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (value) => value !== vertex2
      )
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (value) => value !== vertex1
      )
      return true
    }
    return false
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined
    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop()
      // this.removeEdge(vertex, temp)
      if (this.adjacencyList[temp]) {
        this.adjacencyList[temp] = this.adjacencyList[temp].filter(
          (value) => value !== vertex
        )
      } else {
        return false
      }
    }
    delete this.adjacencyList[vertex]
    return this
  }
}

const myGraph = new Graph()
