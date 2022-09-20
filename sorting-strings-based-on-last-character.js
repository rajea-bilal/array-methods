// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
//     assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
//     assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    

function last(x){
  
    let check = x.split(' ')
  
    let change = check.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
    
    return change
  
  }
  
  console.log(last('take me to semynak'))