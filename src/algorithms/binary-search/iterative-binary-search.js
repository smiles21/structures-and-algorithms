const iterativeBinarySearch = (list, value) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const midpoint = Math.floor((low + high) / 2);

    if (list[midpoint] < value) {
      low = midpoint + 1;
    } else if (list[midpoint] > value) {
      high = midpoint - 1;
    } else {
      return midpoint;
    }
  }

  return -1;
};

module.exports = iterativeBinarySearch;
