class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class RecursuveGraphBST {
  constructor() {
    this.root = null;
  }

  _inOrderTraversalHelper(func, node) {
    if (!node) {
      return;
    }

    this._inOrderTraversalHelper(func, node.left);
    func(node.value);
    this._inOrderTraversalHelper(func, node.right);
  }

  _insertHelper(value, node) {
    if (value === node.value) {
      return false;
    }

    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
        return true;
      } else {
        return this._insertHelper(value, node.left)
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
        return true;
      } else {
        return this._insertHelper(value, node.right);
      }
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return true;
    } else {
      return this._insertHelper(value, this.root);
    }
  }

  _removeHelper(value, node) {
    if (!node) {
      return false;
    }

    
  }

  remove(value) {
    return this._removeHelper(value, this.root);
  }

  _hasItemHelper(value, node) {
    if (!node) {
      return undefined;
    }

    if (node.value === value) {
      return node;
    } else if (value < node.value) {
      return this._hasItemHelper(value, node.left);
    } else {
      return this._hasItemHelper(value, node.right);
    }
  }

  hasItem(value) {
    return Boolean(this._hasItemHelper(value, this.root));
  }

  getAll() {
    const items = [];
    const func = value => items.push(value);
    this._inOrderTraversalHelper(func, this.root);

    return items;
  }

  size() {
    let size = 0;
    const func = () => ++size;
    this._inOrderTraversalHelper(func, this.root);

    return size;
  }

  height() {
    return -1;
  }

  _maxHelper(node) {
    if (!node.right) {
      return node;
    }

    return this._maxHelper(node.right);
  }

  max() {
    if (!this.root) {
      return undefined;
    }

    return this._maxHelper(this.root).value;
  }

  _minHelper(node) {
    if (!node.left) {
      return node;
    }

    return this._minHelper(node.left);
  }

  min() {
    if (!this.root) {
      return undefined;
    }

    return this._minHelper(this.root).value;
  }

  isEmpty() {
    return !this.root;
  }
}

module.exports = RecursuveGraphBST;
