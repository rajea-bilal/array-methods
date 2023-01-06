// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// Test.assertEquals(consonantCount(''), 0, 'Test string is empty string');
// Test.assertEquals(consonantCount('aaaaa'), 0, 'Test string: "aaaaa"');
// Test.assertEquals(consonantCount('XaeiouX'), 2, 'Test string: "XaeiouX"');
// Test.assertEquals(consonantCount('Bbbbb'), 5, 'Test string: "Bbbbb"');

let str = '012345_Cb'
    
function consonantCount(str) {
  let underCase = str.toLowerCase()
  let cons = ['a', 'e', 'i', 'o', 'u']
  let alphas = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  let array = underCase.split('')
  let filtered = array.filter(item => item != " ")
  // return filtered
  let result = 0
  for(let i = 0; i < filtered.length; i++){
    if(!cons.includes(filtered[i]) && alphas.includes(filtered[i])){
      result += 1
    }
  }
  return result

}

console.log(consonantCount(str))