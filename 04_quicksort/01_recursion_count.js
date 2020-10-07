const count = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  return 1 + count(arr.slice(1));
};

console.log(count([]));
console.log(count([3]));
console.log(count([1, 2, 3, 4, 5]));