# Priority Queue

A Priority Queue is a data structure where each element has a value and a
priority. Elements with higher priority are returned sooner than elements with
lower priority, regardless of the order of insertion.

## Methods

### `push(value, priority)`

Push a new value into the Priority Queue at the priority specified

### `pop()`

Remove the element from the front of the Queue and return it.  Calling `pop` on
an empty Priority Queue returns `undefined`.

### `peek()`

Return the front element of the Queue but do not remove it.  Calling `peek` on
an empty Priority Queue returns `undefined`.

### `isEmpty()`

Return `true` if the Priority Queue has no elements in it, `false` if there is
at least one element
