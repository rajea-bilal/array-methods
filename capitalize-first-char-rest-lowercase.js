// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {

    let map = names.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
    return map
  }
  
  console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))
  
  