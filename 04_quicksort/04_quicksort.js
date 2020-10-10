const quicksort = (array) => {
  if (array.length < 2) return array;

  const pivot = array[0];
  const less = [];
  const greater = [];
  const arr = array.slice(1);

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    }
    else {
      greater.push(arr[i]);
    }
  }

  return quicksort(less).concat(pivot, quicksort(greater));
};

console.log(quicksort([10, 5, -2, 3, 100, 113, 99, -5]));