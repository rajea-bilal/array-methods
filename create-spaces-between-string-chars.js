// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// assert.equal(spacify('hello world'),'h e l l o   w o r l d')
// assert.equal(spacify('12345'),'1 2 3 4 5')

function spacify(str) {
  
    let transform = str.split('').join(' ')
    return transform
  }
  
  console.log(spacify('12345'))