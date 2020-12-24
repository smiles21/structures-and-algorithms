class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const retVal = this.head.value;
    this.head = this.head.next;
    return retVal;
  }

  peek() {
    if (!this.head) {
      return undefined;
    }

    return this.head.value;
  }

  isEmpty() {
    return !this.head;
  }
}

module.exports = LinkedListQueue;
