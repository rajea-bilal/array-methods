// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
// Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
// Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);


let arr = [-3,-2,2,3]

function cubeOdd(arr) {

  
  let cubeResult = []
  for(const num of arr) {
    if(num % 2 === 1 || num % 2 === -1) {
      cubeResult.push(num)
    } else if(typeof num != "number"){
      return undefined
    }
  }

  return cubeResult.map(item => Math.pow(item, 3)).reduce((a, b) => a + b, 0)
  
}

console.log(cubeOdd(arr))