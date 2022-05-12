// Task
// Test.assertEquals(tidyNumber(12),true);
//   Test.assertEquals(tidyNumber(102),false);
//   Test.assertEquals(tidyNumber(9672),false);
//   Test.assertEquals(tidyNumber(2789),true);
//   Test.assertEquals(tidyNumber(2335),true);

function tidyNumber(number){
  
    if(Number(number.toString().split('').sort((a, b) => a - b).join('')) == number) {
      return true
    } else {
      return false
    }

}
  
console.log(tidyNumber(102))

