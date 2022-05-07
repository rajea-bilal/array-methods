// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

//     assert.strictEqual(divCon([9, 3, '7', '3']), 2);
//     assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
//     assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 


function divCon(x){
  
    let stringIntegers = x.filter(item => item === item.toString()).map(item => Number(item)).reduce((total, curr) => total + curr, 0)
    let integers = x.filter(item => item === Number(item)).reduce((total, curr) => total + curr, 0)
   
   let difference = integers - stringIntegers
   return difference
  
  }
  
  console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
   