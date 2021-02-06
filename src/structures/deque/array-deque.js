class ArrayDeque {
  constructor() {
    this.deque = [];
  }

  prepend(value) {
    this.deque.unshift(value);
    return true;
  }

  append(value) {
    this.deque.push(value);
    return true;
  }

  popFront() {
    return this.deque.shift();
  }

  popEnd() {
    return this.deque.pop();
  }

  peekFront() {
    return this.deque[0];
  }

  peekEnd() {
    return this.deque[this.deque.length - 1];
  }

  isEmpty() {
    return this.deque.length === 0;
  }
}

module.exports = ArrayDeque;
