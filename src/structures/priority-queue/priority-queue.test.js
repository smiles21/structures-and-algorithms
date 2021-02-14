const LinkedListPriorityQueue = require('./linked-list-priority-queue');

const implementations = [LinkedListPriorityQueue];

implementations.forEach(PriorityQueue => {
  test(`${PriorityQueue.name} - create a new PriorityQueue`, () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue).not.toBeNull();
  });

  test(`${PriorityQueue.name} - peek empty priorityQueue returns undefined`, () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue.peek()).toBeUndefined();
  });

  test(`${PriorityQueue.name} - push / peek single`, () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.push(1, 1);

    expect(priorityQueue.peek()).toBe(1);
  });

  test(`${PriorityQueue.name} - push / peek multiple`, () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.push(1, 3);
    priorityQueue.push(2, 2);
    priorityQueue.push(3, 1);

    expect(priorityQueue.peek()).toBe(1);
  });

  test(`${PriorityQueue.name} - push / peek multiple out of order`, () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.push(1, 1);
    priorityQueue.push(2, 3);
    priorityQueue.push(3, 2);

    expect(priorityQueue.peek()).toBe(2);
  });

  test(`${PriorityQueue.name} - push / pop multiple`, () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.push(1, 1);
    priorityQueue.push(2, 3);
    priorityQueue.push(3, 2);

    expect(priorityQueue.pop()).toBe(2);
    expect(priorityQueue.pop()).toBe(3);
    expect(priorityQueue.pop()).toBe(1);
  });

  test(`${PriorityQueue.name} - pop`, () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.push(1, 2);
    priorityQueue.push(2, 1);

    expect(priorityQueue.pop()).toBe(1);
    expect(priorityQueue.peek()).toBe(2);
  });

  test(`${PriorityQueue.name} - pop multiple`, () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.push(1, 2);
    priorityQueue.push(2, 1);

    expect(priorityQueue.pop()).toBe(1);
    expect(priorityQueue.pop()).toBe(2);
    expect(priorityQueue.peek()).toBeUndefined();
  });

  test(`${PriorityQueue.name} - pop on empty PriorityQueue returns undefined`, () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue.pop()).toBeUndefined();
  });

  test(`${PriorityQueue.name} - pop to empty PriorityQueue`, () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.push(1, 1);
    priorityQueue.pop();

    expect(priorityQueue.isEmpty()).toBe(true);
  });

  test(`${PriorityQueue.name} - isEmpty on empty PriorityQueue`, () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue.isEmpty()).toBe(true);
  });

  test(`${PriorityQueue.name} - isEmpty on non-empty PriorityQueue`, () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.push(1, 1);

    expect(priorityQueue.isEmpty()).toBe(false);
  });
});
