const inOrderTraversal = require('./binary-in-order');
const postOrderTraversal = require('./binary-post-order');
const preOrderTraversal = require('./binary-pre-order');

// Push a value into an array so we can return it from the traversals
const append = items => value => items.push(value);

// Simple Binary Tree Node for testing
class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe('Tree Traversals', () => {
  test('in-order zero nodes', () => {
    const items = [];
    const root = null;

    inOrderTraversal(root, append(items));
    expect(items).toEqual([]);
  });

  test('in-order single node', () => {
    const items = [];
    const root = new BinaryTreeNode(5);

    inOrderTraversal(root, append(items));
    expect(items).toEqual([5]);
  });

  test('in-order single child', () => {
    const items = [];
    const leftChild = new BinaryTreeNode(3);
    const root = new BinaryTreeNode(5, leftChild);

    inOrderTraversal(root, append(items));
    expect(items).toEqual([3, 5]);
  });


  test('in-order multiple node', () => {
    const items = [];
    const leftLeftGrandChild = new BinaryTreeNode(1);
    const leftRightGrandChild = new BinaryTreeNode(4);
    const leftChild = new BinaryTreeNode(3, leftLeftGrandChild, leftRightGrandChild);
    const rightLeftGrandChild = new BinaryTreeNode(6);
    const rightChild = new BinaryTreeNode(7, rightLeftGrandChild);
    const root = new BinaryTreeNode(5, leftChild, rightChild);

    inOrderTraversal(root, append(items));
    expect(items).toEqual([1, 3, 4, 5, 6, 7]);
  });

  test('pre-order zero nodes', () => {
    const items = [];
    const root = null;

    preOrderTraversal(root, append(items));
    expect(items).toEqual([]);
  });

  test('pre-order single node', () => {
    const items = [];
    const root = new BinaryTreeNode(5);

    preOrderTraversal(root, append(items));
    expect(items).toEqual([5]);
  });

  test('pre-order single child', () => {
    const items = [];
    const leftChild = new BinaryTreeNode(3);
    const root = new BinaryTreeNode(5, leftChild);

    preOrderTraversal(root, append(items));
    expect(items).toEqual([5, 3]);
  });

  test('pre-order multiple node', () => {
    const items = [];
    const leftLeftGrandChild = new BinaryTreeNode(1);
    const leftRightGrandChild = new BinaryTreeNode(4);
    const leftChild = new BinaryTreeNode(3, leftLeftGrandChild, leftRightGrandChild);
    const rightLeftGrandChild = new BinaryTreeNode(6);
    const rightChild = new BinaryTreeNode(7, rightLeftGrandChild);
    const root = new BinaryTreeNode(5, leftChild, rightChild);

    preOrderTraversal(root, append(items));
    expect(items).toEqual([5, 3, 1, 4, 7, 6]);
  });

  test('post-order zero nodes', () => {
    const items = [];
    const root = null;

    postOrderTraversal(root, append(items));
    expect(items).toEqual([]);
  });

  test('post-order single node', () => {
    const items = [];
    const root = new BinaryTreeNode(5);

    postOrderTraversal(root, append(items));
    expect(items).toEqual([5]);
  });

  test('post-order single child', () => {
    const items = [];
    const leftChild = new BinaryTreeNode(3);
    const root = new BinaryTreeNode(5, leftChild);

    postOrderTraversal(root, append(items));
    expect(items).toEqual([3, 5]);
  });

  test('post-order multiple node', () => {
    const items = [];
    const leftLeftGrandChild = new BinaryTreeNode(1);
    const leftRightGrandChild = new BinaryTreeNode(4);
    const leftChild = new BinaryTreeNode(3, leftLeftGrandChild, leftRightGrandChild);
    const rightLeftGrandChild = new BinaryTreeNode(6);
    const rightChild = new BinaryTreeNode(7, rightLeftGrandChild);
    const root = new BinaryTreeNode(5, leftChild, rightChild);

    postOrderTraversal(root, append(items));
    expect(items).toEqual([1, 4, 3, 6, 7, 5]);
  });
});
