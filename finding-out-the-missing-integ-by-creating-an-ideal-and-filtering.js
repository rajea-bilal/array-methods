// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits(arr) {
  
    let check = arr.join('').split('').sort((a, b) => a - b).map(item => Number(item))
    // return check
  
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    return numbers.filter(item => !check.includes(item)).join('')
    
  }
  
  console.log(unusedDigits([12, 34, 56, 78]))