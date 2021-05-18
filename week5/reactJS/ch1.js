plusTwo = s => s + 2

console.log(plusTwo(10));

arr = [1, 2, 3, 4, 5, 6, 7, 8, 12, 6543, 234, 765311, 134567];

// arr_map = arr.map(function (value) { return value * 2 });
arr_map = arr.map(value => value * 2);
console.log(arr_map);

arr_filter = arr.filter(value => value > 10);
console.log(arr_filter);