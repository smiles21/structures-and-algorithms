class DoublyLinkedListNode {
  constructor(value, previous = null, next = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

class LinkedListDeque {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return true;
    }

    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    return true;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return true;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    return true;
  }

  popFront() {
    if (!this.head) {
      return undefined;
    }

    const retVal = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return retVal;
  }

  popEnd() {
    if (!this.tail) {
      return undefined;
    }

    const retVal = this.tail.value;
    this.tail = this.tail.previous;

    if (!this.tail) {
      this.head = null;
    }

    return retVal;
  }

  peekFront() {
    if (!this.head) {
      return undefined;
    }

    return this.head.value;
  }

  peekEnd() {
    if (!this.tail) {
      return undefined;
    }

    return this.tail.value;
  }

  isEmpty() {
    return !this.head && !this.tail;
  }
}

module.exports = LinkedListDeque;
