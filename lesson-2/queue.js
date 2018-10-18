class Node {
  constructor (value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class Queue {
  constructor () {
    this.length = 0
    this.head = null
    this.tail = null
  }

  enqueue (value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }

    this.length++
  }

  dequeue () {
    const { value } = this.head

    this.head = this.head.next

    this.length--

    return value
  }

  peek () {
    return this.head.value
  }
}

// Setup
const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

// Test peek
// Should be 1
console.log(q.peek())

// Test dequeue
// Should be 1
console.log(q.dequeue())

// Test enqueue
q.enqueue(4)
// Should be 2
console.log(q.dequeue())
// Should be 3
console.log(q.dequeue())
// Should be 4
console.log(q.dequeue())
q.enqueue(5)
// Should be 5
console.log(q.peek())
