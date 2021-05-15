// Arrow function -----------------------------
// Original
// plusTwo = (s) => {
//     return s + 2
// }

// Simple
// plusTwo = (s) => s + 2

// More simple
plusTwo = s => s + 2


// Map ----------------------------------------
arr = [1, 2, 3, 4, 5, 6, 199, 1394, 32412]

// Original
// arr_map = arr.map(function(v) {return v*2})

// Simple
// arr_map = arr.map(v => {return v*2})

// More simple
arr_map = arr.map(v => v*2)
console.log(arr_map)

// Filter -------------------------------------
arr_filter = arr.filter(v => v>10)
console.log(arr_filter)