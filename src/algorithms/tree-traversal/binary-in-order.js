const inOrderTraversal = (node, func) => {
  if (!node) {
    return;
  }

  inOrderTraversal(node.left, func);
  func(node.value);
  inOrderTraversal(node.right, func);
};

module.exports = inOrderTraversal;
