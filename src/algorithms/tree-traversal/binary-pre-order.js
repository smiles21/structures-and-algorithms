const preOrderTraversal = (node, func) => {
  if (!node) {
    return;
  }

  func(node.value);
  preOrderTraversal(node.left, func);
  preOrderTraversal(node.right, func);
};

module.exports = preOrderTraversal;
