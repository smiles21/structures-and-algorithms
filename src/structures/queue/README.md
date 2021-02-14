# Queue

A Queue is a data structure which implements a Fist-In-Last-Out order of
elements. Think of it as similar to people waiting in a line at a ticket
window. The first person who entered the line will be the first person helped.

## Methods

### `push(value)`

Push a new value to the end of the Queue

### `pop()`

Remove the top element from the front of the Queue and return it. Calling `pop`
on an empty Queue returns `undefined`.

### `peek()`

Return the front element of the Queue but do not remove it. Calling `peek` on an
empty Queue returns `undefined`.

### `isEmpty()`

Return `true` if the Queue has no elements in it, `false` if there is at least
one element
