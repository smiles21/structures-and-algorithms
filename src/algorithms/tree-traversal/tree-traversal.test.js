const breadthFirstSearch = require('./breadth-first-search');
const depthFirstSearch = require('./depth-first-search');
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

class TreeNode {
  constructor(value, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors;
  }

  addNeighbors(nodes) {
    if (!nodes) {
      return;
    }

    this.neighbors.push(...nodes);
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

  test('breadth-first-search zero nodes', () => {
    const items = [];
    const initialNode = null;

    breadthFirstSearch(initialNode, append(items));
    expect(items).toEqual([]);
  });

  test('breadth-first-search single node', () => {
    const items = [];
    const initialNode = new TreeNode('A');

    breadthFirstSearch(initialNode, append(items));
    expect(items).toEqual(['A']);
  });

  test('breadth-first-search single neighbor', () => {
    const items = [];
    const initialNode = new TreeNode('A');
    const neighbor = new TreeNode('B', [initialNode]);
    initialNode.addNeighbors([neighbor]);

    breadthFirstSearch(initialNode, append(items));
    expect(items).toEqual(['A', 'B']);
  });

  test('breadth-first-search linear tree', () => {
    const items = [];
    const initialNode = new TreeNode('A');
    const middleNode = new TreeNode('B');
    const lastNode = new TreeNode('C');
    initialNode.addNeighbors([middleNode]);
    middleNode.addNeighbors([initialNode, lastNode]);
    lastNode.addNeighbors([middleNode]);

    breadthFirstSearch(initialNode, append(items));
    expect(items).toEqual(['A', 'B', 'C']);
  });

  test('breadth-first-search multi-node tree', () => {
    const items = [];
    const initialNode = new TreeNode('A');
    const bNode = new TreeNode('B');
    const cNode = new TreeNode('C');
    const dNode = new TreeNode('D');
    const eNode = new TreeNode('E');
    const fNode = new TreeNode('F');
    const gNode = new TreeNode('G');

    initialNode.addNeighbors([bNode, cNode]);
    bNode.addNeighbors([dNode, eNode]);
    cNode.addNeighbors([fNode, gNode]);

    breadthFirstSearch(initialNode, append(items));
    expect(items).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  });

  test('depth-first-search zero nodes', () => {
    const items = [];
    const initialNode = null;

    depthFirstSearch(initialNode, append(items));
    expect(items).toEqual([]);
  });

  test('depth-first-search single node', () => {
    const items = [];
    const initialNode = new TreeNode('A');

    depthFirstSearch(initialNode, append(items));
    expect(items).toEqual(['A']);
  });

  test('depth-first-search single neighbor', () => {
    const items = [];
    const initialNode = new TreeNode('A');
    const neighbor = new TreeNode('B', [initialNode]);
    initialNode.addNeighbors([neighbor]);

    depthFirstSearch(initialNode, append(items));
    expect(items).toEqual(['A', 'B']);
  });

  test('depth-first-search linear tree', () => {
    const items = [];
    const initialNode = new TreeNode('A');
    const middleNode = new TreeNode('B');
    const lastNode = new TreeNode('C');
    initialNode.addNeighbors([middleNode]);
    middleNode.addNeighbors([initialNode, lastNode]);
    lastNode.addNeighbors([middleNode]);

    depthFirstSearch(initialNode, append(items));
    expect(items).toEqual(['A', 'B', 'C']);
  });

  test('depth-first-search multi-node tree', () => {
    const items = [];
    const initialNode = new TreeNode('A');
    const bNode = new TreeNode('B');
    const cNode = new TreeNode('C');
    const dNode = new TreeNode('D');
    const eNode = new TreeNode('E');
    const fNode = new TreeNode('F');
    const gNode = new TreeNode('G');

    initialNode.addNeighbors([bNode, cNode]);
    bNode.addNeighbors([dNode, eNode]);
    cNode.addNeighbors([fNode, gNode]);

    depthFirstSearch(initialNode, append(items));
    expect(items).toEqual(['A', 'C', 'G', 'F', 'B', 'E', 'D']);
  });
});
