class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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
    if (this.head) {
      return this.head.value;
    }

    return undefined;
  }

  isEmpty() {
    return !this.head;
  }
}

module.exports = LinkedListStack;
