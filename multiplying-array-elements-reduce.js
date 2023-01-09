// Task

// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes

// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// maxProduct ({4, 3, 5}, 2) ==>  return (20)
//   Test.assertEquals(maxProduct([4,3,5], 2), 20);
//   Test.assertEquals(maxProduct([10,8,7,9], 3), 720);
//   Test.assertEquals(maxProduct([8,6,4,6], 3), 288);
//   Test.assertEquals(maxProduct([10,2,3,8,1,10,4], 5), 9600);

let numbers = [10,2,3,8,1,10,4]
let size = 5
function maxProduct(numbers, size){
  
  let sorted = numbers.sort((a, b) => b - a)
  let slicedArray = sorted.slice(0, size)
  return slicedArray.reduce((a, b) => a * b, 1)
}

console.log(maxProduct(numbers, size))