class Element {
  constructor (value = null) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = head
  }

  insertFirst (newElement) {
    newElement.next = this.head
    this.head = newElement
  }

  deleteFirst () {
    const { head } = this

    if (this.head) {
      this.head = this.head.next
      head.next = null
    }

    return head
  }
}

class Stack {
  constructor (element) {
    this.ll = new LinkedList(element)
  }

  push (newElement) {
    this.ll.insertFirst(newElement)
  }

  pop () {
    return this.ll.deleteFirst()
  }
}

// Test cases
// Set up some Elements
const e1 = new Element(1)
const e2 = new Element(2)
const e3 = new Element(3)
const e4 = new Element(4)

// Start setting up a Stack
const stack = new Stack(e1)

// Test stack functionality
stack.push(e2)
stack.push(e3)

// should console.log 3
console.log(stack.pop().value)
// should console.log 2
console.log(stack.pop().value)
// should console.log 1
console.log(stack.pop().value)
// should console.log None
console.log(stack.pop())
stack.push(e4)
// should console.log 4
console.log(stack.pop().value)
