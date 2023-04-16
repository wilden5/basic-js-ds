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
class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue( value ) {
    const node = new ListNode(value); // new node that we wanna add / next is null by default

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node; // tail = last added node;

    if (!this.head) { // if no head - add this node as well as head / in case of empty queue
      this.head = node;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const dequeueValue = this.head.value; // only for return we need that
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return dequeueValue;
  }
}

module.exports = {
  Queue
};
