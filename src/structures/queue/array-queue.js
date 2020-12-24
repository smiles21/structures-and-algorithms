class ArrayQueue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);
  }

  pop() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

module.exports = ArrayQueue;
