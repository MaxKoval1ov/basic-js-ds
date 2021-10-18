const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return !this.size;
  }

  

  dequeue() {
    if (this.isEmpty()) return null
    const itemToBeRemoved = this.head
    if (this.head === this.tail) {
      this.tail = null
    }
    this.head = this.head.next
    this.size--
    return itemToBeRemoved.value
  }

  enqueue(value) {
    const newNode = new ListNode(value)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  getUnderlyingList() {
    return this.head
}

}
