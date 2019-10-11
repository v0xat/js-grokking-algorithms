sum = (arr) => {
    if (arr.length === 0) {
      return 0;
    }
    else {    
      return arr[0] + sum(arr.slice(1));
    }
}

console.log(sum([]));
console.log(sum([3]));
console.log(sum([1, 2, 3, 4, 5]));

