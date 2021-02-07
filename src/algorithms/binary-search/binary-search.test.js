const iterativeBinarySearch = require('./iterative-binary-search');
const recursiveBinarySearch = require('./recursive-binary-search');

const implementations = [
  iterativeBinarySearch,
  // recursiveBinarySearch,
];

implementations.forEach(binarySearch => {
  test(`${binarySearch.name} - Empty list should return -1`, () => {
    const result = binarySearch([], 1);
    expect(result).toBe(-1);
  });

  test(`${binarySearch.name} - Single element list with value returns 0`, () => {
    const result = binarySearch([1], 1);
    expect(result).toBe(0);
  });

  test(`${binarySearch.name} - Single element list without value present returns -1`, () => {
    const result = binarySearch([1], 1);
    expect(result).toBe(0);
  });

  test(`${binarySearch.name} - Even-numbered element list with value present less than midpoint`, () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2);
    expect(result).toBe(1);
  });

  test(`${binarySearch.name} - Odd-numbered element list with value present less than midpoint`, () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
    expect(result).toBe(3);
  });

  test(`${binarySearch.name} - Even-numbered element list with value present greater than midpoint`, () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7);
    expect(result).toBe(6);
  });

  test(`${binarySearch.name} - Odd-numbered element list with value present greater than midpoint`, () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
    expect(result).toBe(8);
  });

  test(`${binarySearch.name} - Even-numbered element list without value present less than midpoint`, () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 0);
    expect(result).toBe(-1);
  });

  test(`${binarySearch.name} - Odd-numbered element list without value present less than midpoint`, () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
    expect(result).toBe(-1);
  });

  test(`${binarySearch.name} - Even-numbered element list without value present greater than midpoint`, () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 10);
    expect(result).toBe(-1);
  });

  test(`${binarySearch.name} - Odd-numbered element list without value present greater than midpoint`, () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
    expect(result).toBe(-1);
  });
});
