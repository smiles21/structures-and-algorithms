const Queue = require('../../structures/queue/linked-list-queue');

const bfsHelper = (node, func, queue, visited) => {
  if (!node) {
    return;
  }

  func(node.value);
  visited.add(node.value);

  node.neighbors.forEach(neighbor => {
    if (!visited.has(neighbor.value)) {
      queue.push(neighbor);
    }
  });

  const nextNode = queue.pop();
  bfsHelper(nextNode, func, queue, visited);
};

module.exports = (startingNode, func) => bfsHelper(startingNode, func, new Queue(), new Set());
