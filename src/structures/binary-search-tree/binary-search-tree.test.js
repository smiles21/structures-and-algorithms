const RecursiveGraphBST = require('./recursive-graph-bst');

const implementations = [
  RecursiveGraphBST,
];

implementations.forEach(BST => {
  test(`${BST.name} - create a new BST`, () => {
    const bst = new BST();
    expect(bst).not.toBeNull();
  });

  test(`${BST.name} - empty BST has size 0`, () => {
    const bst = new BST();
    expect(bst.size()).toBe(0);
  });

  test(`${BST.name} - size on BST of 1 node`, () => {
    const bst = new BST();
    bst.insert(5);

    expect(bst.size()).toBe(1);
  });
  
  test(`${BST.name} - size on BST of 3 nodes`, () => {
    const bst = new BST();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);

    expect(bst.size()).toBe(3);
  });

  test(`${BST.name} - size on BST of 5 nodes`, () => {
    const bst = new BST();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(4);

    expect(bst.size()).toBe(5);
  });

  test(`${BST.name} - isEmpty on empty BST`, () => {
    const bst = new BST();
    expect(bst.isEmpty()).toBe(true);
  });

  test(`${BST.name} - size on BST of 1 node`, () => {
    const bst = new BST();
    bst.insert(5);

    expect(bst.isEmpty()).toBe(false);
  });

  test(`${BST.name} - getAll on empty BST`, () => {
    const bst = new BST();
    expect(bst.getAll()).toEqual([]);
  });

  test(`${BST.name} - getAll on BST of 1 node`, () => {
    const bst = new BST();
    bst.insert(5);

    expect(bst.getAll()).toEqual([5]);
  });

  test(`${BST.name} - size on BST of 3 nodes`, () => {
    const bst = new BST();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);

    expect(bst.getAll()).toEqual([3, 5, 7]);
  });

  test(`${BST.name} - hasItem on empty BST`, () => {
    const bst = new BST();
    expect(bst.hasItem(5)).toBe(false);
  });

  test(`${BST.name} - hasItem on non-empty BST with value present`, () => {
    const bst = new BST();
    bst.insert(5);

    expect(bst.hasItem(5)).toBe(true);
  });

  test(`${BST.name} - hasItem on non-empty BST without value present`, () => {
    const bst = new BST();
    bst.insert(5);

    expect(bst.hasItem(3)).toBe(false);
  });

  test(`${BST.name} - hasItem on non-empty BST with height > 2 and value present in leaf`, () => {
    const bst = new BST();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(4);

    expect(bst.hasItem(4)).toBe(true);
  });

  test(`${BST.name} - hasItem on non-empty BST with height > 2 and value present in non-leaf node`, () => {
    const bst = new BST();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(4);

    expect(bst.hasItem(3)).toBe(true);
  });
});
