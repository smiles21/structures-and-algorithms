class PriorityNode {
  constructor(value, priority, next = null) {
    this.value = value;
    this.priority = priority;
    this.next = next;
  }
}

class LinkedListPriorityQueue {
  constructor() {
    this.head = null;
  }

  push(value, priority) {
    const newNode = new PriorityNode(value, priority);

    if (!this.head) {
      this.head = newNode;
      return true;
    }

    if (this.head.priority < priority) {
      newNode.next = this.head;
      this.head = newNode;
      return true;
    }

    let node = this.head;
    while (node && value < node.value) {
      node = node.next;
    }

    newNode.next = node.next;
    node.next = newNode;
    return true;
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

  // getAllItems() {
  //   const items = [];

  //   let node = this.head;
  //   while (node) {
  //     items.push({ value: node.value, priority: node.priority });
  //     node = node.next;
  //   }

  //   return items;
  // }

  isEmpty() {
    return !this.head;
  }
}

module.exports = LinkedListPriorityQueue;
