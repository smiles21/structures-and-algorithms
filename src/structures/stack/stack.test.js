const ArrayStack = require('./array-stack');

[ArrayStack].forEach(Stack => {
  test(`${Stack.name} - create a new Stack`, () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
  });

  test(`${Stack.name} - push / peek single`, () => {
    const stack = new Stack();
    stack.push(1);

    expect(stack.peek()).toBe(1);
  });

  test(`${Stack.name} - push / peek multiple`, () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
  });

  test(`${Stack.name} - pop`, () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  test(`${Stack.name} - pop on empty Stack returns undefined`, () => {
    const stack = new Stack();

    expect(stack.pop()).toBeUndefined();
  });

  test(`${Stack.name} - isEmpty on empty Stack`, () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
  });

  test(`${Stack.name} - isEmpty on empty Stack`, () => {
    const stack = new Stack();
    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

});
