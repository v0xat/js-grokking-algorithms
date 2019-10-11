max = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  else { 
    let sub_max = max(arr.slice(1));
    return arr[0] > sub_max ? arr[0] : sub_max;
  }
}

console.log(max([]));
console.log(max([6, 3]));
console.log(max([1, 2, 7, 4, 25, 2, 1, 4]));