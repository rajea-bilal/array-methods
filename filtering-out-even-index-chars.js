// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

//  assert.deepEqual(evenChars ("1234"), ["2", "4"])
//     assert.deepEqual(evenChars (";;;--"), [";", "-"])
//     assert.deepEqual(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])
//   })
//   it("Should work for invalid strings", () => {
//     assert.deepEqual(evenChars ("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva"), "invalid string")
//     assert.deepEqual(evenChars ("a"), "invalid string")
//     assert.deepEqual(evenChars (""), "invalid string")
    
function evenChars(string) {
  
    let check = string.split('')
    if(check.length < 2 || check.length > 100){
      return "invalid string"
    } 
      let filtered = check.filter((item, index) => index % 2 === 1)
      return filtered
    
      
}

console.log(evenChars(""))