// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

//  assert.strictEqual(divisibleByThree('123'), true, "Should return true if the sum of the given digits is divisible by 3.")
//     assert.strictEqual(divisibleByThree('19254'), true, "Should return true if the sum of the given digits is divisible by 3.")
//     assert.strictEqual(divisibleByThree('88'), false, "Should return false if the sum of the given digits is not divisible by 3.")
//     assert.strictEqual(divisibleByThree('1'), false, "Should return false if the sum of the given digits is not divisible by 3.")

function divisibleByThree(str){
    let check = str.split('').map(item => Number(item)).reduce((total, curr) => total + curr) / 3
  
    if((Math.floor(check) === check)) {
      return true
    } else {
      return false
    }
  }
  
  console.log(divisibleByThree("100853"))