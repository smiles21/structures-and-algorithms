const recursionHelper = (list, value, low, high) => {
  if (low >= high && list[low] !== value) {
    return -1;
  }

  const midpoint = Math.floor((low + high) / 2);

  if (list[midpoint] > value) {
    return recursionHelper(list, value, low, midpoint - 1);
  } else if (list[midpoint] < value) {
    return recursionHelper(list, value, midpoint + 1, high);
  } else {
    return midpoint;
  }
};

const recursiveBinarySearch = (list, value) => {
  return recursionHelper(list, value, 0, list.length - 1);
};

module.exports = recursiveBinarySearch;
