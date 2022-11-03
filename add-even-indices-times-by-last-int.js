// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// Test.assertEquals(evenLast([2, 3, 4, 5]), 30)

function evenLast(numbers) {
  
    if(numbers.lenth === 0 || numbers.length < 4) {
      return 0
    } else {
      
        let check = numbers.filter((item, index) => index % 2 === 0)
        let lastInt = numbers.pop()
  
        let sum = 0
        for(let i = 0; i < check.length; i++){
          sum = sum + check[i]
        }
        return sum * lastInt
    }
    
  
  }
  
  console.log(evenLast([2, 3, 4, 5]))