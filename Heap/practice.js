class Heap {
  #heap = [];

  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  #shrink(index) {
    let maxIndex = index;
    let size = this.#heap.length;

    while (true) {
      let leftIndex = this.#leftChild(index);
      let rightIndex = this.#rightChild(index);

      if (leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex])
        maxIndex = leftIndex;

      if (rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex])
        maxIndex = rightIndex;

      if (index !== maxIndex) {
        this.#swap(maxIndex, index);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  insert(value) {
    this.#heap.push(value);
    let currentIndex = this.#heap.length - 1;

    while (
      currentIndex > 0 &&
      this.#heap[currentIndex] > this.#heap[this.#parent(currentIndex)]
    ) {
      this.#swap(currentIndex, this.#parent(currentIndex));
      currentIndex = this.#parent(currentIndex);
    }
  }

  remove() {
    const maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#shrink(0);
    return maxValue;
  }
}

const myHeap = new Heap();
// check insert
// myHeap.insert(99);
// myHeap.insert(72);
// myHeap.insert(61);
// myHeap.insert(58);
// myHeap.insert(43);

// console.log(myHeap.getHeap());

// myHeap.insert(100);
// console.log(myHeap.getHeap());

// myHeap.insert(75);
// console.log(myHeap.getHeap());

// check remove
myHeap.insert(95);
myHeap.insert(75);
myHeap.insert(80);
myHeap.insert(55);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(65);

console.log(myHeap.getHeap());

myHeap.remove();
console.log(myHeap.getHeap());

myHeap.remove();
console.log(myHeap.getHeap());
