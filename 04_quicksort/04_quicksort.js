const quicksort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const less = [];
  const greater = [];
  const arr = array.slice(1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less[i] = arr[i];
    }
    else {
      greater[i] = arr[i];
    }
  }

  return quicksort(less).concat(pivot, quicksort(greater));
};

console.log(quicksort([10, 5, 2, 3]));