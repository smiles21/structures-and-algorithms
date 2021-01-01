const postOrderTraversal = (node, func) => {
  if (!node) {
    return;
  }

  postOrderTraversal(node.left, func);
  postOrderTraversal(node.right, func);
  func(node.value);
};

module.exports = postOrderTraversal;
