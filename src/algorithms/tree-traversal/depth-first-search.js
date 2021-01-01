const Stack = require('../../structures/stack/linked-list-stack');

const dfsHelper = (node, func, stack, visited) => {
  if (!node) {
    return;
  }

  func(node.value);
  visited.add(node.value);

  node.neighbors.forEach(neighbor => {
    if (!visited.has(neighbor.value)) {
      stack.push(neighbor);
    }
  });

  const nextNode = stack.pop();
  dfsHelper(nextNode, func, stack, visited);
};

module.exports = (startingNode, func) => dfsHelper(startingNode, func, new Stack(), new Set());
