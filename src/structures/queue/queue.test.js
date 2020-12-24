const ArrayQueue = require('./array-queue');
const LinkedListQueue = require('./linked-list-queue');

const implementations = [
  ArrayQueue,
  LinkedListQueue,
];

implementations.forEach(Queue => {
  test(`${Queue.name} - create a new Queue`, () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
  });

  test(`${Queue.name} - peek empty queue returns undefined`, () => {
    const queue = new Queue();
    expect(queue.peek()).toBeUndefined();
  });

  test(`${Queue.name} - push / peek single`, () => {
    const queue = new Queue();
    queue.push(1);

    expect(queue.peek()).toBe(1);
  });

  test(`${Queue.name} - push / peek multiple`, () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.peek()).toBe(1);
  });

  test(`${Queue.name} - pop`, () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);

    expect(queue.pop()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  test(`${Queue.name} - pop multiple`, () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);

    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.peek()).toBeUndefined();
  });

  test(`${Queue.name} - pop on empty Queue returns undefined`, () => {
    const queue = new Queue();

    expect(queue.pop()).toBeUndefined();
  });

  test(`${Queue.name} - pop to empty Queue`, () => {
    const queue = new Queue();
    queue.push(1);
    queue.pop();

    expect(queue.isEmpty()).toBe(true);
  });

  test(`${Queue.name} - isEmpty on empty Queue`, () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);
  });

  test(`${Queue.name} - isEmpty on non-empty Queue`, () => {
    const queue = new Queue();
    queue.push(1);

    expect(queue.isEmpty()).toBe(false);
  });
});
