class Element {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = head
  }

  append (element) {
    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = element
  }

  getPosition (position) {
    let current = this.head

    for (let i = 1; i <= position; i++) {
      if (position === i) {
        return current
      }

      current = current.next
    }

    return null
  }

  insert (newElement, position) {
    if (position === 1) {
      const { head } = this
      newElement.next = head
      this.head = newElement
      return
    }

    let current = this.head

    for (let i = 1; i <= position; i++) {
      if ((position - 1) === i) {
        const { next } = current
        current.next = newElement
        newElement.next = next
        return
      }

      current = current.next
    }
  }

  delete (value) {
    let current = this.head
    let previous = null

    while (current.value !== value && current.next) {
      previous = current
      current = current.next
    }

    if (current.value === value) {
      if (previous !== null) {
        previous.next = current.next
        return
      }

      this.head = current.next
    }
  }
}

// Test cases
// Set up some Elements
const e1 = new Element(1)
const e2 = new Element(2)
const e3 = new Element(3)
const e4 = new Element(4)

// Start setting up a LinkedList
const ll = new LinkedList(e1)
ll.append(e2)
ll.append(e3)

// Test getPosition
// Should print 3
console.log(ll.head.next.next.value)
// Should also print 3
console.log(ll.getPosition(3).value)

// Test insert
ll.insert(e4, 3)
// Should print 4 now
console.log(ll.getPosition(3).value)

// Test delete
ll.delete(1)
// Should print 2 now
console.log(ll.getPosition(1).value)
// Should print 4 now
console.log(ll.getPosition(2).value)
// Should print 3 now
console.log(ll.getPosition(3).value)
