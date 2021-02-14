const ArrayDeque = require('./array-deque');
const DoublyLinkedListDeque = require('./doubly-linked-list-deque');

const implementations = [ArrayDeque, DoublyLinkedListDeque];

implementations.forEach(Deque => {
  test(`${Deque.name} - create a new Deque`, () => {
    const deque = new Deque();
    expect(deque).not.toBeNull();
  });

  test(`${Deque.name} - peekFront empty deque returns undefined`, () => {
    const deque = new Deque();
    expect(deque.peekFront()).toBeUndefined();
  });

  test(`${Deque.name} - peekEnd empty deque returns undefined`, () => {
    const deque = new Deque();
    expect(deque.peekEnd()).toBeUndefined();
  });

  test(`${Deque.name} - append / peekEnd single`, () => {
    const deque = new Deque();
    deque.append(1);

    expect(deque.peekEnd()).toBe(1);
  });

  test(`${Deque.name} - prepend / peekFront single`, () => {
    const deque = new Deque();
    deque.prepend(1);

    expect(deque.peekFront()).toBe(1);
  });

  test(`${Deque.name} - append / peekFront single`, () => {
    const deque = new Deque();
    deque.append(1);

    expect(deque.peekFront()).toBe(1);
  });

  test(`${Deque.name} - prepend / peekFront single`, () => {
    const deque = new Deque();
    deque.prepend(1);

    expect(deque.peekEnd()).toBe(1);
  });

  test(`${Deque.name} - prepend / popFront single`, () => {
    const deque = new Deque();
    deque.prepend(1);

    expect(deque.popFront()).toBe(1);
    expect(deque.peekFront()).toBeUndefined();
  });

  test(`${Deque.name} - append / popEnd single`, () => {
    const deque = new Deque();
    deque.append(1);

    expect(deque.popEnd()).toBe(1);
    expect(deque.peekEnd()).toBeUndefined();
  });

  test(`${Deque.name} - append / popFront single`, () => {
    const deque = new Deque();
    deque.append(1);

    expect(deque.popFront()).toBe(1);
    expect(deque.peekFront()).toBeUndefined();
  });

  test(`${Deque.name} - prepend / popEnd single`, () => {
    const deque = new Deque();
    deque.prepend(1);

    expect(deque.popEnd()).toBe(1);
    expect(deque.peekEnd()).toBeUndefined();
  });

  test(`${Deque.name} - prepend / popFront multiple`, () => {
    const deque = new Deque();
    deque.prepend(1);
    deque.prepend(2);
    deque.prepend(3);

    expect(deque.popFront()).toBe(3);
    expect(deque.popFront()).toBe(2);
    expect(deque.popFront()).toBe(1);
    expect(deque.peekEnd()).toBeUndefined();
    expect(deque.peekFront()).toBeUndefined();
  });

  test(`${Deque.name} - append / popEnd multiple`, () => {
    const deque = new Deque();
    deque.append(1);
    deque.append(2);
    deque.append(3);

    expect(deque.popEnd()).toBe(3);
    expect(deque.popEnd()).toBe(2);
    expect(deque.popEnd()).toBe(1);
    expect(deque.peekEnd()).toBeUndefined();
    expect(deque.peekFront()).toBeUndefined();
  });

  test(`${Deque.name} - append / popFront multiple`, () => {
    const deque = new Deque();
    deque.append(1);
    deque.append(2);
    deque.append(3);

    expect(deque.popFront()).toBe(1);
    expect(deque.popFront()).toBe(2);
    expect(deque.popFront()).toBe(3);
    expect(deque.peekEnd()).toBeUndefined();
    expect(deque.peekFront()).toBeUndefined();
  });

  test(`${Deque.name} - prepend / popEnd multiple`, () => {
    const deque = new Deque();
    deque.prepend(1);
    deque.prepend(2);
    deque.prepend(3);

    expect(deque.popEnd()).toBe(1);
    expect(deque.popEnd()).toBe(2);
    expect(deque.popEnd()).toBe(3);
    expect(deque.peekEnd()).toBeUndefined();
    expect(deque.peekFront()).toBeUndefined();
  });

  test(`${Deque.name} - isEmpty on empty Deque`, () => {
    const deque = new Deque();

    expect(deque.isEmpty()).toBe(true);
  });

  test(`${Deque.name} - isEmpty on non-empty Deque`, () => {
    const deque = new Deque();
    deque.append(1);

    expect(deque.isEmpty()).toBe(false);
  });
});
