// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6
 // assert.strictEqual(calc('abcdef'), 6);
 //    assert.strictEqual(calc('ifkhchlhfd'), 6); 
 //    assert.strictEqual(calc('aaaaaddddr'), 30); 
 //    assert.strictEqual(calc('jfmgklf8hglbe'), 6);  
 //    assert.strictEqual(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);

 function calc(x){

    let change = x.split('').map(c => c.charCodeAt(0)).join('').split('').map(Number)
    let oldNum = change.reduce((total, curr) => total + curr, 0)
    // return oldNum
      
    let check = change.map(item => item === 7 ? 1 : item).reduce((total, curr) => total + curr, 0)
    // return check
      
    let diff = oldNum - check
    return diff
      
    }
        
    console.log(calc('jfmgklf8hglbe'))