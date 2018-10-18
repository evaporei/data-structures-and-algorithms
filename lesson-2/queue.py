# using python list as helper
# class Queue:
#     def __init__(self, head=None):
#         self.storage = [head]
#
#     def enqueue(self, new_element):
#         self.storage.append(new_element)
#
#     def peek(self):
#         return self.storage[0]
#
#     def dequeue(self):
#         return self.storage.pop(0)
# # Setup
# q = Queue(1)
# q.enqueue(2)
# q.enqueue(3)
#
# # Test peek
# # Should be 1
# print(q.peek())
#
# # Test dequeue
# # Should be 1
# print(q.dequeue())
#
# # Test enqueue
# q.enqueue(4)
# # Should be 2
# print(q.dequeue())
# # Should be 3
# print(q.dequeue())
# # Should be 4
# print(q.dequeue())
# q.enqueue(5)
# # Should be 5
# print(q.peek())

# creating everything from scratch
class Node:
    def __init__(self, value=None):
        self.value = value
        self.next = None
        self.previous = None

class Queue:
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

    def enqueue(self, value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.previous = self.tail
            self.tail = new_node
        self.length += 1

    def dequeue(self):
        value = self.head.value
        self.head = self.head.next
        self.length -= 1
        return value

    def peek(self):
        return self.head.value

# Setup
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

# Test peek
# Should be 1
print(q.peek())

# Test dequeue
# Should be 1
print(q.dequeue())

# Test enqueue
q.enqueue(4)
# Should be 2
print(q.dequeue())
# Should be 3
print(q.dequeue())
# Should be 4
print(q.dequeue())
q.enqueue(5)
# Should be 5
print(q.peek())
