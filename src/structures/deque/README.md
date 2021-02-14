# Deque

A Deque is essentially a doubly-linked list where elements can be added to
both the head and the tail of the list. It is a generalization of a queue
and is sometimes referred to as a Double-Ended Queue, or dequeue.

## Methods

### `prepend(value)`

Push a new value to the front of the Deque

### `append(value)`

Push a new value to the end of the Deque

### `popFront()`

Remove the front element from the front of the Deque and return it. Calling `popFront`
on an empty Deque returns `undefined`.

### `popEnd()`

Remove the back element from the front of the Deque and return it. Calling `popEnd`
on an empty Deque returns `undefined`.

### `peekFront()`

Return the front element of the Deque but do not remove it. Calling `peekFront` on an
empty Deque returns `undefined`.

### `peekEnd()`

Return the back element of the Deque but do not remove it. Calling `peekEnd` on an
empty Deque returns `undefined`.

### `isEmpty()`

Return `true` if the Deque has no elements in it, `false` if there is at least
one element
