// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//   assert.strictEqual(insertDash(454793),'4547-9-3');
//     assert.strictEqual(insertDash(123456),'123456');
//     assert.strictEqual(insertDash(1003567),'1003-567');

function insertDash(num) {
   

    let numb = String(num)
    let newArray = []
    for(let i = 0; i < numb.length; i++) {
      if(numb[i] % 2 == 1 && numb[i + 1] % 2 == 1) {
        newArray.push(numb[i] + '-' )
      } else {
        newArray.push(numb[i])
      }
    }
    return newArray.join('')
    
    
    
    }
    
    console.log(insertDash(457))